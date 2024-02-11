import React, { useState, useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { pageIndex } from "../../atoms";

import "../../style/layout.css";

function ScriptPage(props) {
  const pageHandler = useSetRecoilState(pageIndex); // 값만 변경 시키기

  const nextPage = () => {
    pageHandler((value) => value + 1);
  };
  const prevPage = () => {
    pageHandler((value) => value - 1);
  };
  return (
    <div className="container">
      <button onClick={prevPage}>뒤로가기</button>
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
