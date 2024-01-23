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

let array = [
  {
    speed_scaler: "10000",
    very_slow_walk_speed: "4470",
    slow_walk_speed: "8940",
    walk_speed: "13410",
    fast_walk_speed: "17880",
  },
  {
    speed_scaler: "5000",
    very_slow_walk_speed: "1234",
    slow_walk_speed: "6666",
    walk_speed: "7777",
    fast_walk_speed: "23000",
  },
];

try {
  if (fs.existsSync(`${directoryPath}/src/test.json`)) {
    console.log("json 파일이 이미 있음");
  } else {
    fs.writeFileSync(`${directoryPath}/src/test.json`, JSON.stringify(array));
    console.log("json 파일 작성");
  }
} catch (err) {
  console.error(err);
}

//json 파일 읽어오기
try {
  const jsonFile = fs.readFileSync(`${directoryPath}/src/test.json`, "utf8");
  const jsonData = JSON.parse(jsonFile);
  console.log(jsonData);
} catch (err) {
  console.error(err);
}

app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
