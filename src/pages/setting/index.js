import React, { useState, useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { pageIndex } from "../../atoms";

import "../../style/layout.css";

function SettingPage(props) {
  const pageHandler = useSetRecoilState(pageIndex); // 값만 변경 시키기

  const nextPage = () => {
    pageHandler((value) => value + 1);
  };
  const prevPage = () => {
    pageHandler((value) => value - 1);
  };
  return (
    <div className="container">
      settingPage
      <button onClick={prevPage}>뒤로가기</button>
      <h1>스토리 제목</h1>
      <input type="text" />
      <h1>제목 페이지</h1>
      url/업로드 없음
      <button>제목 이미지 업로드</button>
      url/업로드 없음
      <button>대문 배경 업로드</button>
      <h1>인덱스 페이지</h1>
      url/업로드 없음
      <button>인덱스 배경 업로드</button>
      <h1>노드</h1>
      컬러 선택 url/업로드 없음
      <button>노드 이미지 업로드</button>
      <h1>캐릭터 이미지</h1>
      <div>
        <ul>
          <li>
            <b>영웅 화남</b>
            영웅화남.jpg
            <button>업로드</button>
          </li>
          <li>
            <b>영웅 화남</b>
            영웅화남.jpg
            <button>업로드</button>
          </li>
          <li>
            <b>영웅 화남</b>
            영웅화남.jpg
            <button>업로드</button>
          </li>
          <li>
            <b>영웅 화남</b>
            영웅화남.jpg
            <button>업로드</button>
          </li>
        </ul>
      </div>
      <h1>스크립트 별 배경</h1>
      <div>
        <ul>
          <li>
            <b>1-1</b>
            1-1.jpg
            <button>업로드</button>
          </li>
          <li>
            <b>1-2</b>
            1-2.jpg
            <button>업로드</button>
            <button>앞페이지와동일</button>
          </li>
          <li>
            <b>1-3</b>
            1-3배경.jpg
            <button>업로드</button>
            <button>앞페이지와동일</button>
          </li>
          <li>
            <b>1-4</b>
            url/업로드 없음
            <button>업로드</button>
            <button>앞페이지와동일</button>
          </li>
        </ul>
      </div>
      <button onClick={nextPage}>확인하고 시작</button>
    </div>
  );
}
export default SettingPage;
