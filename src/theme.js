// color design tokens export
export const tokensDark = {
  grey: {
    0: '#ffffff',
    10: '#f6f6f6',
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
    400: '#4d547d',
    500: '#21295c',
    600: '#191F45', // Manually adjusted
    700: '#141937',
    800: '#0d1025',
    900: '#070812',
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
    100: '#ebedef',
  }
};

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
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
              main: tokensDark.background[100],
            },
            text: {
              main: tokensDark.grey[50]
            }
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
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
              main: tokensDark.background[100],
            },
            text: {
              main: tokensDark.grey[500]
            }
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
    },
  };
};
