import { SEND_MAIN_PING, SEND_RENDERER_PING } from "./channels";

import ListPage from "./pages/list";
import MainPage from "./pages/main";
import ScriptPage from "./pages/script";
import SettingPage from "./pages/setting";
import StartPage from "./pages/start";

function App() {
  const { ipcRenderer } = window.require("electron");
  const sendMain = () => {
    ipcRenderer.send(SEND_MAIN_PING, "send");
  };

  ipcRenderer.on(SEND_RENDERER_PING, (event, payload) => {
    console.log(payload);
  });

  return (
    <div className="App">
      <StartPage />
      <SettingPage />
      <MainPage />
      <ListPage />
      <ScriptPage />
      <button onClick={sendMain}>Send Ping</button>
    </div>
  );
}

export default App;
