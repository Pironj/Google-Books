import React from "react";

// exporting our save button that will be for each book that gets rendered on our search page

export function SaveBtn(props) {
  return (
    <button {...props} className="btn btn-success" >
      {props.children}
    </button>
  )
}