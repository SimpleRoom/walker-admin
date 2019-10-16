const { createAction } = require('../actions')
const { componentName, componentType } = require('../prompts')
const { componentBasePath, templateBasePath } = require('../config')

const genComponent = () => ({
  description: 'add a new component',
  prompts: [componentName, componentType],
  actions: [
    createAction({
      type: 'add',
      path: `${componentBasePath}/{{componentName}}/{{componentName}}.jsx`,
      templateFile: `${templateBasePath}/component.{{componentType}}.jsx.hbs`,
    }),
    createAction({
      type: 'add',
      path: `${componentBasePath}/{{componentName}}/{{componentName}}.module.scss`,
      templateFile: `${templateBasePath}/component.module.scss.hbs`,
    }),
  ],
})

module.exports = genComponent
