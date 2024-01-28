import { SEND_MAIN_PING, SEND_RENDERER_PING } from "./channels";

import ListPage from "./pages/list";
import MainPage from "./pages/main";
import ScriptPage from "./pages/script";
import SettingPage from "./pages/setting";
import StartPage from "./pages/start";

import { useRecoilValue } from "recoil";

import { pageIndex } from "./atoms";

function App() {
  const { ipcRenderer } = window.require("electron");
  const sendMain = () => {
    ipcRenderer.send(SEND_MAIN_PING, "send");
  };

  ipcRenderer.on(SEND_RENDERER_PING, (event, payload) => {
    console.log(payload);
  });

  const page = useRecoilValue(pageIndex);
  return (
    <div>
      {page === 0 && <StartPage />}
      {page === 1 && <SettingPage />}
      {page === 2 && <MainPage />}
      {page === 3 && <ListPage />}
      {page === 4 && <ScriptPage />}
      <button onClick={sendMain}>Send Ping</button>
    </div>
  );
}

export default App;
