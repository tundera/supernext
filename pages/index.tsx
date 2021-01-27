import type { GetServerSideProps } from 'next'

import { getDataHooksProps } from 'next-data-hooks'

import HomeIndex from '@routes/home'

export const getServerServerSideProps: GetServerSideProps = async (context) => {
  const dataHooksProps = await getDataHooksProps({
    context,
    dataHooks: HomeIndex.dataHooks,
  })

  return {
    props: {
      ...dataHooksProps,
    },
  }
}

export default HomeIndex
