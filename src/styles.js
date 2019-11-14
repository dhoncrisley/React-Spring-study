import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.body`
  flex: 1;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Card = styled(animated.div)`
  overflow: hidden;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #9f9f9f;
`;
export const Button = styled(animated.a)`
  overflow: hidden;
  margin: 5px;
  border-radius: 5px;
  color: #2f2f2f;
  padding: 10px 20px;
  background-color: #abcdef;
`;
export const Text = styled.h4`
  padding: 10px;
  font-size: 12pt;
  color: #2f2f2f;
`;
export const ProgressBar = styled(animated.div)`
  margin: 0;
  background-color: #faa;
  height: 5px;
`;
