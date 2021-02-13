import type { FC } from 'react'

import {
  useColorModeValue,
  Button,
  IconButton,
  Menu,
  Avatar,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Tooltip,
} from '@chakra-ui/react'
import { signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import { Settings } from 'react-feather'

const SettingsButton: FC<Props> = () => {
  const router = useRouter()

  const color = useColorModeValue('brand.500', 'whiteAlpha.900')
  const bg = useColorModeValue('whiteAlpha.900', 'brand.800')
  const hoverColor = useColorModeValue('whiteAlpha.900', 'brand.800')
  const hoverBg = useColorModeValue('brand.800', 'whiteAlpha.900')

  return (
    <Menu>
      <Tooltip hasArrow label="Settings ⚙️">
        <MenuButton as={Button} variant="ghost">
          <IconButton
            aria-label={'Settings icon dropdown'}
            icon={<Settings size="16px" />}
            size="sm"
            color={color}
            _hover={{ bgBlendMode: 'difference', bgColor: 'gray.300', color: hoverColor }}
            variant="ghost"
          />
        </MenuButton>
      </Tooltip>

      <MenuList bg={bg}>
        <MenuGroup title="Settings">
          <MenuItem
            onClick={() => router.push('/dashboard')}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            onClick={() => router.push('/account')}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            Account
          </MenuItem>
          <MenuItem
            onClick={() => signOut()}
            _focus={{ color: hoverColor, bg: hoverBg }}
            _hover={{ color: hoverColor, bg: hoverBg }}
          >
            Sign Out
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default SettingsButton
