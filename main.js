
const { Menu,BrowserWindow, app, ipcMain, Notification, globalShortcut } = require('electron');
const path = require('path');

const {menuTemplet}=require("./components/menu")
const {db}=require('./components/db/db')




const items=require('./components/db/items')
const daily=require('./components/db/daily')

const isDev = !app.isPackaged;

 exports.createWindow=() =>{
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
  const mainMenu=Menu.buildFromTemplate(menuTemplet)
  Menu.setApplicationMenu(mainMenu)
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}



app.whenReady().then(()=>{
  module.exports.createWindow()
  // globalShortcut.register('Ctrl+n',(module.exports.createWindow))

} )

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    module.exports.createWindow()
  }
})


// module.exports={
//   createWindow
// }
//Api router


ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notifiation', body: message}).show();
})

ipcMain.on('itemsGetAll', async (event, arg) => {
  new Notification({title: 'Notifiation', body: arg}).show();
  event.returnValue = await items.getAllItems();
});


ipcMain.on('itemsInsert', async (event, arg) => {
  new Notification({title: 'Notifiation', body: arg}).show();
  event.returnValue = await items.insert(arg);
});


ipcMain.on('itemsSearch', async (event, arg) => {
  new Notification({title: 'Notifiation', body: arg}).show();
  event.returnValue = await items.searchBypName(arg);
});

ipcMain.on('itemsDelete', async (event, arg) => {
  new Notification({title: 'Notifiation', body: arg}).show();
  event.returnValue = await items.deleteById(arg);
});


ipcMain.on('dailyGetAll', async (event) => {
  new Notification({title: 'Notifiation', body: arg}).show();
  event.returnValue = await daily.getByDay();
});


ipcMain.on('dailyInsert', async (event, arg) => {
  new Notification({title: 'Notifiation', body: arg}).show();
  event.returnValue = await daily.insert(arg);
});



ipcMain.on('dailyDelete', async (event, arg) => {
  new Notification({title: 'Notifiation', body: arg}).show();
  event.returnValue = await daily.deleteById(arg);
});