import React from "react";
import Jumbotron from "../components/Jumbotron/Header";




function Saved() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">React Google Books Search</h1>
        <p className="lead">Here is a list of your saved books.</p>
      </Jumbotron>
    </div>
  );
}

export default Saved;