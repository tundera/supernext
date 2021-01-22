import type { FC } from 'react'

import { NextDataHooksProvider } from 'next-data-hooks'

const DataProvider: FC = ({ children, ...props }) => {
  return <NextDataHooksProvider {...props}>{children}</NextDataHooksProvider>
}

export default DataProvider
