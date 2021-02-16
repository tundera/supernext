import { GraphQLClient } from 'graphql-request'

const graphCmsClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT)

const graphCmsAuthorizedClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
  },
})

const graphCmsMutationClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPH_CMS_MUTATION_TOKEN}`,
  },
})

export { graphCmsClient, graphCmsAuthorizedClient, graphCmsMutationClient }
