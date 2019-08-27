import { css } from 'styled-components';

export const DEVICES = ['xs', 'sm', 'md', 'lg', 'xl'];
export const BASE_CONF = {
  mediaQuery: 'only screen',
  columns: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12
  },
  gutters: {
    xs: 1,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1
  },
  padding: {
    xs: 1,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1
  },
  breakpoints: {
    xs: 320,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 1920
  },
  container: {
    xs: 'full',
    sm: 740,
    md: 1004,
    lg: 1400, // max-width: 1440px
    xl: 1440 // max-width: 1440px
  }
}

const resolveConfig = props => {
  const conf = {
    ...BASE_CONF
  }

  conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint) => {
    const breakpointWidth = conf.breakpoints[breakpoint]
    media[breakpoint] = makeMedia(
      [
        conf.mediaQuery,
        breakpointWidth >= 0 && `(min-width: ${breakpointWidth}px)`
      ]
        .filter(Boolean)
        .join(' and ')
    )
    return media
  }, {})

  return conf;
}

export default function config (props = {}) {
  const conf = resolveConfig(props);
  return conf;
}

function makeMedia (media) {
  return (...args) => css`
    @media ${media} {
      ${css(...args)}
    }
  `
}
