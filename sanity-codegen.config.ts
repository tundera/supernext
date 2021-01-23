import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './studio/schemas/schema.js',
  outputPath: './src/services/sanity/generated/groq.ts',
  prettierResolveConfigPath: './prettier.config.js',

  // NOTE: The CLI ships with a pre-configured babel config that shims out
  // the Sanity parts system. This babel config does not read from any
  // `.babelrc` or `babel.config.js`. You can only configure extra babel
  // options here.
  // babelOptions: customBabelOptions, // (optional)
}

export default config
