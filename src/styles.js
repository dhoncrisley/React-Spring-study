import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.body`
  width: 100%;
  user-select: none;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Card = styled(animated.div)`
  overflow: hidden;
  transform-origin: 50% 50%;
  margin: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 150px;
  height: 80px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #9f9f9f;
`;
export const Ball = styled(animated.div)`
  overflow: hidden;
  width: 100px;
  height: 100px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  user-select: none;
  border-radius: 80px;
  color: #2f2f2f;
  padding: 10px 10px;
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
