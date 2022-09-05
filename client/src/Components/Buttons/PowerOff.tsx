import styled from "styled-components";
import { ImVolumeMute2 } from "react-icons/im";

const PowerOffButton = styled.button`
  padding: 0.75em 0.9em;
  outline: none;
  background: radial-gradient(#f8b6b6, #922c2c);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1em;
  margin: 0.5em;
  transition: all 0.2s;
  &:hover {
    border-radius: 50px;
    cursor: pointer;
  }
`;

function PowerOff({ onClick }: { onClick: () => void }) {
  return (
    <PowerOffButton onClick={onClick}>
      <ImVolumeMute2 />
    </PowerOffButton>
  );
}

export default PowerOff;
