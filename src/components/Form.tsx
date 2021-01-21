import { useForm } from 'react-hook-form'
import React from 'react'
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react'

export default function HookForm() {
  const { handleSubmit, errors, register, formState } = useForm()

  function validateName(value) {
    if (!value) {
      return 'Name is required'
    }
    if (value !== 'Naruto') {
      return "Jeez! You're not a fan 😱"
    }
    return true
  }

  function onSubmit(values) {
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
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input name="name" placeholder="name" ref={register({ validate: validateName })} />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}
