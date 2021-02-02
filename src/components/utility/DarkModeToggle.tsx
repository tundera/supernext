import { Box, IconButton, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  const color = useColorModeValue('whiteAlpha.900', 'stone.700')
  const label = useColorModeValue('Dark Mode', 'Light Mode')
  const ariaLabel = useColorModeValue('Enable light mode button', 'Enable dark mode button')

  return (
    <Box mx="2">
      <Tooltip label={label} hasArrow>
        <IconButton
          aria-label={ariaLabel}
          isRound
          variant="ghost"
          color={color}
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
        />
      </Tooltip>
    </Box>
  )
}

export default DarkModeToggle
