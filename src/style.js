import styled from "styled-components";

export const ButtonSection = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10%;
  width: 100px;
  background-color:${(props) => (props.clicado ? "#4682B4" : "#FF1493")};
  color: ${(props) => (props.clicado ? "white" : "black")};
  cursor: pointer;
`;
export const WrapperButton = styled.div`
display: flex;
gap: 30%;
`;