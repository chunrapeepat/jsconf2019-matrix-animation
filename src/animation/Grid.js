import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${84 * 8}px;
  margin: 30px auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  & > div {
    width: 80px;
    height: 80px;

    cursor: pointer;

    border: 2px solid black;
  }
`;

const Grid = ({number}) => {
  return (
    <Container>
      <p>Keyframe Number: {number}</p>
      <GridContainer>
        {Array(64)
          .fill(0)
          .map((_, i) => {
            return <div key={`grid_${i}`} />;
          })}
      </GridContainer>
    </Container>
  );
};

export default Grid;
