import styled from 'styled-components'

const Ul = styled.ul`
  display: flex;
  /* height: 100%; */
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-self: ${({ self }) => self || 'auto'};
  display: ${({ visibleXs }) => (visibleXs ? 'none' : null)};
  margin-bottom: ${({ mb }) => (mb ? mb : null)};
  @media (max-width: 990px) {
    display: ${({ hiddenMd }) => (hiddenMd ? 'none' : 'flex')};
  }
  @media (max-width: 576px) {
    display: ${({ visibleXs }) => (visibleXs ? 'flex' : 'none')};
  }
`
const Li = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-right: 1.44em;
  img {
    width: ${({ size }) => (size ? size : '100%')};
    height: auto;
  }
  & :last-child {
    margin-right: 0;
  }
`

export { Ul, Li }
