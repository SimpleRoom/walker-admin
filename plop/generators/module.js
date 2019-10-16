const { createAction } = require('../actions')
const { moduleName } = require('../prompts')
const { moduleBasePath, templateBasePath } = require('../config')

const genModule = () => ({
  description: 'add a new store module',
  prompts: [moduleName],
  actions: [
    createAction({
      type: 'add',
      path: `${moduleBasePath}/{{moduleName}}/reducer.js`,
      templateFile: `${templateBasePath}/module.reducer.js.hbs`,
    }),
    createAction({
      type: 'add',
      path: `${moduleBasePath}/{{moduleName}}/action.js`,
      templateFile: `${templateBasePath}/module.action.js.hbs`,
    }),
    createAction({
      type: 'add',
      path: `${moduleBasePath}/{{moduleName}}/saga.js`,
      templateFile: `${templateBasePath}/module.saga.js.hbs`,
    }),
    createAction({
      type: 'add',
      path: `${moduleBasePath}/{{moduleName}}/selector.js`,
      templateFile: `${templateBasePath}/module.selector.js.hbs`,
    }),
  ],
})

module.exports = genModule
