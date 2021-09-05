// add record
const {
  NODE_ENV
} = process.env
const customConsole = (config) => {
  console.log(
    `%c${config.title} %c${config.value}`,
    'padding: 1px 0 1px 4px; border-radius: 3px 0 0 3px; color: #fff;background:#606060;',
    `border-radius: 0 3px 3px 0;padding: 1px 4px;background:${config.bgColor || ''};`
  )
}

const formatDate = (times) => {
  const now = times ? new Date(times) : new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
// eslint-disable-next-line no-undef
const buildTime = formatDate(timeStamp)
customConsole({
  title: 'Environment',
  value: NODE_ENV,
  bgColor: '#67c23a'
})
customConsole({
  title: 'Build  Date',
  value: buildTime,
  bgColor: '#61dafb'
})
customConsole({
  title: 'Contact  Us',
  value: 'https://github.com/jiucheng-front',
  bgColor: 'transparent'
})