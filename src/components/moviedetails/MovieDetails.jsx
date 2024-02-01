import React, { useState } from "react";
import "./moviedetails.css";
import { NavLink } from "react-router-dom";
import Modal from "../../Modal.js";
import Form from "../../pages/form/Form.jsx";

const MovieDetails = ({ data }) => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="movie">
      <div className="movie__intro">
        <img className="movie__backdrop" src={data.show.image.original} alt="no background"/>
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img className="movie__poster" src={data.show.image.original} alt="no poster" />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">{data.show.name}</div>
          <div className="movie__tagline"> Language: {data.show.language} </div>
            <div className="movie__rating">
              {data.show.rating.average || Math.round(data.score * 10, 1)}{" "}
              ⭐
            </div>
          </div>
          <div className="movie__genres">
            {" "}
            Genre :{" "}
            {data.show.genres.map((i) => {
              return i + " ";
            })}{" "}
          </div>
          <div>Summary-</div>
          <div dangerouslySetInnerHTML={{ __html: data.show.summary }}></div>

          <p>Status:{data.show.status}</p>
          <p>Premiered:{data.show.premiered}</p>

          {}
          <div className="btn-conatiner">
            <NavLink to="/">
              <button className="movie__Button">Back</button>
            </NavLink>
            <button
              className="movie__Button"
              onClick={() => {
                setOpenForm(true);
              }}
            >
              Book Ticket🎫
            </button>
            {openForm ? (
              <Modal
                onClose={() => {
                  setOpenForm(false);
                }}
              >
                <Form movie={data} />
              </Modal>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
