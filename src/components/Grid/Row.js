import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import config, { DEVICES } from './config';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${props => css`
    ${DEVICES.map(d =>
      config(props).container[d] && config().media[d]`
      margin-left: -${config(props).gutters[d] / 2}rem;
      margin-right: -${config(props).gutters[d] / 2}rem;
      `)}
    `}

    ${props => props.reverse && css`
      ${Array.isArray(props.reverse)
        ? DEVICES.map(d =>
          config(props).breakpoints[d] && config(props).media[d]`
          flex-direction:${props.reverse.indexOf(d) !== -1 ? `row-reverse` : `row`};`)
        : 'flex-direction: row-reverse;'}
    `}
  `;

const boolOrArray = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.array
])

Row.propTypes = {
  reverse: boolOrArray,
  children: PropTypes.node
}

export default Row;
