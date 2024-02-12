import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "../../style/layout.css";

function StartPage(props) {
  const style = {
    width: "100px",
    height: "100px",
  };
  return (
    <div className="container">
      story viewer
      <button>사용법</button>
      <div>
        <button id="addJson">+</button>
        <label for="addJson">JSON 파일 추가</label>
        <ul>
          <li>
            <div>우와</div>
          </li>
          <li>
            <div>li 안에 div 태그 넣어도 되나요</div>
          </li>
          <li>
            <div>li 안에 div 태그 넣어도 되나요</div>
          </li>
          <li>
            <div>li 안에 div 태그 넣어도 되나요</div>
          </li>
          <li>
            <div>li 안에 div 태그 넣어도 되나요</div>
          </li>
        </ul>
      </div>
      <Link to="/setting">nextPage</Link>
    </div>
  );
}
export default StartPage;
