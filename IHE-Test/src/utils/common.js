function urlTool(url, urlName) {
  let urls = url + urlName;
  if (process.env.NODE_ENV === 'development') {
    urls = urlName;
  }
  return urls;
}
// function formatDuring(mss) {
// //  var mouth=parseInt(mss % (1000 * 60 * 60 * 24)/());
//   var days = parseInt(mss / (1000 * 60 * 60 * 24));
//   var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = (mss % (1000 * 60)) / 1000;
//   return days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
// }
function formatDuring(str) {
  var oDate = new Date(str),
    oYear = oDate.getFullYear(),
    oMonth = oDate.getMonth() + 1,
    oDay = oDate.getDate(),
    oHour = oDate.getHours(),
    oMin = oDate.getMinutes(),
    oSen = oDate.getSeconds(),
    oTime = oYear + getzf(oMonth) + getzf(oDay) + getzf(oHour) + getzf(oMin) + getzf(oSen); //最后拼接时间  
  return oTime;
};

function getzf(num) {
  if (parseInt(num) < 10) {
    num = '0' + num;
  }
  return num;
}
const baseInfo = {
  patientId: '',
  repository_Url: '',
  sourceId: ''
}
const showLog = {
  config: {
    data: '',
    headers: '',
    method: '',
  },
  data: {
    date: ''
  },
  headers: '',
  request: {
    responseURL: ''
  },
  status: '',
  statusText: '',
}

export {
  urlTool as urlTool,
  baseInfo as baseInfo,
  showLog as showLog,
  formatDuring as formatDuring
}
