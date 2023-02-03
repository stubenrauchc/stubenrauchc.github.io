import React, { useState } from 'react';
import StyledInput from "./StyledInput";
import Button from "./Button";
import useInput from "./useInput";
import ProgressBar from 'react-bootstrap/ProgressBar';

let progressInterval = null;

function clickMe() {
  alert("You clicked me!");
}

function App() {
 
  const inputRows = useInput();
  const inputRowLength = useInput();
  let rows = inputRows.value;
  let rowLength = inputRowLength.value;
  let stitchCount = inputRowLength.value * inputRows.value;

  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const incrementCounter10 = () => setCounter(counter + 10);
  const incrementCounter20 = () => setCounter(counter + 20);
  const incrementCounter50 = () => setCounter(counter + 50);
  const incrementCounter100 = () => setCounter(counter + 100);
  const incrementCounter200 = () => setCounter(counter + 200);

  const incrementCounterRow = () => setCounter(counter + (inputRowLength.value * 1));
  
  return (
    <div className="App">
      <h2>Row Counter</h2>
      <StyledInput {...inputRows} placeholder="Rows" />
      <StyledInput {...inputRowLength} placeholder="Row Length" />
      <br />
      <Button onClick={incrementCounter}>+1</Button>
      <Button onClick={incrementCounter10}>+10</Button>
      <Button onClick={incrementCounter20}>+20</Button>
      <Button onClick={incrementCounter50}>+50</Button>
      <Button onClick={incrementCounter100}>+100</Button>
      <Button onClick={incrementCounter200}>+200</Button>
      <br />
      <Button onClick={incrementCounterRow}>Add Row</Button>
      <br />
      <p>{counter} / {stitchCount}</p>
      <ProgressBar
        now={(counter / stitchCount) * 100}
        label={`${Math.round((counter / stitchCount) * 100)}%`}
      />

    </div>
  );
}

export default App;
