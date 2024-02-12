import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "../../style/layout.css";

function ScriptPage(props) {
  return (
    <div className="container">
      <Link to="/list">뒤로가기</Link>
      1-1
      <div>
        <div>김영웅</div>
        <div>어쩌고 저쩌고 대사 어쩌고</div>
      </div>
      <button>1-2로 가기</button>
    </div>
  );
}
export default ScriptPage;
