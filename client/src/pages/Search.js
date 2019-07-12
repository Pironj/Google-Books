import React from "react";
import Jumbotron from "../components/Jumbotron/Header";




function Search() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">React Google Books Search</h1>
        <p className="lead">Search for and Save Books of Interest</p>
      </Jumbotron>
    </div>
  );
}

export default Search;