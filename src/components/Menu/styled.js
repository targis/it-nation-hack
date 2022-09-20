import styled from 'styled-components'

const MenuSC = styled.div``

const MenuIconWrapper = styled.div`
  display: flex;
  padding: 13px 11px;
  align-items: center;
  /* border: 1px solid #173c5c; */
  border: ${({ theme }) => `1px solid ${theme.colors.text}` };
  border-radius: 9px;
  line-height: 1.218;
`

const MenuIcon = styled.button`
  display: block;
  position: relative;
  width: 18px;
  height: 14px;
  /* padding: 10px; */
  border: none;
  background: none;
  cursor: pointer;
  /* z-index: 1; */
  & > span,
  &::before,
  &::after {
    content: '';
    right: 0;
    position: absolute;
    width: 100%;
    height: 2px;
    /* background-color: #173c5c; */
    background-color: ${({ theme }) => theme.colors.text };

    transition: all 0.3s ease 0s;
  }
  & > span {
    top: calc(50% - 1px);
    width: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '100%')};
  }
  &::before {
    top: 0;
    top: ${({ isMenuOpen }) => (isMenuOpen ? 'calc(50% - 1px)' : '0')};
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg)' : 'none')};
  }
  &::after {
    bottom: 0;
    bottom: ${({ isMenuOpen }) => (isMenuOpen ? 'calc(50% - 1px)' : '0')};
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg)' : 'none')};
  }
`

export { MenuSC, MenuIcon, MenuIconWrapper }
