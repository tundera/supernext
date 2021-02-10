import {
  chakra,
  useColorModeValue,
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Tooltip,
} from '@chakra-ui/react'

import i18n from 'src/i18n'
import { useRouter } from 'next/router'
import Emoji from 'a11y-react-emoji'

const LocaleEmoji = chakra(Emoji)

function LocaleButton() {
  const router = useRouter()
  const { asPath, locale, replace, route } = router

  const bg = useColorModeValue('whiteAlpha.900', 'brand.800')
  const hoverColor = useColorModeValue('whiteAlpha.900', 'brand.800')
  const hoverBg = useColorModeValue('brand.800', 'whiteAlpha.900')

  function change(code: string) {
    replace(route, asPath, { locale: code })
  }

  return (
    <Menu>
      <Tooltip hasArrow label="Select language ✨">
        <MenuButton as={Button} variant="ghost" mx="2">
          <LocaleEmoji fontSize="1.25rem" symbol={i18n.flag[locale ?? '']} label="Locale flag emoji" />
        </MenuButton>
      </Tooltip>

      <MenuList bg={bg}>
        <MenuGroup title="Language">
          <MenuItem
            onClick={() => change('en')}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            English
          </MenuItem>
          <MenuItem
            onClick={() => change('es')}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            Spanish
          </MenuItem>
          <MenuItem
            onClick={() => change('de')}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            German
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default LocaleButton
