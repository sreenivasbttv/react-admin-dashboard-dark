import styled, { withTheme } from 'styled-components';
import { sectionBackgroundColor } from '../../theme';

const Card = styled.div`
  padding: 20px 25px;
  background-color: ${sectionBackgroundColor};
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
  margin-bottom: 20px;
`;

export default withTheme(Card);
