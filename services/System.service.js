class SystemInfoService {
  static getInstance() {
    if (!SystemInfoService.instance) {
      SystemInfoService.instance = new SystemInfoService();
    }
    return SystemInfoService.instance;
  }
  getSystemInfoPromise() {
    return new Promise((resolve, reject) => {
      if (this.screenHeight && this.screenHeight > 0) {
        const obj = null;
        for (const key in this) {
          if (this.hasOwnProperty(key)) {
            const element = this[key];
            obj[key] = element;
          }
        }
        let error = null;
        if (obj.screenHeight && obj.screenHeight > 0) {
          resolve(obj);
        } else {
          error = new Error('获取设备信息失败');
          reject(error);
        }
      } else {
        const that = this;
        wx.getSystemInfo({
          complete(res) {
            const errMsg = res.errMsg;
            if (errMsg && errMsg === 'getSystemInfo:ok') {
              resolve(res);
              Object.assign(that, res); // 保存系统信息
            } else {
              reject(new Error(errMsg));
            }
          }
        });
      }
    });



  }
}
const systemService = SystemInfoService.getInstance();
// const systemService = new SystemInfoService();
export default systemService;