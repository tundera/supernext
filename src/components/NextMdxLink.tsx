/* eslint-disable jsx-a11y/anchor-has-content */
import type { FC } from 'react'
import type { LinkProps } from 'next/link'

import NextLink from 'next/link'
import styled from '@emotion/styled'

const CustomLink: FC<LinkProps> = ({ as, href, ...props }) => {
  return (
    <NextLink as={as} href={href}>
      <a {...props} />
    </NextLink>
  )
}

const NextMdxLink = styled(CustomLink)`
  color: tomato;
`

export default NextMdxLink
