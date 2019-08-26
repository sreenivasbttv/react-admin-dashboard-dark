import theme from 'styled-theming';
import color from './colors';

export const backgroundColor = theme('mode', {
  light: color.themeLight.bgColor,
  dark: color.themeDark.bgColor
});

export const textColor = theme('mode', {
  light: color.themeLight.txtColor,
  dark: color.themeDark.txtColor
});

export const sectionBackgroundColor = theme('mode', {
  light: color.white,
  dark: color.mirage
});

export const sectiontextColor = theme('mode', {
  light: color.charade,
  dark: color.white
});

export const headerBackgroundColor = theme('mode', {
  light: color.santasgray,
  dark: color.mirage
});

export const headertextColor = theme('mode', {
  light: color.charade,
  dark: color.white
});

export const buttonBackgroundColor = theme('mode', {
  light: color.themeLight.bgColor,
  dark: color.themeDark.bgColor
});

export const buttonTextColor = theme('mode', {
  light: color.themeLight.txtColor,
  dark: color.themeDark.txtColor
});

export const buttonLightBoxShadow = theme('mode', {
  light: color.lightBoxShadow,
  dark: ''
});

export const buttonDarkBoxShadow = theme('mode', {
  light: '',
  dark: color.darkBoxShadow
});

export const iconColor = theme('mode', {
  light: color.mirage,
  dark: color.white
});
