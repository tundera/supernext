import { useForm } from 'react-hook-form'
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react'

type Inputs = {
  name: string
}

export function NameForm() {
  const { handleSubmit, errors, register, formState } = useForm<Inputs>()

  function validateName(value) {
    if (!value) {
      return 'Name is required'
    }
    if (value !== 'Naruto') {
      return "Jeez! You're not a fan 😱"
    }
    return true
  }

  const onSubmit = (values) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values, null, 4))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input name="name" defaultValue="Example Name" placeholder="name" ref={register({ validate: validateName })} />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}

export default NameForm
