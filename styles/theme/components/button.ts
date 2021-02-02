export default {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: 'bold', // Normally, it is "semibold"
  },

  // 2. We can add a new button size or extend existing
  sizes: {
    sm: {
      h: '24px',
      fontSize: '12px',
      px: '8px',
    },
    md: {
      h: '32px',
      fontSize: '16px',
      px: '8px',
    },
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '16px',
    },
  },
  // 3. We can add a new visual variant
  variants: {
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde',
    },
    outline: {
      border: '2px solid',
      borderColor: 'green.500',
    },
    // 4. We can override existing variants
    solid: (props) => ({
      bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    }),
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}
