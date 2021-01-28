import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList, Tooltip } from '@chakra-ui/react'

import i18n from 'src/i18n'
import { useRouter } from 'next/router'
import Emoji from 'a11y-react-emoji'

function LocaleButton() {
  const router = useRouter()
  const { asPath, locale, replace, route } = router

  function change(code: string) {
    replace(route, asPath, { locale: code })
  }

  return (
    <Menu>
      <Tooltip hasArrow label="Select language ✨">
        <MenuButton as={Button} variant="ghost">
          <Emoji symbol={i18n.flag[locale ?? '']} label="Locale flag emoji" />
        </MenuButton>
      </Tooltip>

      <MenuList>
        <MenuGroup title="Language/Sprache">
          <MenuItem onClick={() => change('en')}>English (US)</MenuItem>
          <MenuItem onClick={() => change('de')}>German (DE)</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default LocaleButton
