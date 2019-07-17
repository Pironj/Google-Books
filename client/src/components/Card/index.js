import React from "react";
import {Row} from "../Grid";
// import {SaveBtn} from "../Button/SaveBtn";

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
              <a href={props.link} className="btn btn-primary">View</a>
              <a onClick={props.handleSaved} href="/api/books" className="btn btn-success">Save</a>
            </Row>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-muted">by: {props.author}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;