import type { FC } from 'react'

import { useRouter } from 'next/router'
import {
  useColorMode,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from '@chakra-ui/react'

const LoginButton: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} w="100%" varint="ghost" bgGradient="linear(to-r, spark.400,deep.500)">
        Sign in
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Sign In</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>{/* Login form goes here */}</ModalBody>

          <ModalFooter justifyContent="center">{/* Footer content like `powered by supabase etc` */}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginButton
