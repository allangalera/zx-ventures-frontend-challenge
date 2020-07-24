const BASE_FONT_SIZE = 16;
const BASE_PROPORTION = 8;
const TRANSITION_DURATION = 180;

const spacing = {
  pxToRem: (px: number): string => {
    return `${px / BASE_FONT_SIZE}rem`;
  },
  unityToRem: (unity: number): string => {
    return `${unity / BASE_PROPORTION}rem`;
  },
};

const fontSize = {
  xs: spacing.unityToRem(6),
  sm: spacing.unityToRem(7),
  base: spacing.unityToRem(8),
  lg: spacing.unityToRem(9),
  xl: spacing.unityToRem(10),
  '2xl': spacing.unityToRem(12),
  '3xl': spacing.unityToRem(15),
  '4xl': spacing.unityToRem(18),
  '5xl': spacing.unityToRem(24),
  '6xl': spacing.unityToRem(32),
};

const fontWeight = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

const font = {
  size: fontSize,
  weight: fontWeight,
  family: {
    sans: '"Roboto", sans',
  },
};

// extracted from tailwind default config :)
const defaultColors = {
  transparent: 'transparent',

  black: '#000000',
  white: '#ffffff',

  gray: {
    100: '#E6E6E6',
    200: '#CCCCCC',
    300: '#B3B3B3',
    400: '#999999',
    500: '#808080',
    600: '#666666',
    700: '#4C4C4C',
    800: '#333333',
    900: '#1A1A1A',
  },
  red: {
    100: '#fff5f5',
    200: '#fed7d7',
    300: '#feb2b2',
    400: '#fc8181',
    500: '#f56565',
    600: '#e53e3e',
    700: '#c53030',
    800: '#9b2c2c',
    900: '#742a2a',
  },
  orange: {
    100: '#fffaf0',
    200: '#feebc8',
    300: '#fbd38d',
    400: '#f6ad55',
    500: '#ed8936',
    600: '#dd6b20',
    700: '#c05621',
    800: '#9c4221',
    900: '#7b341e',
  },
  yellow: {
    100: '#fffff0',
    200: '#fefcbf',
    300: '#faf089',
    400: '#f6e05e',
    500: '#ecc94b',
    600: '#d69e2e',
    700: '#b7791f',
    800: '#975a16',
    900: '#744210',
  },
  green: {
    100: '#f0fff4',
    200: '#c6f6d5',
    300: '#9ae6b4',
    400: '#68d391',
    500: '#48bb78',
    600: '#38a169',
    700: '#2f855a',
    800: '#276749',
    900: '#22543d',
  },
  teal: {
    100: '#e6fffa',
    200: '#b2f5ea',
    300: '#81e6d9',
    400: '#4fd1c5',
    500: '#38b2ac',
    600: '#319795',
    700: '#2c7a7b',
    800: '#285e61',
    900: '#234e52',
  },
  blue: {
    100: '#ebf8ff',
    200: '#bee3f8',
    300: '#90cdf4',
    400: '#63b3ed',
    500: '#4299e1',
    600: '#3182ce',
    700: '#2b6cb0',
    800: '#2c5282',
    900: '#2a4365',
  },
  indigo: {
    100: '#ebf4ff',
    200: '#c3dafe',
    300: '#a3bffa',
    400: '#7f9cf5',
    500: '#667eea',
    600: '#5a67d8',
    700: '#4c51bf',
    800: '#434190',
    900: '#3c366b',
  },
  purple: {
    100: '#faf5ff',
    200: '#e9d8fd',
    300: '#d6bcfa',
    400: '#b794f4',
    500: '#9f7aea',
    600: '#805ad5',
    700: '#6b46c1',
    800: '#553c9a',
    900: '#44337a',
  },
  pink: {
    100: '#fff5f7',
    200: '#fed7e2',
    300: '#fbb6ce',
    400: '#f687b3',
    500: '#ed64a6',
    600: '#d53f8c',
    700: '#b83280',
    800: '#97266d',
    900: '#702459',
  },
};

const transition = {
  default: `all ${TRANSITION_DURATION}ms ease-in-out`,
};

const border = {
  style: 'solid',
  width: spacing.pxToRem(1),
  radius: spacing.unityToRem(4),
};

const defaults = {
  c: BASE_FONT_SIZE,
  header: {
    height: {
      mobile: spacing.unityToRem(32),
      desktop: spacing.unityToRem(40),
    },
  },
  footer: {
    height: {
      mobile: spacing.unityToRem(20),
      desktop: spacing.unityToRem(20),
    },
  },
};

const boxShadow = {
  1: '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)',
  2: '0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.3)',
  3: '0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)',
  4: '0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -7px rgba(0,0,0,0.2)',
  5: '0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.2)',
};

const screens = {
  sm: spacing.unityToRem(320),
  md: spacing.unityToRem(384),
  lg: spacing.unityToRem(512),
  xl: spacing.unityToRem(640),
};

export default {
  light: {
    ...defaults,
    screens,
    font,
    spacing,
    transition,
    colors: {
      ...defaultColors,
      defaultBackground: defaultColors.white,
      headerBackground: defaultColors.white,
      footerBackground: defaultColors.white,
    },
    boxShadow,
    border: {
      ...border,
      color: {
        default: defaultColors.gray[100],
        hover: defaultColors.gray[300],
      },
    },
  },
  dark: {
    ...defaults,
    screens,
    font,
    spacing,
    transition,
    colors: {
      ...defaultColors,
      defaultBackground: defaultColors.black,
      headerBackground: defaultColors.black,
      footerBackground: defaultColors.black,
    },
    boxShadow,
    border: {
      ...border,
      color: {
        default: defaultColors.gray[100],
        hover: defaultColors.gray[300],
      },
    },
  },
};
