import type { FC } from 'react'

import { FormspreeProvider } from '@formspree/react'

const FormProvider: FC = ({ children }) => {
  return <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID || ''}>{children}</FormspreeProvider>
}

export default FormProvider
