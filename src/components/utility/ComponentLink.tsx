import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

export interface Props {
  href: string
  as?: React.ElementType
  nextLinkProps?: NextLinkProps
}

const ComponentLink: React.FC<Props> = ({ href, as: Component = ChakraLink, nextLinkProps, ...props }: Props) => (
  <NextLink href={href} passHref {...nextLinkProps}>
    <Component {...props} as="a" />
  </NextLink>
)

export default ComponentLink

export type { Props as ComponentLinkProps }
