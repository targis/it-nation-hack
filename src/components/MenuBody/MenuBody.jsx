import { Nav, Ul, Li, Link } from './styled'
import SocialLinks from '../SocialLinks'

const menuItems = [
  { id: 0, label: 'Про нас', to: '#', type: 'scroll' },
  { id: 1, label: 'Київ', to: '#', type: 'contol' },
  { id: 2, label: 'Запоріжжя', to: '#', type: 'contol' },
  { id: 3, label: 'On-line курси', to: '#', type: 'contol' },
  { id: 4, label: 'Безкоштовні уроки', to: '#', type: 'scroll' },
  { id: 5, label: 'Вакансії', to: '#', type: 'scroll' }
]

const MenuBody = ({ isMenuOpen, onChangeTab }) => {

  return (
    <Nav isMenuOpen={isMenuOpen}>
      <span></span>
      <Ul>
        {menuItems.map(({ id, label, type, to }) => (
          <Li key={id}>
            {type === 'control' ? (
              <Link href={to} onClick={() => onChangeTab()}>{label}</Link>
            ) : (
              <Link href={to}>{label}</Link>
            )}
          </Li>
        ))}
      </Ul>
      <SocialLinks size={'25px'} visibleXs={true} self={'end'} mb={'2em'} />
    </Nav>


  )
}

export default MenuBody