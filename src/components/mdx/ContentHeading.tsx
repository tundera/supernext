import type { FC } from 'react'

import { Box, Heading } from '@chakra-ui/react'

interface Props {
  id: string
}

const ContentHeading: FC<Props> = ({ id, children, ...props }) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: '""',
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {children}
      {id && (
        <Box
          aria-label="anchor"
          as="a"
          color="blue.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline',
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
)

export default ContentHeading

export type { Props as ContentHeadingProps }
