import styled from 'styled-components'

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-self: ${({ self }) => self || 'auto'};
`
const Li = styled.li`
  margin: 0;
  padding: 0;
`

export { Ul, Li }
