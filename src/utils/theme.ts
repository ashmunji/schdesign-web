import { Heading, Link } from 'rebass';

const theme = {
  breakpoints: [545, 1024, 1440, 1920],
  colors: {
    red: '#FDFFFC',
    darkgray: '#FDFFFC',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(value => `${value / 16}rem`),
  fonts: {
    sans: 'Montserrat, system-ui, sans-serif',
    mono: 'monospace',
  },
  fontWeights: {
    bold: 100,
  },
  Heading: {
    fontWeight: 100,
    textTransform: 'lowercase',
  },
  Link: {
    padding: '0.125em 0',
    textDecoration: 'none',
    'p &:hover': {
      background: '#333333',
      color: 'white',
    },
  },
};

Heading.defaultProps = {
  ...Heading.defaultProps,
  as: 'h1',
  fontSize: '2rem',
  fontFamily: 'mono',
};

Link.defaultProps = {
  ...Link.defaultProps,
  color: 'red',
};

export default theme;
