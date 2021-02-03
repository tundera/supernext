import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ''

const client = new GraphQLClient(endpoint)

export default client
