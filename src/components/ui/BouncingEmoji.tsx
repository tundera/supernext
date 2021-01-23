import type { FC } from 'react'

import Emoji from 'a11y-react-emoji'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string
  symbol: string
}

const CustomEmoji: FC<Props> = ({ label, symbol, ...props }) => {
  return <Emoji label={label} symbol={symbol} {...props} />
}

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const BouncingEmoji = styled(CustomEmoji)`
  font-size: 64px;
  animation: ${bounce} 1s ease infinite;
  text-align: center;
`

export default BouncingEmoji
