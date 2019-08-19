import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { textColor } from '../../theme';

  const DropdownItem = styled.div`
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.2;
    padding: 0;
    color: ${textColor};
    background-color: transparent;
    border: 0;
    text-align: left;
    cursor: pointer;
  `;

  DropdownItem.propTypes = {
    as: PropTypes.oneOf(["button","div", "a"])
  }

export default withTheme(DropdownItem);
