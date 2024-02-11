import React, { useState, useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { pageIndex } from "../../atoms";

import "../../style/layout.css";

function MainPage(props) {
  const pageHandler = useSetRecoilState(pageIndex); // 값만 변경 시키기

  const nextPage = () => {
    pageHandler((value) => value + 1);
  };
  const prevPage = () => {
    pageHandler((value) => value - 1);
  };

  return (
    <div className="container">
      <button onClick={prevPage}>설정으로</button>
      게임 제목
      <button onClick={nextPage}>시작하기</button>
    </div>
  );
}
export default MainPage;
