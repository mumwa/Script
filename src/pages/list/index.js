import React, { useState, useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { pageIndex } from "../../atoms";

import pageRenderer from "./pageRenderer";

function ListPage(props) {
  // function pageRenderer() {
  //   return new Promise(function (resolve, reject) {
  //     const a = 1 + 1;
  //     resolve(a);
  //     reject(new Error("Request is failed"));
  //   });
  // }
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
    <div>
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
      <button onClick={nextPage}>nextPage</button>
      <button onClick={prevPage}>prevPage</button>
    </div>
  );
}
export default ListPage;
