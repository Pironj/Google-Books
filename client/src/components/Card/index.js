import React from "react";

function Card(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.image} className="card-img" alt={props.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <row>
              <a href="#" class="btn btn-primary">Save</a>
              <a href="#" class="btn btn-primary">View</a>
            </row>
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