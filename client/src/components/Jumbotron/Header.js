import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid" style={{height: 300, textAlign: "center"}}>
      {/* <div className="container">
        <h1 className="display-4">React Google Books Search</h1>
        <p className="lead">Search for and Save Books of Interest</p>
      </div> */}
      {children}
    </div>
  );
}

export default Jumbotron;