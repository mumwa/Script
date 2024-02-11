import React, { useState, useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { pageIndex } from "../../atoms";

import "../../style/layout.css";

function StartPage(props) {
  const pageHandler = useSetRecoilState(pageIndex); // 값만 변경 시키기

  const nextPage = () => {
    pageHandler((value) => value + 1);
  };
  const prevPage = () => {
    pageHandler((value) => value - 1);
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
      <button onClick={nextPage}>nextPage</button>
    </div>
  );
}
export default StartPage;
