import {
  Box,
  Button,
  chakra,
  useColorModeValue,
  Flex,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
  Stack,
  Icon,
} from '@chakra-ui/react'
import Emoji from 'a11y-react-emoji'

function NewsletterSignup() {
  const Feature = (props) => (
    <Flex alignItems="center" color={useColorModeValue('gray.600', 'white')}>
      <Icon boxSize={4} mr={1} color="green.600" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </Icon>
      {props.children}
    </Flex>
  )

  return (
    <Box px={4} py={32} mx="auto">
      <Box width={{ base: '100%', md: 11 / 12, xl: 8 / 12 }} textAlign={{ base: 'left', md: 'center' }} mx="auto">
        <chakra.h1
          mb={3}
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight={{ base: 'bold', md: 'extrabold' }}
          color={useColorModeValue('gray.900', 'gray.100')}
          lineHeight="shorter"
        >
          Our Mission
        </chakra.h1>
        <chakra.p mb={6} fontSize={{ base: 'lg', md: 'xl' }} color="gray.500" lineHeight="base">
          We’re leading a effort to bring greater opportunities in tech to underserved communities by providing
          high-quality, accessible online educational content for free. We charge individuals absolutely nothing for our
          services, and depend solely on donations from individuals and organizations who benefit from the vibrant
          ecosystem of open-source technologies powering the modern web. Subscribe to our newsletter to learn more about
          our work and ways to get involved.
        </chakra.p>
        <SimpleGrid
          as="form"
          w={{ base: '100%', md: 7 / 12 }}
          columns={{ base: 1, lg: 6 }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
        >
          <GridItem as="label" colSpan={{ base: 'auto', lg: 4 }}>
            <VisuallyHidden>Your Email</VisuallyHidden>
            <Input mt={0} size="lg" type="email" placeholder="Enter your email..." required={true} />
          </GridItem>
          <Button
            as={GridItem}
            w="100%"
            variant="solid"
            colSpan={{ base: 'auto', lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="brand"
          >
            Submit
          </Button>
        </SimpleGrid>
        <Stack
          display="flex"
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'start', md: 'center' }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          fontSize="xs"
          color="gray.600"
        >
          <Feature>Courses teaching the latest and greatest tech in web development</Feature>
          <Feature>
            Content is 100% free, in the spirit of open-source development <Emoji label="Rocket emoji" symbol="🚀" />
          </Feature>
          <Feature>All proceeds benefit underprivileged communities</Feature>
        </Stack>
      </Box>
    </Box>
  )
}

export default NewsletterSignup
