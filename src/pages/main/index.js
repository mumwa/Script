import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "../../style/layout.css";

function MainPage(props) {
  return (
    <div className="container">
      <Link to="/setting">설정으로</Link>
      게임 제목
      <Link to="/list">시작하기</Link>
    </div>
  );
}
export default MainPage;
