import { Heading, chakra } from '@chakra-ui/react'

const ChakraHeading = chakra(Heading, {
  shouldForwardProp: (prop) => ['as', 'size', 'fontWeight', 'mb'].includes(prop),
})

function SectionHeadline({ children, ...props }) {
  return (
    <ChakraHeading as="h2" size="xl" fontWeight={600} mb={8} {...props}>
      {children}
    </ChakraHeading>
  )
}

export default SectionHeadline
