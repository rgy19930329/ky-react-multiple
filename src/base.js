/**
 * @desc polyfill
 * @author rgy
 * @date 2019-8-5
 */

// add polyfill

/**
 * 判断是否以某个字符串开头
 */
String.prototype.startWidth = (str) => {
  const reg = new RegExp("^" + str);
  return reg.test(this);
}

/**
 * 判断是否以某个字符串结尾
 */
String.prototype.endWidth = (str) => {
  const reg = new RegExp(str + "$");
  return reg.test(this);
}

/**
 * 日期格式化
 * @call date.format("yyyy-MM-dd");
 *       date.format("yyyy-MM-dd hh:mm:ss");
 */
Date.prototype.format = (fmt) => {
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  