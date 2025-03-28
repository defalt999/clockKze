ClockKze - Electron Clock Widget


ClockKze is a simple, lightweight clock widget created using Electron.js. This widget sits on your desktop, showing a sleek clock with an edgy design. It was built as a personal project when I was bored and decided to create something useful for my desktop using Electron.js.

Lightweight: Minimal memory usage, ideal for keeping the time on your desktop.

Customizable: Built with the potential for adding more widgets or features in the future.

Sleek Design: With a custom, edgy look.

Stay on Top: The clock widget stays on top of other windows.

Live Clock: The time updates every second to ensure accuracy.

How to install?

Install Electron Packager locally:

npm install --save-dev electron-packager

Package the app into an .exe file using the locally installed Electron Packager:

npx electron-packager . ClockKze --platform=win32 --arch=x64 --out=dist/ --overwrite

Run the .exe file:

Navigate to the dist/ClockKze-win32-x64/ folder.

Double-click ClockKze.exe to run your app.
