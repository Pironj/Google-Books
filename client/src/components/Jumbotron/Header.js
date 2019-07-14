import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid" style={{height: 350, textAlign: "center"}}>
      {children}
    </div>
  );
}

export default Jumbotron;