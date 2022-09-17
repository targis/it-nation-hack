import { Nav, Ul, Li, Button } from './styled'
import SocialLinks from '../SocialLinks'

const menuItems = [
  { id: 0, label: 'Про нас', tag: 'about' },
  { id: 1, label: 'Київ', tag: 'courses', location: 'Київ' },
  { id: 2, label: 'Запоріжжя', tag: 'courses', location: 'Запоріжжя' },
  { id: 3, label: 'On-line курси', tag: 'courses', location: 'online' },
  { id: 4, label: 'Безкоштовні уроки', tag: 'offer' },
  { id: 5, label: 'Вакансії', tag: 'jobs' }
]

const MenuBody = ({ isMenuOpen, toggleMenuState, scrollTo, setActiveLocation }) => {

  const handleClick = (tag, location) => {
    toggleMenuState(!isMenuOpen)
    if (tag === 'courses') {
      setActiveLocation(location)
    }
    scrollTo[tag]()
  }

  return (
    <Nav isMenuOpen={isMenuOpen}>
      <span></span>
      <Ul>
        {menuItems.map(({ id, label, tag, location }) => (
          <Li key={id}>
            <Button onClick={() => handleClick(tag, location)}>{label}</Button>
          </Li>
        ))}
      </Ul>
      <SocialLinks size={'25px'} visibleXs={true} self={'end'} mb={'2em'} />
    </Nav>


  )
}

export default MenuBody