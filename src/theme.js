// color design tokens export
export const tokensDark = {
  grey: {
    0: '#EBEDEF',
    10: '#ffffff',
    50: '#f0f0f0',
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
    1000: '#000000',
  },
  primary: {
    // Blue
    100: '#d3d4de',
    200: '#a6a9be',
    300: '#7a7f9d',
    400: '#8496ff',
    500: '#21295c',
    600: '#191F45', // Manually adjusted
    700: '#141937',
    800: '#0d1025',
    900: '#070812',
    1000: '#401686',
  },
  secondary: {
    // Yellow
    50: '#fff6e0', // Manually adjusted
    100: '#ffedc2',
    200: '#ffe3a3',
    300: '#ffda85',
    400: '#ffd166',
    500: '#cca752',
    600: '#997d3d',
    700: '#665429',
    800: '#332a14',
    900: '#8a5000', // Your secondary color (#8a5000)
  },
  tertiary: {
    // Green (Using #006e15 as tertiary color)
    100: '#d3f1d4', // Manually adjusted
    200: '#a6e3a8', // Manually adjusted
    300: '#7ace7c', // Manually adjusted
    400: '#4dbf50', // Manually adjusted
    500: '#20b024', // Manually adjusted
    600: '#1a901e', // Manually adjusted
    700: '#137e17', // Manually adjusted
    800: '#0d6d10', // Manually adjusted
    900: '#076b0a', // Manually adjusted
  },
  background: {
    10: '#3f1683', // color design for button manually adding
    100: '#ebedef',
    200: '#EBEDEF',
  },
};
 
// Figma Document Version: 4721619855
 
