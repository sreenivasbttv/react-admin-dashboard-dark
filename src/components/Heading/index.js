import styled, { css, withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { textColor } from '../../theme';

  const Heading = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.2;
    margin: 0 0 16px;
    padding: 0;
    color: ${textColor};

    ${props => props.as==='h1' && css`
      font-size: 32px;
    `}
    ${props => props.as==='h2' && css`
      font-size: 28px;
    `}
    ${props => props.as==='h3' && css`
      font-size: 22px;
    `}
    ${props => props.as==='h4' && css`
      font-size: 18px;
    `}
    ${props => props.as==='h5' && css`
      font-size: 14px;
    `}
    ${props => props.as==='h6' && css`
      font-size: 12px;
    `}
    ${props => props.as!=='div' && css`
      font-weight: 700;
    `}
  `;

  Heading.propTypes = {
    as: PropTypes.oneOf(["h1","h2","h3","h4","h5","h6","div"])
  }

export default withTheme(Heading);
