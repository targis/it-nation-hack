import styled from 'styled-components'

const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: ${({ align }) => (align ? align : 'auto')};
  justify-content: ${({ justify }) => (justify ? justify : 'auto')};
`
export default Flex
