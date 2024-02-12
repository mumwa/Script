import React, { useState, useEffect } from "react";

import pageRenderer from "./pageRenderer";

import { Link } from "react-router-dom";

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
      <Link to="/main">뒤로 가기</Link>
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
          <Link to="/script">1-1</Link>
          <Link to="/script">1-2</Link>
          <Link to="/script">1-3</Link>
          <Link to="/script">1-4</Link>
        </li>
        <ul>
          <li>
            <Link to="/script">2-1</Link>
            <Link to="/script">2-2</Link>
            <Link to="/script">2-3</Link>
            <Link to="/script">2-4</Link>
          </li>
          <ul>
            <li>
              <Link to="/script">4-1</Link>
              <Link to="/script">4-2</Link>
            </li>
            <li>
              <Link to="/script">5</Link>
            </li>
          </ul>
          <li>3</li>
          <ul>
            <li>4</li>
            <li>5</li>
          </ul>
        </ul>
      </ul>
      <button onClick={requestScript}>requestScript</button>
      <button onClick={requestStructure}>requestStructure</button>
    </div>
  );
}
export default ListPage;
