import styled from "styled-components";

const Spinner = ({ size, color }) => {
  return (
    <SpinnerSC />
  )
}

export default Spinner


const SpinnerSC = styled.span`
  display: inline-block;
  width: ${({ size }) => size ? size : '20px'};
  height: ${({ size }) => size ? size : '20px'};
  &::after {
  content: " ";
  display: block;
  width: ${({ size }) => size ? size : '20px'};
  height: ${({ size }) => size ? size : '20px'};
  margin: 2px;
  border-radius: 50%;
  border: 3px solid ${({ color }) => color ? color : '#fff'};
  border-color: ${({ color }) => color ? color : '#fff'} transparent ${({ color }) => color ? color : '#fff'} transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`