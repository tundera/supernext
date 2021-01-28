import { useForm, ValidationError } from '@formspree/react'
import { FormLabel, FormControl, Input, Button, Text } from '@chakra-ui/react'
import Emoji from 'a11y-react-emoji'

export function UpdatesForm() {
  const [state, handleSubmit] = useForm('signupForm')

  if (state.succeeded) {
    return (
      <Text>
        We'll keep you posted on course availability! Thanks for your support. We've sent over a special discount code
        for you to use when the course is released! Stay tuned <Emoji symbol="🥳" label="Party face emoji" />
      </Text>
    )
  }
}

export default UpdatesForm
