# ClockKze - Electron Clock Widget

**ClockKze** is a simple, lightweight clock widget created using **Electron.js**. This widget sits on your desktop, showing a sleek clock with an edgy design. It was built as a personal project when I was bored and decided to create something useful for my desktop using Electron.js.

## Features

- **Lightweight**: Minimal memory usage, ideal for keeping the time on your desktop.
- **Customizable**: Built with the potential for adding more widgets or features in the future.
- **Sleek Design**: With a custom, edgy look.
- **Stay on Top**: The clock widget stays on top of other windows.
- **Live Clock**: The time updates every second to ensure accuracy.

## Demo

![Demo](https://github.com/defalt999/clockKze/blob/main/eye.png?raw=true)

## Installation (after cloning)


```bash
npm install --save-dev electron-packager
npx electron-packager . ClockKze --platform=win32 --arch=x64 --out=dist/ --overwrite
```

Once the packaging process is complete, navigate to the dist/ClockKze-win32-x64/ folder.

Double-click ClockKze.exe to run your app!
