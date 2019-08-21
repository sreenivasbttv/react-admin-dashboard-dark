import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import config, { DEVICES } from './config';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  box-sizing: border-box;

  ${props => css`
    ${DEVICES.map(d =>
    config(props).container[d] && config(props).media[d]`
      padding-left: ${config(props).padding[d]}rem;
      padding-right: ${config(props).padding[d]}rem;
    `)}
  `}

  ${props => !props.fluid && css`
    ${DEVICES.map(d =>
    config(props).container[d] && config(props).media[d]`
      ${typeof config(props).container[d] === 'number' ? `width: ${config(props).container[d]}rem;` : `width: 100%;`}
    `)}
  `}

`;


Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node
}

export default Container;
