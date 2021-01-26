import type { FC } from 'react'

import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { BsCircleFill } from 'react-icons/bs'
import {
  useColorMode,
  useDisclosure,
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

type Inputs = {
  secret: string
}

const PreviewButton: FC = () => {
  const router = useRouter()
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { handleSubmit, errors, register, formState } = useForm<Inputs>()

  function validateSecret(value) {
    if (!value) {
      return 'Secret is required!'
    }
    return true
  }

  const onSubmit = (values) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        router.replace(`/api/preview?secret=${values.secret}`)
        resolve()
      }, 3000)
    })
  }

  return (
    <>
      <Button
        // href={`/api/preview?secret=${process.env.NEXT_SANITY_PREVIEW_SECRET}`}
        onClick={onOpen}
        iconSpacing={4}
        rightIcon={<BsCircleFill size="12px" color="orange" />}
        w="175px"
        py={4}
        my={4}
        bgColor={colorMode === 'dark' ? 'gray.600' : 'white'}
      >
        Preview
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Enter preview secret</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
              <FormControl isInvalid={!!errors.secret}>
                <FormLabel htmlFor="secret">Secret</FormLabel>
                <Input
                  name="secret"
                  placeholder="Enter preview secret..."
                  ref={register({ validate: validateSecret })}
                />
                <FormErrorMessage>{errors.secret && errors.secret.message}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent="center">
              <ButtonGroup variant="outline" spacing="2">
                <Button mt={4} color="white" bgColor="green.400" isLoading={formState.isSubmitting} type="submit">
                  Submit
                </Button>
                <Button type="button" onClick={onClose} mt={4} color="white" bgColor="red.400">
                  Cancel
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PreviewButton
