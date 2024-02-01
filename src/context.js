import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
const API_URL = "https://api.tvmaze.com/search/shows?q=all";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [movies,setMovies]=useState([]);
    const [error, setError]=useState(false)
    const getMovies = async (url) => {
        try {
          let response = await axios.get(url);
          setLoading(false);
          await setMovies(response.data);
          
        } catch (error) {
          console.log(error);
          setError(true);
        }
      };



  useEffect(() => {
    getMovies(API_URL);
    
  }, []);

  return <AppContext.Provider value={{loading,error,movies}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
