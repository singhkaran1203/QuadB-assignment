import React from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  const id = data.show.id;
  console.log(data);

  const handleClick = () => {
    localStorage.setItem("movieId", id);
  };

  return (
    <Link
      to={`/movie/${id}`}
      style={{ textDecoration: "none", color: "white" }}
      onClick={handleClick}
    >
      <div className="cards">
        <img
          className="cards__img"
          src={data?.show?.image?.medium}
          alt="no poster"
        />
        <div className="cards__overlay">
          <div className="card__title">{data.show.name}</div>{" "}
          <div className="card__runtime">
            {data.show.language}
            <div className="card__rating">
              {data.show.rating.average || Math.round(data.score * 10, 1)}
            </div>
          </div>
          <div className="card__description">{data.show.genres[0]}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
