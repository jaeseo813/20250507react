//Box.js
import React from "react";
import "./App.css";

function Box(props) {
  //
  return (
    <div>
      <div className="box">Box1 {props.name}</div>
    </div>
  );
}

export default Box; // 같은 글씨로 적혀야 함
