import logo from "./logo.svg";
import "./App.css";
import { SEND_MAIN_PING, SEND_RENDERER_PING } from "./channels";

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
      <button onClick={sendMain}>Send Ping</button>
    </div>
  );
}

export default App;
