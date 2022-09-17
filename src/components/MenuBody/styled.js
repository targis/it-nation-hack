import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;
  text-align: left;
  position: absolute;
  top: 50%;
  left: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')};
  transform: translateY(-50%);
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '100' : '0')};
  transition: all 0.25s ease;
  z-index: 10;
  @media (max-width: 991px) {
    justify-content: space-between;
  }
  @media (max-width: 567px) {
    padding-left: 16px;
  }
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`
const Li = styled.li`
  padding: 18px 0;
`

const Button = styled.button`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #232f3c;
  transition: all 0.25s ease;
  background: none;
  border: none;
  text-align: left;
  &:hover {
    color: #ef5b63;
    padding-left: 1em;
    @media (max-width: 576px) {
      padding-left: 0;
    }
  }
  @media (max-width: 576px) {
    font-size: 9vw;
    line-height: 1.18em;
  }
`

export { Nav, Ul, Li, Button }
