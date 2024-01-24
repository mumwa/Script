import logo from "./logo.svg";
import "./App.css";
import { SEND_MAIN_PING } from "./channels";

function App() {
  const { ipcRenderer } = window.require("electron");
  const sendMain = () => {
    ipcRenderer.send(SEND_MAIN_PING, "send");
  };
  return (
    <div className="App">
      <button onClick={sendMain}>Send Ping</button>
    </div>
  );
}

export default App;