const palette = {
  surface: {
    neutral: 'rgba(225, 233, 238, 1)',
    light: 'rgba(255, 255, 255, 1)',
    dark: 'rgba(37, 38, 46, 1)',
    100: 'rgba(245, 249, 252, 1)',
    300: 'rgba(205, 217, 224, 1)',
    400: 'rgba(175, 188, 196, 1)',
    500: 'rgba(136, 149, 160, 1)',
    600: 'rgba(98, 112, 124, 1)',
    700: 'rgba(61, 71.92, 82, 1)',
    800: 'rgba(37, 38, 46, 1)',
    900: 'rgba(28, 27, 34, 1)',
    a100: 'rgba(150, 170, 181, 1)',
    a200: 'rgba(63, 106, 129, 1)',
    a400: 'rgba(55, 61.9, 70, 1)',
    a700: 'rgba(11.69, 11.69, 11.69, 1)',
  },
  error: {
    red: 'rgba(244, 67, 54, 1)',
    light: 'rgba(229, 115, 115, 1)',
    dark: 'rgba(211, 47, 47, 1)',
    50: 'rgba(255, 235, 238, 1)',
    100: 'rgba(255, 205, 210, 1)',
    200: 'rgba(239, 154, 154, 1)',
    400: 'rgba(239, 83, 80, 1)',
    600: 'rgba(229, 57, 53, 1)',
    800: 'rgba(198, 40, 40, 1)',
    900: 'rgba(183, 28, 28, 1)',
    a100: 'rgba(255, 205, 210, 1)',
    a200: 'rgba(255, 82, 82, 1)',
    a400: 'rgba(255, 23, 68, 1)',
    a700: 'rgba(213, 0, 0, 1)',
  },
  primary: {
    light: 'rgba(152, 216, 241, 1)',
    dark: 'rgba(16, 89.08, 142, 1)',
    50: 'rgba(238, 250, 255, 1)',
    100: 'rgba(207, 237, 250, 1)',
    300: 'rgba(86.85, 192.4, 233.15, 1)',
    400: 'rgba(25.3, 170.94, 227.7, 1)',
    500: 'rgba(0, 156, 216, 1)',
    600: 'rgba(14, 111, 166, 1)',
    800: 'rgba(7, 73.12, 121, 1)',
    900: 'rgba(0, 51.94, 99.88, 1)',
    a100: 'rgba(130, 247, 255, 1)',
    a200: 'rgba(68, 138, 255, 1)',
    a400: 'rgba(41, 177.96, 255, 1)',
    a700: 'rgba(41, 139, 255, 1)',
  },
  warning: {
    light: 'rgba(255, 183, 77, 1)',
    dark: 'rgba(245, 124, 0, 1)',
    50: 'rgba(255, 243, 224, 1)',
    100: 'rgba(255, 224, 178, 1)',
    200: 'rgba(255, 204, 128, 1)',
    400: 'rgba(255, 167, 38, 1)',
    500: 'rgba(255, 152, 0, 1)',
    600: 'rgba(251, 140, 0, 1)',
    800: 'rgba(239, 108, 0, 1)',
    900: 'rgba(230, 81, 0, 1)',
    a100: 'rgba(255, 209, 128, 1)',
    a200: 'rgba(255, 171, 64, 1)',
    a400: 'rgba(255, 145, 0, 1)',
    a700: 'rgba(255, 109, 0, 1)',
  },
  sucess: {
    light: 'rgba(129, 199, 132, 1)',
    dark: 'rgba(56, 142, 60, 1)',
    50: 'rgba(232, 245, 233, 1)',
    100: 'rgba(200, 230, 201, 1)',
    200: 'rgba(165, 214, 167, 1)',
    300: 'rgba(129, 199, 132, 1)',
    400: 'rgba(102, 187, 106, 1)',
    500: 'rgba(76, 175, 80, 1)',
    600: 'rgba(67, 160, 71, 1)',
    800: 'rgba(46, 125, 50, 1)',
    900: 'rgba(27, 94, 32, 1)',
    a100: 'rgba(185, 246, 202, 1)',
    a200: 'rgba(105, 240, 174, 1)',
    a400: 'rgba(0, 230, 118, 1)',
    a700: 'rgba(0, 200, 83, 1)',
  },
  info: {
    light: 'rgba(100, 181, 246, 1)',
    dark: 'rgba(25, 118, 210, 1)',
    50: 'rgba(227, 242, 253, 1)',
    100: 'rgba(187, 222, 251, 1)',
    200: 'rgba(144, 202, 249, 1)',
    400: 'rgba(66, 165, 245, 1)',
    500: 'rgba(33, 150, 243, 1)',
    600: 'rgba(30, 136, 229, 1)',
    800: 'rgba(21, 101, 192, 1)',
    900: 'rgba(13, 71, 161, 1)',
    a100: 'rgba(130, 177, 255, 1)',
    a200: 'rgba(68, 138, 255, 1)',
    a400: 'rgba(41, 121, 255, 1)',
    a700: 'rgba(41, 98, 255, 1)',
  },
  secondary: {
    50: 'rgba(218.03, 215.99, 219.05, 1)',
    100: 'rgba(193.04, 181.05, 208.08, 1)',
    200: 'rgba(163.97, 142.03, 191, 1)',
    300: 'rgba(135.91, 102, 177.99, 1)',
    400: 'rgba(115, 72, 166, 1)',
    500: 'rgba(95.11, 42.08, 155.04, 1)',
    600: 'rgba(86.95, 38, 150.96, 1)',
    700: 'rgba(75.99, 28.05, 140, 1)',
    800: 'rgba(64, 22, 134, 1)',
    900: 'rgba(43, 8, 119, 1)',
    a100: 'rgba(170.08, 121.12, 224.91, 1)',
    a200: 'rgba(120.1, 57.12, 222.1, 1)',
    a400: 'rgba(104, 0, 223, 1)',
    a700: 'rgba(94.09, 0, 200.94, 1)',
  },
  tertiary: {
    500: 'rgba(133.11, 82.11, 61.97, 1)',
    50: 'rgba(255, 234.09, 221.08, 1)',
    100: 'rgba(233.07, 200.94, 187.93, 1)',
    200: 'rgba(204, 166, 152, 1)',
    300: 'rgba(176, 133, 116, 1)',
    400: 'rgba(156, 108, 90, 1)',
    600: 'rgba(121, 73, 56, 1)',
    700: 'rgba(104.04, 59.92, 44.88, 1)',
    800: 'rgba(90.01, 47.94, 39.01, 1)',
    900: 'rgba(74.97, 34.93, 28.05, 1)',
  },
};
 
export default palette;
 
// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
 
