import styled from 'styled-components'

const Container = styled.div`
  position: ${({ position }) => (position ? position : 'relative')};
  width: 100%;
  min-width: 320px;
  height: 100%;
  max-width: 1410px;
  margin: 0 auto;
  padding: 0 32px;
  @media (max-width: 576px) {
    padding: 0 16px;
  }
`

export default Container
