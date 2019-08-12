const white = '#ffffff';
const primary =  '#005fea';
const accent =  '#ffb218';
const success = '#18d867';
const danger =  '#f22141';
const dark =  '#131927';

// Background color for light and dark theme
const bgcolorLight = '#ecedf1';
const bgcolorDark = '#262d40';

// Card or sections color for light and dark theme
const cardcolorLight = white;
const cardcolorDark = dark;

// Header color for light and dark theme
const headerColorLight = '#9ea2ad';
const headerColorDark = cardcolorDark;

// Header Text color for light and dark theme
const headerTxtColorLight = dark;
const headerTxtColorDark = white;

// Border color for light and dark
const borderColorLight = '#d8d8d8';
const borderColorDark = borderColorLight;

// Text color for light and dark theme
const txtcolorLight = '#2f3541';
const txtcolorDark ='#fafafa';

// Transparent
const transparentColor = 'transparent';

const colors = {
  white: white,
  light: {
    default: white,
    bgcolor: white,
    bordercolor: borderColorLight,
    cardcolor: cardcolorLight,
    txtcolor: txtcolorLight,
    txtHovercolor: dark
  },
  primary:  {
    default: primary,
    bgcolor: transparentColor,
    bordercolor: primary,
    txtcolor: primary,
    txtHovercolor: white
  },
  accent:  {
    default: accent,
    bgcolor: transparentColor,
    bordercolor: accent,
    txtcolor: accent,
    txtHovercolor: white
  },
  success: {
    default: success,
    bgcolor: transparentColor,
    bordercolor: success,
    txtcolor: success,
    txtHovercolor: white
  },
  danger:   {
    default: danger,
    bgcolor: transparentColor,
    bordercolor: danger,
    txtcolor: danger,
    txtHovercolor: white
  },
  dark: {
    default: dark,
    bgcolor: dark,
    bordercolor: borderColorDark,
    cardcolor: cardcolorDark,
    txtcolor: txtcolorDark,
    txtHovercolor: white
  },
  themeLight: {
    bgColor: bgcolorLight,
    cardColor: cardcolorLight,
    headerColor: headerColorLight,
    headerTxtColor: headerTxtColorLight,
    breadcrumbColor: '',
    txtColor: txtcolorLight
  },
  themeDark: {
    bgColor: bgcolorDark,
    cardColor: cardcolorDark,
    headerColor: headerColorDark,
    headerTxtColor: headerTxtColorDark,
    breadcrumbColor: '',
    txtColor: txtcolorDark
  },
  charade:  '#2c2b39',
  alto:     '#d8d8d8',
  ebony:    '#0F1525',
  ebonyclay: '#262d40',
  athensgray: '#ecedf1',
  mirage: '#131927',
  santasgray: '#9ea2ad',
  lightBoxShadow: '0px 2px 4px 0px rgba(0,0,0,0.2)',
  darkBoxShadow: '0px 2px 4px 0px rgba(0,0,0,0.9)'
}

export default colors;
