/**
 * Electron main process
 */
const {app, BrowserWindow} = require("electron");
const config = require("../config");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL(config.WINDOW_MAIN);
}

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if(process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if(mainWindow === null) {
    createWindow();
  }
});