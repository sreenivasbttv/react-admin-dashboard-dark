import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { sectionBackgroundColor, backgroundColor } from '../../theme';
import DropdownItem from '../Dropdown2/DropdownItem';

  const DropdownMenu = styled.div`
    display: none;
    position: absolute;
    min-width: 150px;
    background-color: ${sectionBackgroundColor};
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    padding: 10px 0;
    ${DropdownItem} {
      padding: 5px;
      border-bottom: 1px solid ${backgroundColor};

      &:last-child {
        border-bottom: 0;
      }
    }
  `;

  DropdownMenu.propTypes = {
    as: PropTypes.oneOf(["div"])
  }

export default withTheme(DropdownMenu);
