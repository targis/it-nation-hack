import { Header, Link } from './styled'
import Container from '../ui/Container'
import Logo from '../../icons/logo.svg'
import SocialLinks from '../SocialLinks'
import Flex from '../ui/Flex'

const Navbar = () => {
  return (
    <Header>
      <Container>
        <Flex direction="row" align="center" justify='space-between'>
          <Link href='#'>
            <img src={Logo} alt="Logo" />
          </Link>
          <SocialLinks self='center' />
          <div>
            меню
          </div>
        </Flex>

      </Container>
    </Header>
  )
}

export default Navbar



