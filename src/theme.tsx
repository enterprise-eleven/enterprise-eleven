import { extendTheme } from '@chakra-ui/react'

const fonts = { avenir: `'Avenir', sans-serif` }

const colors = {
  brand: {
    deepNavy: '#252737',
    brightSage: '#6ff08c',
    coolGray: '#ecedec',
    kellyGreen: '#489e62',
    seafoam: '#70c6a7',
  },
}

const styles = {
  global: {
    // styles for the `body`
    body: {
      bg: 'brand.deepNavy',
      color: 'brand.coolGray',
      fontFamily: 'avenir',
    },
    // styles for the `a`
    // a: {
    //   color: "teal.500",
    //   _hover: {
    //     textDecoration: "underline",
    //   },
    // },
  },
}

const components = {
  Link: {
    baseStyle: {
      fontWeight: 'bold',
      fontSize: '24px',
      color: 'brand.brightSage',
      _hover: {
        textDecoration: 'none',
      },
    },
    variants: {
      active: {
        color: 'brand.coolGray',
      },
      footer: {
        color: 'brand.deepNavy',
      },
    },
  },
  Divider: {
    baseStyle: {
      borderWidth: '6px',
      borderColor: 'brand.kellyGreen',
      opacity: '1',
      margin: '0 !important',
    },
  },
  Button: {
    variants: {
      bright: {
        fontWeight: '900',
        fontSize: '45px',
        backgroundColor: 'brand.brightSage',
        color: 'brand.deepNavy',
        height: '107px',
        width: '430px',
        borderRadius: '30px',
      },
    },
  },
}

const theme = extendTheme({ colors, fonts, styles, components })

export default theme
