import {DarkTheme as reactNavDarkTheme} from '@react-navigation/native';

const DarkTheme = {
  dark: true,
  colors: {
    ...reactNavDarkTheme.colors,
    primary: '#11111111',
    text: '#fff',
    background: '#12161C',
    secondaryColor: '#252D38',
    green: '#00D395',
    purple: '#A463FF',
    brown: '#57410B',
    lightBrown: '#FFCE2B',
    pink: '#FF3F73',
  },
  blurredText: {
    fontWeight: '600',
    color: 'rgba(255,255,255, .00)',
    textAlign: 'center',
    textShadowColor: 'rgba(255,255,255, .9)',
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 30,
  }, /// //use This To Blur Account Balances In A Fintech App For Example
};

export default DarkTheme;
