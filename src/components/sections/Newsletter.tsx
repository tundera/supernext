import { forwardRef } from 'react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'

import { useColors } from '@hooks/useColors'

const Newsletter = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
  const { accentColor } = useColors()
  const { primaryTextColor } = useColors()

  return (
    <Box my={4} w="100%" ref={ref} {...props}>
      <Heading
        fontSize={['1.7rem', '1.7rem', '2rem', '2rem']}
        color={primaryTextColor}
        mb={4}
        borderBottom={['none', 'none', '1px solid #d6d9de', '1px solid #d6d9de']}
        padding="0.8rem 1rem"
      >
        Subscribe to my newsletter
      </Heading>
      <Text color={primaryTextColor} fontSize="1.1rem" fontWeight="400" padding="0.8rem 1rem">
        Something extra to check out if you like React and want to hear what I'm working on.
      </Text>
      <Button
        href="https://ogzhanolguncu.substack.com/subscribe"
        isExternal
        bg={accentColor}
        d="inline-block"
        color="white"
        padding="20px 25px"
        fontWeight="600"
        fontSize={['15px', '16px', '16px', '18px']}
        mt="15px"
        mb={['10px', '10px', '0px', '0px']}
        mx={['16px', '16px', '16px', '16px']}
        borderRadius=".25rem"
      >
        Join the Newsletter
      </Button>
    </Box>
  )
})

export default Newsletter
