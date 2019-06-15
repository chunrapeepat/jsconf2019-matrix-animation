import React, {useState} from "react";
import styled from "styled-components";

import Grid from "./Grid";
import {HandleChange} from "./hooks";

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
  const [speed, handleSpeedInput] = HandleChange(100);

  function _convertToAxis(index) {
    return {x: index % 8, y: Math.floor(index / 8)};
  }

  async function _handleSubmit() {
    const keyframes = [];

    for (let i = 0; i < counter; ++i) {
      keyframes[i] = JSON.parse(localStorage.getItem(i)).map(_convertToAxis);
    }

    const body = JSON.stringify({speed, keyframes});

    const response = await fetch("http://10.10.1.172:3000/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    console.log(response, body);
  }

  return (
    <>
      <Panel>
        <p>Total number of keyframes is {counter}</p>

        <p>
          Define millisecond per frames<br></br>
          <input onChange={handleSpeedInput} value={speed} />
        </p>

        <p>
          <button onClick={_handleSubmit}>Deploy!</button>
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
