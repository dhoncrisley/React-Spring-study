import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, config } from "react-spring";
import { useGesture } from "react-with-gesture";
import { Container, Card, Text, ProgressBar, Ball } from "./styles.js";

function App() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(100);
  const [isOver, setIsOver] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [bind, { delta, down, xy }] = useGesture();
  const cardRef = useRef();
  const props = useSpring({
    //config: config.default,
    boxShadow: `0px ${!down ? "2px  2px" : "5px 10px"} #ccc`,
    perspective: 400,
    transform: `scale(${isOver ? 0.75 : 1}) translate3d(${
      down ? delta[0] + offset.x : offset.x
    }px,${down ? delta[1] + offset.y : offset.y}px,${down ? 100 : 0}px)`
  });
  const cardProps = useSpring({
    //config: config.default,
    //boxShadow: `0px ${!down ? "2px  2px" : "5px 10px"} #ccc`,
    transform: ` scale(${isOver ? 1.2 : 1})`
  });

  const progressStyle = useSpring({
    config: config.wobbly,
    width: `${progress}%`
  });

  useEffect(() => {
    if (isItOver()) setIsOver(true);
    else setIsOver(false);
    if (!down) {
      console.log("out down", { delta, xy });
      setOffset({ x: offset.x + delta[0], y: offset.y + delta[1] });
      if (isItOver()) {
        console.log("do the thing :D");
      }
    }
  }, [xy, down]);
  function isItOver() {
    const { x, y, height, width } = cardRef.current.getBoundingClientRect();
    return (
      xy[0] >= x && xy[0] <= x + width && xy[1] >= y && xy[1] <= y + height
    );
  }
  return (
    <Container>
      <Card style={cardProps} key="abcdef" ref={cardRef}>
        <Text>{isOver ? "" : down ? "Over me" : "Progress modal"}</Text>
        {/* <ProgressBar style={progressStyle} /> */}
      </Card>

      <Ball
        {...bind()}
        style={props}
        onClick={() => setProgress(progress == 100 ? 0 : progress + 10)}
      >
        <Text>{down ? "Drop" : "Drag me"}</Text>
      </Ball>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
