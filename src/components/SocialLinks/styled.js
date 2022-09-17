import styled from 'styled-components'

const Ul = styled.ul`
  display: flex;
  height: max-content;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-self: ${({ self }) => self || 'auto'};
  @media (max-width: 990px) {
    display: ${({ hiddenMd }) => (hiddenMd ? 'none' : 'flex')};
  }
`
const Li = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-right: 1.44em;
  & :last-child {
    margin-right: 0;
  }
`

export { Ul, Li }