// mui theme settings
export const themeSettings = (mode, data) => {
  // if (data) {
  //   let tokensLight = reverseTokens(data);
  //   return {
  //     palette: {
  //       mode: mode,
  //       ...(mode === 'dark'
  //         ? {
  //             // palette values for dark mode
  //             primary: {
  //               ...tokensDark.primary,
  //               main: tokensDark.primary[400],
  //               light: tokensDark.primary[400],
  //             },
  //             secondary: {
  //               ...tokensDark.secondary,
  //               main: tokensDark.secondary[300],
  //             },
  //             tertiary: {
  //               ...tokensDark.tertiary,
  //               main: tokensDark.tertiary[700],
  //             },
  //             neutral: {
  //               ...tokensDark.grey,
  //               main: tokensDark.grey[500],
  //             },
  //             background: {
  //               default: tokensDark.primary[600],
  //               alt: tokensDark.primary[500],
  //               light: tokensDark.primary[500],
  //               main: tokensDark.background[100],
  //               button: tokensDark.background[1000]
  //             },
  //             text: {
  //               main: tokensDark.grey[0],
  //             },
  //           }
  //         : {
  //             // palette values for light mode
  //             primary: {
  //               ...tokensLight.primary,
  //               main: tokensDark.grey[50],
  //               light: tokensDark.grey[100],
  //             },
  //             secondary: {
  //               ...tokensLight.secondary,
  //               main: tokensDark.secondary[600],
  //               light: tokensDark.secondary[700],
  //             },
  //             tertiary: {
  //               ...tokensDark.tertiary,
  //               main: tokensDark.tertiary[700],
  //             },
  //             neutral: {
  //               ...tokensLight.grey,
  //               main: tokensDark.grey[10],
  //             },
  //             background: {
  //               default: tokensDark.grey[0],
  //               alt: tokensDark.grey[50],
  //               main: tokensDark.grey[100],
  //               light: tokensDark.grey[10],
  //             },
  //             text: {
  //               main: tokensDark.grey[500],
  //             },
  //           }),
  //     },
  //     typography: {
  //       fontFamily: ['DM Sans', 'sans-serif'].join(','),
  //       fontSize: 12,
  //       h1: {
  //         fontFamily: ['DM Sans', 'sans-serif'].join(','),
  //         fontSize: 40,
  //       },
  //       h2: {
  //         fontFamily: ['DM Sans', 'sans-serif'].join(','),
  //         fontSize: 32,
  //       },
  //       h3: {
  //         fontFamily: ['DM Sans', 'sans-serif'].join(','),
  //         fontSize: 24,
  //       },
  //       h4: {
  //         fontFamily: ['DM Sans', 'sans-serif'].join(','),
  //         fontSize: 20,
  //       },
  //       h5: {
  //         fontFamily: ['DM Sans', 'sans-serif'].join(','),
  //         fontSize: 16,
  //       },
  //       h6: {
  //         fontFamily: ['DM Sans', 'sans-serif'].join(','),
  //         fontSize: 14,
  //       },
  //     },
  //   };
  // } else {
  let tokensLight = reverseTokens(tokensDark);
 
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              ...palette.primary,
              main: palette.primary['light'],
              light: palette.primary['dark'],
            },
            secondary: {
              ...palette.secondary,
              main: palette.secondary[300],
            },
            tertiary: {
              ...palette.tertiary,
              main: palette.tertiary[700],
            },
            neutral: {
              ...palette.surface,
              main: palette.surface[500],
            },
            background: {
              default: palette.surface[600],
              alt: palette.surface["dark"],
              main: palette.surface[100],
              btn: palette.surface[10],
              hover: palette.primary[600],
            },
            text: {
              main: palette.surface['light'],
              alt: palette.surface['dark'],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            tertiary: {
              ...tokensDark.tertiary,
              main: tokensDark.tertiary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[10],
            },
            background: {
              default: tokensDark.grey[0],
              // alt: tokensDark.grey[50],
              alt: tokensDark.grey[10],
              main: tokensDark.grey[100],
              btn: tokensDark.background[10],
              hover: tokensDark.background[200],
            },
            text: {
              main: tokensDark.grey[500],
              alt: tokensDark.grey[10],
            },
          }),
    },
    typography: {
      fontFamily: ['DM Sans', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['DM Sans', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['DM Sans', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['DM Sans', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['DM Sans', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['DM Sans', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['DM Sans', 'sans-serif'].join(','),
        fontSize: 14,
      },
      h7: {
        fontFamily: ['DM Sans', 'sans-serif'].join(','),
        fontSize: 12,
      },
    },
  };
};