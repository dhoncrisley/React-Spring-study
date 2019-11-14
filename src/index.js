import React, { useState, KeyboardEventHandler } from "react";
import ReactDOM from "react-dom";
import { useSpring, config } from "react-spring";
import { useGesture } from "react-with-gesture";
import { Container, Card, Text, ProgressBar, Button } from "./styles.js";

function App() {
  const [toggle, setToggle] = useState(false);
  const [key, setPressedKey] = useState("");
  const [progress, setProgress] = useState(100);
  const [bind, { delta, down }] = useGesture();
  const props = useSpring({
    config: config.wobbly,
    boxShadow: `0px ${down ? "1px  2.5px" : "2px 5px"} #ccc`,
    transform: `scale(${down ? 0.98 : 1})`
  });
  const progressStyle = useSpring({
    config: config.wobbly,
    width: `${progress}%`
  });
  document.addEventListener("keypress", ev => {
    setPressedKey(ev.key);
    console.log(ev);
  });
  return (
    <Container>
      <Card>
        <Text>Some Text Here!</Text>
        <ProgressBar style={progressStyle} />
      </Card>

      <Button
        {...bind()}
        style={props}
        onClick={() => setProgress(progress == 100 ? 0 : progress + 10)}
      >
        + 10%
      </Button>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
