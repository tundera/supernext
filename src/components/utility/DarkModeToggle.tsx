import { Box, IconButton, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  const label = useColorModeValue('Dark Mode', 'Light Mode')
  return (
    <Box>
      <Tooltip label={label} hasArrow>
        {colorMode === 'light' ? (
          <IconButton
            aria-label="enable dark mode"
            isRound
            variant="ghost"
            colorScheme="black"
            color="white"
            icon={<FiMoon />}
            onClick={toggleColorMode}
          />
        ) : (
          <IconButton
            aria-label="enable light mode"
            isRound
            variant="ghost"
            colorScheme="purple"
            color="stone.700"
            icon={<FiSun />}
            onClick={toggleColorMode}
          />
        )}
      </Tooltip>
    </Box>
  )
}

export default DarkModeToggle
