const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  sendWarning: (message) => ipcRenderer.send("log-warning", message),
});