const getBrowserInfo = () => {
  var agent = navigator.userAgent.toLowerCase()
  var regStr_ie = /msie [\d.]+;/gi
  var regStr_ff = /firefox\/[\d.]+/gi
  var regStr_chrome = /chrome\/[\d.]+/gi
  var regStr_saf = /safari\/[\d.]+/gi

  //IE
  if (agent.indexOf("msie") > 0) {
    return agent.match(regStr_ie).toString();
  }

  //firefox
  if (agent.indexOf("firefox") > 0) {
    return agent.match(regStr_ff).toString();
  }

  //Chrome
  if (agent.indexOf("chrome") > 0) {
    return agent.match(regStr_chrome).toString()
  }

  //Safari
  if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
    return agent.match(regStr_saf).toString()
  }
}

export { getBrowserInfo }