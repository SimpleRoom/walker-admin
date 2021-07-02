
// 浏览器记录版本和构建时间
const { NODE_ENV } = process.env
// console.log('%cEnvironment %cproduction', 'padding: 1px 2px; border-radius: 3px 0 0 3px; color: #fff;background:#606060;', 'padding: 1px 2px;background:#2072b5;')
const customConsole = (key, value, bgColor) => {
  console.log(`%c${key} %c${value}`, 'padding: 1px 2px; border-radius: 3px 0 0 3px; color: #fff;background:#606060;', `padding: 1px 2px;background:${bgColor || ''};`)
}
const formatDate = (times) => {
  const now = times ? new Date(times) : new Date()
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  var date = now.getDate()
  var hour = now.getHours()
  var minute = now.getMinutes()
  var second = now.getSeconds()
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
}

// eslint-disable-next-line no-undef
const buildTime = formatDate(timeStamp)
customConsole('Environment', NODE_ENV, '#1a9240')
customConsole('Build Date', buildTime, '#2072b5')
customConsole('Contact Us', 'https://github.com/jiucheng-front', 'transparent')
