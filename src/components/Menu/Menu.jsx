import { MenuIcon, MenuIconWrapper } from './styled'
import { useState } from 'react'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <MenuIconWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <MenuIcon type="button" isMenuOpen={isMenuOpen} >
        <span></span>
      </MenuIcon>
    </MenuIconWrapper>
  )
}

export default Menu