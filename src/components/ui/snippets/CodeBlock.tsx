import type { FC } from 'react'

import { useState } from 'react'
import Confetti from 'react-dom-confetti'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple'
import { chakra, Flex, Text } from '@chakra-ui/react'

import CopyButton from '@components/ui/buttons/CopyButton'
import { copyToClipboard } from 'src/utils/copyToClipboard'
import confetti from 'styles/animations/confetti'

interface Props {
  codeString: string
  language: Language
}

const Wrapper = (props) => <div style={{ position: 'relative' }} {...props} />

const ConfettiWrapper = (props) => <div style={{ position: 'absolute', top: 0, right: 0 }} {...props} />

const CodeBlock: FC<Props> = ({ codeString, language, ...props }) => {
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
      <Highlight {...defaultProps} code={codeString} language={language} theme={shadesOfPurple}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <chakra.pre
            py="12"
            pl="8"
            pr="20"
            my="4"
            overflowX="scroll"
            sx={{ position: 'relative', borderRadius: '12px' }}
            className={className}
            style={style}
          >
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
              <Flex {...getLineProps({ line, key: i })} style={style} key={i}>
                {line.map((token, key) => (
                  <chakra.span {...getTokenProps({ token, key })} key={key} />
                ))}
              </Flex>
            ))}
          </chakra.pre>
        )}
      </Highlight>

      <ConfettiWrapper>
        <Confetti active={isCopied} config={confetti} />
      </ConfettiWrapper>
    </Wrapper>
  )
}

export default CodeBlock
