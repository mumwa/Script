import { SEND_MAIN_PING, SEND_RENDERER_PING } from "./channels";

import ListPage from "./pages/list";
import MainPage from "./pages/main";
import ScriptPage from "./pages/script";
import SettingPage from "./pages/setting";
import StartPage from "./pages/start";

import { Routes, Route, HashRouter, Redirect } from "react-router-dom";

function App() {
  const { ipcRenderer } = window.require("electron");
  const sendMain = () => {
    ipcRenderer.send(SEND_MAIN_PING, "send");
  };

  ipcRenderer.on(SEND_RENDERER_PING, (event, payload) => {
    console.log(payload);
  });
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<StartPage />} />
          <Route path={"/setting"} element={<SettingPage />} />
          <Route path={"/main"} element={<MainPage />} />
          <Route path={"/list"} element={<ListPage />} />
          <Route path={"/script"} element={<ScriptPage />} />
          <Route path="/*" element={<div>잘못된 경로</div>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
