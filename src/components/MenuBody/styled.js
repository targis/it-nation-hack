import styled from 'styled-components'

const Nav = styled.nav`
  text-align: left;
  position: absolute;
  top: 50%;
  left: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')};
  transform: translateY(-50%);
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '100' : '0')};
  transition: all 0.25s ease;
  z-index: 10;
`

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  @media (max-width: 540px) {
    margin-left: 16px;
  }
`
const Li = styled.li`
  padding: 18px 0;
`

const Link = styled.a`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #232f3c;
  transition: all 0.25s ease;
  &:hover {
    color: #ef5b63;
    padding-left: 1em;
  }
`
export { Nav, Ul, Li, Link }
