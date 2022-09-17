import { Nav, Ul, Li, Button } from './styled'
import SocialLinks from '../SocialLinks'

const menuItems = [
  { id: 0, label: 'Про нас', tag: 'about' },
  { id: 1, label: 'Київ', tag: 'courses' },
  { id: 2, label: 'Запоріжжя', tag: 'courses' },
  { id: 3, label: 'On-line курси', tag: 'courses' },
  { id: 4, label: 'Безкоштовні уроки', tag: 'offer' },
  { id: 5, label: 'Вакансії', tag: 'jobs' }
]

const MenuBody = ({ isMenuOpen, toggleMenuState, onChangeTab, scrollTo }) => {

  const handleClick = (tag, label) => {
    toggleMenuState(!isMenuOpen)
    if (tag === 'courses') {
      onChangeTab(label)
    }
    scrollTo[tag]()
  }

  return (
    <Nav isMenuOpen={isMenuOpen}>
      <span></span>
      <Ul>
        {menuItems.map(({ id, label, tag }) => (
          <Li key={id}>
            <Button onClick={() => handleClick(tag, label)}>{label}</Button>
          </Li>
        ))}
      </Ul>
      <SocialLinks size={'25px'} visibleXs={true} self={'end'} mb={'2em'} />
    </Nav>


  )
}

export default MenuBody