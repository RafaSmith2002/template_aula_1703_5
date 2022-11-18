import styled from "styled-components";

export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  input {
    border: 1px solid black;
    padding: 2%;
    border-radius: 20px;
  }
  button{
    border: none;
    padding: 2%;
    border-radius: 20px;
    background-color: #0000CD;
    color: #FFFF00;
    width: 80px;
    cursor: pointer;
  }
`;