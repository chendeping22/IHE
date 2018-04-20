//将毫秒设置为类似20170314123060的日期格式
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
//补零操作
function getzf(num) {
  if (parseInt(num) < 10) {
    num = '0' + num;
  }
  return num;
}

//将正斜杠替换成反斜杠
function pathReset(str){
   var str1=str.replace(/\\/g,'/');
   return str1
}

//配置参数
const baseInfo = {
  patientId: '',
  repository_Url: '',
  register_Url:'',
  sourceId: ''
}
//日志展示
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
  baseInfo as baseInfo,
  showLog as showLog,
  formatDuring as formatDuring,
  pathReset as pathReset
}
