import { MenuIcon, MenuIconWrapper } from './styled'


const Menu = ({ isMenuOpen, toggleMenuState }) => {


  return (
    <MenuIconWrapper>
      <MenuIcon type="button" isMenuOpen={isMenuOpen} onClick={toggleMenuState} >
        <span></span>
      </MenuIcon>
    </MenuIconWrapper>
  )
}

export default Menu