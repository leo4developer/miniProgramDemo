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
        const obj = this;
        resolve(obj);
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
// const systemService = SystemInfoService.getInstance();
export default SystemInfoService;