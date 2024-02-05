const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { SEND_MAIN_PING, SEND_RENDERER_PING } = require("./channels");
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
  win.webContents.on("did-finish-load", () => {
    win.webContents.send(SEND_RENDERER_PING, "메인에서 랜더러로");
  });
  win.loadURL("http://localhost:3000");
}
ipcMain.on(SEND_MAIN_PING, (event, arg) => {
  console.log("랜더러에서 메세지 수신");
  console.log("메세지:", arg);
  event.reply(SEND_RENDERER_PING, "메인에서 랜더러에게 답장");
  //채널 따로 파야함
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

let structure = {
  1: {
    2: {
      3: {
        4: { 6: null, 7: null },
        5: { 6: null, 7: null },
      },
    },
    바밤바: {
      누가바: {
        도로롱: null,
        도롱: { 브븜: null, "빠~라밤": null },
      },
    },
  },
};

let script = {
  1: {
    lists: {
      "-1": { a: "블라블라블라", a: "블라블라블라", b: "블라블라블라" },
      "-2": { a: "블라블라블라", a: "블라블라블라", b: "블라블라블라" },
    },
  },
  2: {
    lists: {
      "-1": { a: "블라블라블라", a: "블라블라블라", b: "블라블라블라" },
      "-2": { a: "블라블라블라", a: "블라블라블라", b: "블라블라블라" },
    },
  },
};

try {
  if (fs.existsSync(`${directoryPath}/src/structure.json`)) {
    console.log("structure.json 파일이 이미 있음");
  } else {
    fs.writeFileSync(
      `${directoryPath}/src/structure.json`,
      JSON.stringify(structure)
    );
    console.log("structure.json 파일 작성");
  }
} catch (err) {
  console.error(err);
}
try {
  if (fs.existsSync(`${directoryPath}/src/script.json`)) {
    console.log("script.json 파일이 이미 있음");
  } else {
    fs.writeFileSync(
      `${directoryPath}/src/script.json`,
      JSON.stringify(script)
    );
    console.log("script.json 파일 작성");
  }
} catch (err) {
  console.error(err);
}

//json 파일 읽어오기
try {
  const scriptJsonFile = fs.readFileSync(
    `${directoryPath}/src/script.json`,
    "utf8"
  );
  const structureJsonFile = fs.readFileSync(
    `${directoryPath}/src/structure.json`,
    "utf8"
  );
  const structureData = JSON.parse(structureJsonFile);
  //console.log(structureData);

  const scriptData = JSON.parse(scriptJsonFile);
  //console.log(scriptData);
  console.log(structureData[1][2][3][4]);
  console.log(structureData[1][2][3][4][6]);
  console.log(scriptData[1]["lists"]);
  console.log(scriptData[1]["lists"]["-1"]["a"]);
} catch (err) {
  console.error(err);
}

app.whenReady().then(() => {
  createWindow();
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
