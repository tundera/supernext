import type { FC } from 'react'

import { useForm, ValidationError } from '@formspree/react'
import { FormLabel, FormControl, Input, Button, Text } from '@chakra-ui/react'
import Emoji from 'a11y-react-emoji'

export const UpdatesForm: FC = () => {
  const [state, handleSubmit] = useForm('signupForm')

  if (state.succeeded) {
    return (
      <Text>
        We'll keep you posted on course availability! Thanks for your support. We've sent over a special discount code
        for you to use when the course is released! Stay tuned <Emoji symbol="🥳" label="Party face emoji" />
      </Text>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isInvalid={!!state.errors}>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input id="email" type="email" name="email" placeholder="example@tundera.dev" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FormControl>
      <Button mt={4} colorScheme="blue" isLoading={state.submitting} type="submit">
        Submit
      </Button>
    </form>
  )
}

export default UpdatesForm
