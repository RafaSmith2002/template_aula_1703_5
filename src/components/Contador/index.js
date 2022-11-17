import React, { useState } from "react";
import { ButtonContainer, ContadorWrapper } from "./style";

export function Contador() {
  const [count, setCount] = useState(0);

  return (
    <ContadorWrapper>
      <ButtonContainer onClick={() => setCount(count + 1)}>+</ButtonContainer>
      {count}
      
      <ButtonContainer onClick={() => setCount(count - 1)}>-</ButtonContainer>
    </ContadorWrapper>
  );
}
