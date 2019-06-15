import React, {useState} from "react";
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

const Box = styled.div`
  background: ${props => (props.active ? "black" : "white")};
`;

const Grid = ({number}) => {
  const [token, updateState] = useState(true);

  const update = i => {
    let state = JSON.parse(localStorage.getItem(number) || "[]");

    if (state.includes(i)) {
      state = state.filter(x => x !== i);
    } else {
      state.push(i);
    }

    localStorage.setItem(number, JSON.stringify(state));

    updateState(!token);
  };

  const isActive = i => {
    let state = JSON.parse(localStorage.getItem(number) || "[]");

    return state.includes(i);
  };

  return (
    <Container>
      <p>Keyframe Number: {number}</p>
      <GridContainer>
        {Array(64)
          .fill(0)
          .map((_, i) => {
            return (
              <Box
                active={isActive(i)}
                onClick={() => update(i)}
                key={`grid_${i}`}
              />
            );
          })}
      </GridContainer>
    </Container>
  );
};

export default Grid;
