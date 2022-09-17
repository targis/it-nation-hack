import styled from 'styled-components'

const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;

  display: ${({ display }) => (display ? display : 'flex')};
  opacity: ${({ opacity }) => (opacity ? opacity : 0)};
  pointer-events: ${({ pointer }) => (pointer ? pointer : 'none')};
`

const ModalContent = styled.div`
  max-width: 100%;
  border-radius: 12px;
  /* background-color: white; */
  background-color: ${({ isVideo }) => (isVideo ? 'transparent' : '#fff')};
  transition: all 0.25s ease;
  position: relative;
  z-index: 9999;

  transform: ${({ transform }) => (transform ? transform : 'scale(0.5)')};
  display: ${({ display }) => (display ? display : 'flex')};
  height: ${({ height }) => (height ? height : 'auto')};
  width: ${({ width }) => (width ? width : 'auto')};
  gap: ${({ gap }) => (gap ? gap : '0px')};
  padding: ${({ padding }) => (padding ? padding : '30px')};
  margin: ${({ margin }) => (margin ? margin : '0px')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : 'no wrap')};
  @media (max-width: 576px) {
    padding: 16px;
  }
`

export { ModalBackground, ModalContent }
