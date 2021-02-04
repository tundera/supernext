import { useColorModeValue } from '@chakra-ui/react'

import theme from 'styles/theme'

const useColors = () => {
  const {
    bgColor,
    secondaryBgColor,
    primaryTextColor,
    secondaryTextColor,
    tertiaryTextColor,
    borderColor,
    accentColor,
    secondaryAccentColor,
  } = theme.colors

  return {
    bgColor: useColorModeValue(bgColor.light, bgColor.dark),
    secondaryBgColor: useColorModeValue(secondaryBgColor.light, secondaryBgColor.dark),
    primaryTextColor: useColorModeValue(primaryTextColor.light, primaryTextColor.dark),
    secondaryTextColor: useColorModeValue(secondaryTextColor.light, secondaryTextColor.dark),
    tertiaryTextColor: useColorModeValue(tertiaryTextColor.light, tertiaryTextColor.dark),
    borderColor: useColorModeValue(borderColor.light, borderColor.dark),
    accentColor: useColorModeValue(accentColor.light, accentColor.dark),
    secondaryAccentColor: useColorModeValue(secondaryAccentColor.light, secondaryAccentColor.dark),
  }
}

export default useColors
