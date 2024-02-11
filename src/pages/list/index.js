import React, { useState, useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { pageIndex } from "../../atoms";

import pageRenderer from "./pageRenderer";

import {
  SCRIPT_TO_RENDERER,
  STRUCTURE_TO_RENDERER,
  SCRIPT_REQUEST,
  STRUCTURE_REQUEST,
} from "../../channels";

import "../../style/layout.css";

function ListPage(props) {
  const [script, setScript] = useState(null);
  const [structure, setStructure] = useState(null);

  const { ipcRenderer } = window.require("electron");

  const requestScript = () => {
    ipcRenderer.send(SCRIPT_REQUEST, "");
  };
  const requestStructure = () => {
    ipcRenderer.send(STRUCTURE_REQUEST, "");
  };

  ipcRenderer.on(SCRIPT_TO_RENDERER, (event, payload) => {
    setScript(payload);
    console.log(payload);
  });

  ipcRenderer.on(STRUCTURE_TO_RENDERER, (event, payload) => {
    setStructure(payload);
    console.log(payload);
  });

  const pageHandler = useSetRecoilState(pageIndex); // 값만 변경 시키기

  const nextPage = () => {
    pageHandler((value) => value + 1);
  };
  const prevPage = () => {
    pageHandler((value) => value - 1);
  };
  const style = {
    stroke: "rgb(255,0,0)",
    strokeWidth: 2,
  };

  // const k = () => pageRenderer();
  // console.log(k);
  const [result, setResult] = useState(false);
  pageRenderer
    .then(function (data) {
      setResult(data); // response 값 출력
    })
    .catch(function (err) {
      console.error(err); // Error 출력
    });
  // console.log("1:", loading);
  // if () {
  //   const a = () => setLoading(true);
  //   console.log("2:", loading, a);
  // }

  // setk(pageRenderer());
  // console.log(k);
  return (
    <div className="container">
      <button onClick={prevPage}>뒤로 가기</button>
      listPage
      {result ? (
        <svg height="100px" width="100px">
          <line x1="0" y1="0" x2="100px" y2="100px" style={style} />
          <line x1="10" y1="50" x2="10" y2="100" style={style} />
          {result}
          {/* 세로 고정 가로 유동 */}
          {/* 생각해보니 stroke 굳이 필요없을듯! 빼자! */}
        </svg>
      ) : (
        <div>로딩중</div>
      )}
      {/* 1자식 2,3이면
      <ul>
        <li>1</li>
        <ul>
          <li>2</li>
          <li>3</li>
        </ul>
      </ul> */}
      <ul>
        <li>
          <button onClick={nextPage}>1-1</button>
          <button onClick={nextPage}>1-2</button>
          <button onClick={nextPage}>1-3</button>
          <button onClick={nextPage}>1-4</button>
        </li>
        <ul>
          <li>
            <button onClick={nextPage}>2-1</button>
            <button onClick={nextPage}>2-2</button>
            <button onClick={nextPage}>2-3</button>
            <button onClick={nextPage}>2-4</button>
          </li>
          <ul>
            <li>
              {" "}
              <button onClick={nextPage}>4-1</button>
              <button onClick={nextPage}>4-2</button>
            </li>
            <li>
              {" "}
              <button onClick={nextPage}>5</button>
            </li>
          </ul>
          <li>3</li>
          <ul>
            <li>4</li>
            <li>5</li>
          </ul>
        </ul>
      </ul>
      <button onClick={nextPage}>nextPage</button>
      <button onClick={requestScript}>requestScript</button>
      <button onClick={requestStructure}>requestStructure</button>
    </div>
  );
}
export default ListPage;
