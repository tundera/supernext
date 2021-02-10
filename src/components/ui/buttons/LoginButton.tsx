import type { FC } from 'react'

import { useRouter } from 'next/router'
import {
  useColorModeValue,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Text,
  Divider,
  VStack,
} from '@chakra-ui/react'

import LoginForm from '@components/ui/forms/LoginForm'

const LoginButton: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        onClick={onOpen}
        w="100%"
        color={useColorModeValue('whiteAlpha.900', 'brand.500')}
        colorScheme={useColorModeValue('brand', 'gray')}
        size="sm"
      >
        Sign in
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" bg="gray.800">
            Sign In
          </ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody pb={6} color="black">
            <LoginForm />
          </ModalBody>
          <Divider />
          <ModalFooter justifyContent="center" bg="gray.800">
            <VStack align="center" p={4}>
              <img src="https://app.supabase.io/img/supabase-dark.svg" width="96" alt="Supabase logo" />
              <Text color="whiteAlpha.900">Welcome to Supabase Auth</Text>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginButton
