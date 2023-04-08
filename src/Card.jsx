import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Card = (props) => {
  const nevigate = useNavigate();
  return (
    <>
      <div
        className="box-card"
        onClick={() => {
          nevigate("/mobile/" + props.id);
        }}>
        <div className="Image-section">
          <img className="card_img" src={props.imgsrc} alt="Mobile" />
        </div>
        <div className="item-info">
          <h3 className="mobile-name">{props.name}</h3>
          <h3 className="prize">${props.price}</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
