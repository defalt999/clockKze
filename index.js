const { app, BrowserWindow } = require("electron");
const path = require("path");


app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 200,
    alwaysOnTop: true,
    icon: path.join(__dirname, '54272.png'),
    frame:false,
    y:760,
    x:1240,
    title: '', // Set title to an empty string
    icon: null, 
    webPreferences: { preload: path.join(__dirname, "preload.js") },
  });

  mainWindow.loadFile("index.html");
  mainWindow.setMenu(null);
  mainWindow.setResizable(false);
  mainWindow.setTitle("");
  
});