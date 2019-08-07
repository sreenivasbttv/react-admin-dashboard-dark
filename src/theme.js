import theme from 'styled-theming';
import color from './colors';

export const backgroundColor = theme('mode', {
  light: color.athensgray,
  dark: color.ebonyclay
});

export const textColor = theme('mode', {
  light: color.charade,
  dark: color.white
});

export const buttonBackgroundColor = theme('mode', {
  light: color.dark,
  dark: color.white
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: color.charade
});
