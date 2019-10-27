<h2 align="center">React+Material-ui构建的后台管理系统</h2>

<div align="center">

[![react](https://img.shields.io/badge/react-v16.10.2-%2361dafb)](https://reactjs.org/)
[![redux](https://img.shields.io/badge/redux-v4.0.4-%23764abc)](https://redux.js.org/)
[![react-router-dom](https://img.shields.io/badge/react--router--dom-v5.1.2-brightgreen)](https://reacttraining.com/react-router/)
[![redux-actioins](https://img.shields.io/badge/redux--actions-v2.6.5-green)](https://redux-actions.js.org/)
[![redux-saga](https://img.shields.io/badge/redux--saga-v1.1.1-blue)](https://redux-saga.js.org/)
[![reselect](https://img.shields.io/badge/reselect-v4.0.0-green)](https://github.com/reduxjs/reselect)
[![material-ui](https://img.shields.io/badge/%40material--ui-v4.5.1-%23764abc)](https://github.com/mui-org/material-ui)
[![material-table](https://img.shields.io/badge/material--table-v1.53.0-%233f51b5)](https://material-table.com/)
[![styled-components](https://img.shields.io/badge/styled--components-v4.4.0-orange)](https://www.styled-components.com)
[![plop](https://img.shields.io/badge/plop-v2.5.0-%233ab88b)](https://plopjs.com/)

</div> 

#### 1、如何开发查看

``` bash
# 克隆该仓库
git clone git@github.com:SimpleRoom/walker-admin.git

# 进入walker-admin文件夹
cd walker-admin

# 安装依赖
npm install
# 或者
yarn add

# 启动项目：http://localhost:3800
npm run start
# 或者
yarn start

# 打包构建
npm run build
# 或者
yarn build

# 快速创建components和store
# 全局安装plop后
plop
# 未全局安装
npm run plop
```

#### 2、功能模块


```shell
plop── 快速创建components和store的模板

     ┌── assets      资源文件
     ├── components  页面组件
     ├── router      路由配置
     ├── store       state模块管理中心
src──├── styles      页面样式
     ├
     ├── utils       插件和工具
     ├
     ├── views 		 页面
     └── index.js  	 页面配置入口
     
```

#### 3、日志记录
+ [CHANGELOG](https://github.com/SimpleRoom/walker-admin/blob/master/CHANGELOG.md)

#### 4、工具说明

+ 1、 <code>create-react-app</code>
+ 2、 <code>npm install</code>
+ 3、 <code>npm run start</code>
+ 4、 <code>npm run build</code>
+ 5、 <code>redux</code>state管理容器
+ 6、 <code>react-redux</code>React官方控制React组件与Redux的连接容器
+ 7、 <code>redux-actions</code>简化Redux写法工具
+ 8、 <code>redux-saga</code>Redux处理异步数据的中间件
+ 9、 <code>reselect</code>Redux的选择器工具，精确获取指定state，减轻渲染压力
+ 10、<code>styled-components</code>可以使用es6来编写css的工具
+ 11、plop：<code>npm run plop</code>自动生成组件/store到指定目录(plopfile/plop),根据提示上下选择

  + 1.component(class/function)：输入componentName即自动创建该组件到components目录下
  + 2.module：输入moduleName自动创建对应的store module到store目录下

### License

[MIT](http://opensource.org/licenses/MIT)
