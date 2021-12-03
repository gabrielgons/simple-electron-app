const { app, BrowserWindow, Notification  } = require('electron')
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: `UpDocs Versão: ${app.getVersion()}`
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  autoUpdater.checkForUpdatesAndNotify()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

autoUpdater.on('update-available', () => {
  notificar('Atualização disponível', 'Aguarde o download...');
  log.info('Atualização disponível');
});

autoUpdater.on('error', (error) => {  
  notificar('Erro detectado', `${error}`);
  log.error(error);
});

autoUpdater.on('update-downloaded', () => {
  log.info('Atualização baixada');

  setTimeout(() => {
    autoUpdater.quitAndInstall();
  }, 6000);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});

function notificar(title, body) {
  new Notification({ title, body }).show()
}
