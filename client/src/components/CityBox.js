import React from "react";
import picture from "../images/vancouver.jpg";

export const CityBox = (props) => {
  return (
    <div className="col-md-4 col-sm-6 city-box">
      <a className="city-link">
        <div className="city-hover">
          <div className="city-hover-content">
            <i className="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-thumbnail" src={picture} alt="Vancouver"/>
        <div className="city-caption">
          <h4>Vancouver</h4>
          <p className="text-muted">Vancouver info</p>
        </div>
      </a>
    </div>
  );
}