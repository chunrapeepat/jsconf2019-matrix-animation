import React, {useState} from "react";
import styled from "styled-components";

import Grid from "./Grid";

const Panel = styled.div`
  position: fixed;
  color: white;
  background: black;

  top: 0;
  left: 0;

  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  margin: 30px 0;

  & div:nth-child(1) {
    color: blue;
    margin-right: 20px;
  }

  & div:nth-child(2) {
    color: red;
  }
`;

const AnimationCreator = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Panel>
        <p>Total number of keyframes is {counter}</p>

        <p>
          Define millisecond per frames<br></br>
          <input></input>
        </p>

        <p>
          <button>Deploy!</button>
        </p>
      </Panel>

      {Array(counter)
        .fill(0)
        .map((_, i) => {
          return <Grid key={i} number={i} />;
        })}

      <ButtonContainer>
        <div onClick={() => setCounter(counter + 1)}>+ Add Keyframe</div>
        <div onClick={() => setCounter(counter - 1)}>
          - Remove Lastest Keyframe
        </div>
      </ButtonContainer>
    </>
  );
};

export default AnimationCreator;
