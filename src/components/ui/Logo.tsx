import { Box } from '@chakra-ui/react'
import { ReactSVG } from 'react-svg'

function Logo({ ...props }) {
  return (
    <Box {...props}>
      <ReactSVG
        role="img"
        src="static/logo-gold.svg"
        beforeInjection={(svg) => {
          svg.classList.add('svg-class-name')
          svg.setAttribute('style', 'width: 100px')
        }}
      />
    </Box>
  )
}

export default Logo
