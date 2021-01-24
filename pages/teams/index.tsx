import type { GetStaticProps } from 'next'

import { getDataHooksProps } from 'next-data-hooks'

import TeamsIndex from '@routes/teams'

export const getStaticProps: GetStaticProps = async (context) => {
  const dataHooksProps = await getDataHooksProps({
    context,
    dataHooks: TeamsIndex.dataHooks,
  })

  return {
    props: {
      ...dataHooksProps,
    },
    revalidate: 1,
  }
}

export default TeamsIndex
