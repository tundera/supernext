const prettier = require('prettier')

module.exports = (plop) => {
  const prettierConfig = prettier.resolveConfig.sync(process.cwd())
  plop.load('plop-prettier', prettierConfig)

  plop.addHelper('addPropsSuffix', (text) => `${text}Props`)

  plop.setGenerator('React Component', {
    description: 'Create component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for your component:',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Enter an output path in the `components` directory:',
      },
    ],
    actions: [
      {
        type: 'pretty-add',
        path: '../src/components/{{path}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/index.tsx.hbs',
      },
      {
        type: 'pretty-add',
        path: '../src/components/{{path}}/{{pascalCase name}}/{{name}}.stories.tsx',
        templateFile: 'templates/components/stories.tsx.hbs',
      },
      {
        type: 'pretty-add',
        path: '../src/components/{{path}}/{{pascalCase name}}/{{name}}.test.tsx',
        templateFile: 'templates/components/test.tsx.hbs',
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Create page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name please',
      },
    ],
    actions: [
      {
        type: 'pretty-add',
        path: '../src/pages/{{name}}.tsx',
        templateFile: 'templates/pages/index.tsx.hbs',
      },
      {
        type: 'pretty-add',
        path: '../src/styles/{{name}}.styles.ts',
        templateFile: 'templates/pages/styles.ts.hbs',
      },
    ],
  })
}
