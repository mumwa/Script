import React, { useState, useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { pageIndex } from "../../atoms";

import {
  SCRIPT_TO_RENDERER,
  STRUCTURE_TO_RENDERER,
  SCRIPT_REQUEST,
  STRUCTURE_REQUEST,
} from "../../channels";

function ScriptPage(props) {
  const { ipcRenderer } = window.require("electron");

  const requestScript = () => {
    ipcRenderer.send(SCRIPT_REQUEST, "");
  };
  const requestStructure = () => {
    ipcRenderer.send(STRUCTURE_REQUEST, "");
  };

  ipcRenderer.on(SCRIPT_TO_RENDERER, (event, payload) => {
    console.log(payload);
  });

  ipcRenderer.on(STRUCTURE_TO_RENDERER, (event, payload) => {
    console.log(payload);
  });

  const pageHandler = useSetRecoilState(pageIndex); // 값만 변경 시키기

  const nextPage = () => {
    pageHandler((value) => value + 1);
  };
  const prevPage = () => {
    pageHandler((value) => value - 1);
  };
  return (
    <div>
      ScriptPage
      <button onClick={prevPage}>prevPage</button>
      <button onClick={requestScript}>requestScript</button>
      <button onClick={requestStructure}>requestStructure</button>
    </div>
  );
}
export default ScriptPage;
