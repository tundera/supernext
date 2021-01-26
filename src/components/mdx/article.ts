import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Container, Flex, Box } from '@chakra-ui/react'

import NextMdxLink from '@components/NextMdxLink'

export default {
  a: NextMdxLink,
  SampleButtons: dynamic(() => import('@components/ui/buttons/SampleButtons')),
  Flex,
  Box,
  Container,
  Head,
}
