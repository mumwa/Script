const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { SEND_MAIN_PING } = require("./constants");
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.webContents.openDevTools();
  win.loadURL("http://localhost:3000");
}
ipcMain.on(SEND_MAIN_PING, (event, arg) => {
  console.log("Main.js received a ping!!!");
});

//디렉토리를 만듬
let directoryPath = app.getPath("userData");
console.log("directoryPath:", directoryPath);

try {
  !fs.existsSync(`${directoryPath}/src`) &&
    fs.mkdirSync(`${directoryPath}/src`);
  console.log("making direcotry success!");
} catch (err) {
  console.error(err);
}

app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
