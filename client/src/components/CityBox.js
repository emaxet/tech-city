import React from "react";
import { Link } from 'react-router-dom';

export const CityBox = (props) => {
  return (
    <div className="city-box">
      <Link to={`/city/${props.name.replace(' ', '_')}`} className="city-link">
        <img src={props.image} alt="City Picture"/>
        <div className="city-text">
          <h4>{props.name}</h4>
          <p>{props.tagline}</p>
          <div className="city-info">
            <span><i class="fa fa-users" aria-hidden="true"></i> 30</span>
            <span><i class="fa fa-calendar" aria-hidden="true"></i> 14</span>
            <span><i class="fa fa-briefcase" aria-hidden="true"></i> 9</span>
          </div>
        </div>
      </Link>
    </div>
  );
}


        // <div className="city-hover">
        //   <div className="city-hover-content">
        //     <i className="fa fa-plus fa-3x"></i>
        //   </div>
        // </div>
        // <img className="img-thumbnail" src={props.image} alt="Vancouver"/>
        // <div className="city-caption">
        //   <h4>{props.name.replace('_', ' ')}</h4>
        //   <p className="text-muted">{props.tagline}</p>
        // </div>

        // style={{backgroundImage: `url(${props.image})`}}