import React from "react";
import {Row} from "../Grid";

function Card(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-2">
          <img src={props.image} className="card-img" alt={props.title} style={{ "height": "300px", "width": "186px" }} />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <Row>
              <a href="#" className="btn btn-primary">Save</a>
              <a href={props.link} className="btn btn-primary">View</a>
            </Row>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-muted">{props.author}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;