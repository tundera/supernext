import { createDataHook, isServerSidePropsContext } from 'next-data-hooks'

export const useColorModeCookies = createDataHook('ColorModeCookies', async (context) => {
  if (!isServerSidePropsContext(context)) {
    throw new Error('This data hook only works in getServerSideProps.')
  }

  // first time users will not have any cookies and you may not return
  // undefined here, hence ?? is necessary
  const cookies = context.req.headers.cookie ?? ''

  return {
    cookies,
  }
})
