import styled, { withTheme } from 'styled-components';
import { backgroundColor } from '../../theme';

const Divider = styled.div`
  height:2px;
  background-color: ${backgroundColor};
`;

export default withTheme(Divider);
