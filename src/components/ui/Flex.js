import styled from 'styled-components'

const Flex = styled.div`
  height: 100%;
  display: flex;
  width: ${({ width }) => (width ? width : 'auto')};
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  align-items: ${({ align }) => (align ? align : 'auto')};
  justify-content: ${({ justify }) => (justify ? justify : 'auto')};
`
export default Flex
