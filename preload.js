
const { ipcRenderer, contextBridge } = require('electron');
// const item=require('./src/js/components/db/items')

const dotenv=require('dotenv')
dotenv.config()


contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    }
  },
  items: {

    async getAll(arg) {
      const res = await ipcRenderer.sendSync('itemsGetAll',arg);
      return res;
    },

    async insert(arg) {
      const res = await ipcRenderer.sendSync('itemsInsert',arg);
      return res;
    },

    async search(arg) {
      const res = await ipcRenderer.sendSync('itemsSearch',arg);
      return res;
    },

    async update(arg) {
      const res = await ipcRenderer.sendSync('itemsUpdate',arg);
      return res;
    }

    ,

    async delete(arg) {
      const res = await ipcRenderer.sendSync('itemsDelete',arg);
      return res;
    }

  },
  daily: {
    async getAll() {
      const res = await ipcRenderer.sendSync('dailyGetAll');
      return res;
    },

    async insert(arg) {
      const res = await ipcRenderer.sendSync('dailyInsert',arg);
      return res;
    },
    async delete(arg) {
      const res = await ipcRenderer.sendSync('dailyDelete',arg);
      return res;
    }

  },

  env:{
    getenv (){
      return process.env
    }

  }
})
