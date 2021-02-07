import { useState } from 'react'

import { useColorMode, useColorModeValue, Button, ButtonGroup, IconButton, Flex, Text } from '@chakra-ui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { BsCircleFill } from 'react-icons/bs'
import styled from '@emotion/styled'

import PreviewButton from '@components/utility/PreviewButton'

type Props = {
  preview: boolean
}

const StickyBanner = styled(Flex)`
  position: sticky;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const PreviewBanner = ({ preview }: Props) => {
  const { colorMode } = useColorMode()
  const bg = useColorModeValue('gray.300', 'gray.500')
  const color = useColorModeValue('brand.500', 'whiteAlpha.900')

  const [isHidden, setIsHidden] = useState(true)

  const handleToggleDisplay = () => {
    setIsHidden(!isHidden)
  }

  return (
    <StickyBanner bg={bg} minWidth="100%">
      <Text py={2} fontSize={isHidden ? '16px' : '24px'} textAlign="center" color={color}>
        This site is currently showing {preview ? <b>preview</b> : <b>published</b>} content.
      </Text>
      {!isHidden ? (
        <>
          <Text py={2} fontSize="16px" textAlign="center" color={color}>
            Toggle content type below.
          </Text>
          <ButtonGroup variant="outline" spacing="6">
            <PreviewButton />
            <Button
              as="a"
              href="/api/exit-preview"
              rightIcon={<BsCircleFill size="12px" color="limegreen" />}
              w="175px"
              py={4}
              my={4}
              bgColor={colorMode === 'dark' ? 'gray.600' : 'white'}
            >
              Published
            </Button>
          </ButtonGroup>
        </>
      ) : null}
      <IconButton
        onClick={handleToggleDisplay}
        mt={isHidden ? 2 : 4}
        mb={4}
        bgColor={colorMode === 'dark' ? 'gray.400' : 'gray.200'}
        aria-label="Toggle Preview Banner"
        size="sm"
        icon={
          isHidden ? (
            <ChevronDownIcon color={colorMode === 'dark' ? 'gray.100' : 'gray.700'} />
          ) : (
            <ChevronUpIcon color={colorMode === 'dark' ? 'gray.100' : 'gray.700'} />
          )
        }
      />
    </StickyBanner>
  )
}

export default PreviewBanner
