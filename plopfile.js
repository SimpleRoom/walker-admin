// 自动生成component组件到对应目录
const genComponent = require('./plop/generators/component')
// 自动生成redux到对应目录
const genModule = require('./plop/generators/module')
// 可继续扩展
module.exports = function (plop) {
  // redux module generator
  plop.setGenerator('module', genModule())
  // component generator
  plop.setGenerator('component', genComponent())
}
