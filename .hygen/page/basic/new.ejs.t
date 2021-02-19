---
to: pages/<%= name %>.tsx
---
<% formattedPath = h.camelizedPathName(name).replace('/','') -%>
<% pageName = `${formattedPath}Page` -%>
<% base = h.camelizedBaseName(name) -%>
import type { CustomNextPage as NextPage } from 'types'

import { Flex, Heading } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'

const <%= pageName %>: NextPage = () => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1"><%= formattedPath %> Page</Heading>
      </Flex>
    </>
  )
}

<%= pageName %>.getLayout = getLayout

export default <%= pageName %>
