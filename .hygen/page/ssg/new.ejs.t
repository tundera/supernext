---
to: pages/<%= name %>.tsx
---
<% formattedPath = h.camelizedPathName(name).replace('/','') -%>
<% pageName = `${formattedPath}Page` -%>
<% base = h.camelizedBaseName(name) -%>
<% if (locals.prop) { -%>
<% pageProps = h.pluralizePageProp(prop) -%>
<% formattedPageProps = h.camelizedBaseName(pageProps) -%>
<% getPageProps = `get${formattedPageProps}` -%>
<% } -%>
import type { GetStaticProps } from 'next'
import type { CustomNextPage as NextPage } from 'types'

import { Flex, Heading, List, ListItem } from '@chakra-ui/react'

import { getLayout } from '@components/layouts/SiteLayout'

<% if(locals.prop) { -%>
import { <%= getPageProps %> } from '@lib/data/<%= pageProps %>'

interface Props {
  <%= pageProps %>: any
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const pageSlug = params?.slug as string

  const { <%= pageProps %> } = await <%= getPageProps %>()

  //   if (/* some condition */) {
  //     return {
  //       notFound: true,
  //     }
  //   }

  return {
    props: {
      <%= pageProps %>
    },
  }
}

const <%= pageName %>: NextPage<Props> = ({ <%= pageProps %> }) => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1"><%= formattedPath %> Page</Heading>
        <List spacing="2">
          {<%= pageProps %>.map(<%= prop %> => (
            <ListItem key={<%= prop %>.name}>
              {<%= prop %>.name}
            </ListItem>
          ))}
        </List>
      </Flex>
    </>
  )
}

<% } else  { -%>
const <%= pageName %>: NextPage = () => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading as="h1"><%= formattedPath %> Page</Heading>
      </Flex>
    </>
  )
}
<% } -%>

<%= pageName %>.getLayout = getLayout

export default <%= pageName %>

<% if(locals.pageProps) { -%>
export type { Props as <%= pageName %>Props }
<% } -%>