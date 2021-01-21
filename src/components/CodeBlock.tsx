import type { FC } from 'react'

import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

type Props = {
  codeString: string
  language: Language
}
const CodeBlock: FC<Props> = ({ codeString, language, ...props }) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }
  return (
    <Highlight {...defaultProps} code={codeString} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
