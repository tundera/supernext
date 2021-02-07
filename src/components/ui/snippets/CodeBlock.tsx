import type { FC } from 'react'

import { useState } from 'react'
import Confetti from 'react-dom-confetti'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import palenight from 'prism-react-renderer/themes/palenight'
import { chakra, Flex, Text } from '@chakra-ui/react'

import CopyButton from '@components/ui/buttons/CopyButton'
import { copyToClipboard } from 'src/utils/copyToClipboard'
import confetti from 'styles/animations/confetti'

type Props = {
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
      <Highlight {...defaultProps} code={codeString} language={language} theme={palenight}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <chakra.pre
            className={className}
            py="12"
            pl="8"
            pr="20"
            my="4"
            sx={{ position: 'relative', borderRadius: '12px' }}
            style={{ ...style }}
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
              <Flex {...getLineProps({ line, key: i })} style={style} key={i} wrap="wrap">
                {line.map((token, key) => (
                  <Text {...getTokenProps({ token, key })} key={key} overflowX="scroll" />
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
