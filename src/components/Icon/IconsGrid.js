import styled from "styled-components";
import IconGridItem from "./IconGridItem";
import IconGridLabel from "./IconGridLabel";

const IconsGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fill,minmax(150px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill,minmax(100px, 1fr));
  }
`;

export { IconsGrid, IconGridItem, IconGridLabel }; 

