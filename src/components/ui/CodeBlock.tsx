import type { FC } from 'react'

import { useState } from 'react'
import Confetti from 'react-dom-confetti'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import synthwave84 from 'prism-react-renderer/themes/synthwave84'

import CopyButton from '@components/ui/buttons/CopyButton'
import { copyToClipboard } from 'utils/copyToClipboard'
import confetti from 'styles/animations/confetti'

type Props = {
  codeString: string
  language: Language
}

const Wrapper = (props) => <div style={{ position: 'relative' }} {...props} />

const ConfettiWrapper = (props) => <div style={{ position: 'absolute', top: 0, right: 0 }} {...props} />

const CodeBlock: FC<Props> = ({ codeString, language, children, ...props }) => {
  const [isCopied, setIsCopied] = useState(false)

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
    <Wrapper>
      <Highlight {...defaultProps} code={codeString} language={language} theme={synthwave84}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '2rem', position: 'relative' }}>
            <CopyButton
              onClick={() => {
                copyToClipboard(codeString)
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 3000)
              }}
            >
              {isCopied ? '🎉 Copied!' : 'Copy'}
            </CopyButton>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} style={style}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <ConfettiWrapper>
        <Confetti active={isCopied} config={confetti} />
      </ConfettiWrapper>
    </Wrapper>
  )
}

export default CodeBlock
