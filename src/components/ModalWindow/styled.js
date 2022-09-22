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

  display: ${({ active }) => (active ? 'flex' : 'none')};
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ pointer }) => (pointer ? pointer : 'none')};
`

const ModalContent = styled.div`
  /* border-radius: 12px; */
  /* background-color: white; */
  background-color: ${({ isVideo }) => (isVideo ? 'transparent' : '#fff')};
  /* background-color: ${({ theme }) => theme.colors.text}; */
  transition: all 0.25s ease;
  position: relative;
  overflow: auto;
  min-height: 100%;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  align-items: center;

  transform: ${({ transform }) => (transform ? transform : 'scale(0.5)')};
  display: ${({ display }) => (display ? display : 'flex')};
  height: ${({ height }) => (height ? height : '100%')};
  width: ${({ width }) => (width ? width : '100vw')};
  gap: ${({ gap }) => (gap ? gap : '0px')};
  padding: ${({ padding }) => (padding ? padding : '30px')};
  margin: ${({ margin }) => (margin ? margin : '0px')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : 'no wrap')};
  @media (max-width: 576px) {
    padding: 16px 0;
    max-width: 100%;
    max-height: 100%;
  }
`

export { ModalBackground, ModalContent }
