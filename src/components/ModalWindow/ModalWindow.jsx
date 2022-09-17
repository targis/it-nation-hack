import React from "react";
import { ModalBackground, ModalContent } from "./styled";

const ModalWindow = ({ active, setActive, children }) => {
  return (
    <ModalBackground opacity={active ? 1 : 0}
      pointer={active ? '1' : "none"}
      onClick={() => setActive(false)}>
      <ModalContent
        transform={active ? "scale(1)" : "scale(0.5)"}
        onClick={(e => e.stopPropagation())}>
        {children}
      </ModalContent>
    </ModalBackground>
  )
}

export default ModalWindow;