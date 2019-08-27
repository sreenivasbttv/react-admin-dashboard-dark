import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import config, { DEVICES } from './config';

const Col = styled.div`
  position: relative;
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${props => !props.noGutter && css`
    ${DEVICES.map(d =>
    config(props).breakpoints[d] && config(props).media[d]`
      padding-right: ${config(props).gutters[d] / 2}rem;
      padding-left: ${config(props).gutters[d] / 2}rem;
    `)}
  `}

  ${props => css`
    ${DEVICES.map(d =>
    config(props).breakpoints[d] && config(props).media[d]`
      ${props[d] && `
        flex: 0 0 ${(props[d] / config(props).columns[d]) * 100}%;
        max-width: ${(props[d] / config(props).columns[d]) * 100}%;
      `}
    `)}
  `}

  ${props => props.offset && css`
    ${DEVICES.map(d =>
    config(props).breakpoints[d] && config(props).media[d]`
    ${typeof props.offset === 'object'
    ? props.offset[d] !== undefined && `margin-left: ${props.offset[d] > 0 ? (props.offset[d] / config(props).columns[d]) * 100 : 0}%`
    : `margin-left: ${(props.offset / config(props).columns['xs']) * 100}%`};
    `)}
  `}

  ${props => props.reverse && css`
    ${Array.isArray(props.reverse)
    ? DEVICES.map(d =>
      config(props).breakpoints[d] && config(props).media[d]`
      flex-direction:${props.reverse.indexOf(d) !== -1 ? `column-reverse` : `column`};`)
    : 'flex-direction: column-reverse;'}
  `}

`;

const numberOrString = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])

const numberOrObject = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.object
])

const boolOrArray = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.array
])

Col.propTypes = {
  xs: numberOrString,
  sm: numberOrString,
  md: numberOrString,
  lg: numberOrString,
  xl: numberOrString,
  offSet: numberOrObject,
  reverse: boolOrArray,
  noGutter: PropTypes.bool,
  children: PropTypes.node,
}

export default Col;
