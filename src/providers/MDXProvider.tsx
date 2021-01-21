import { preToCodeBlock } from 'mdx-utils'
import CodeBlock from '@components/CodeBlock'
import { MDXProvider } from '@mdx-js/react'

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <CodeBlock {...props} />
    }
    return <pre {...preProps} />
  },
}
export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>
