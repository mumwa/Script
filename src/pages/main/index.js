import React, { useState, useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { pageIndex } from "../../atoms";

function MainPage(props) {
  const pageHandler = useSetRecoilState(pageIndex); // 값만 변경 시키기

  const nextPage = () => {
    pageHandler((value) => value + 1);
  };
  const prevPage = () => {
    pageHandler((value) => value - 1);
  };

  return (
    <div>
      mainPage <button onClick={nextPage}>nextPage</button>
      <button onClick={prevPage}>prevPage</button>
    </div>
  );
}
export default MainPage;
