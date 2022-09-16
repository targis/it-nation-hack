import SocialLinks from '../SocialLinks'
import Menu from '../Menu'
import Container from '../ui/Container'
import Flex from '../ui/Flex'
import { Header, Link, TelLink } from './styled'
import Logo from '../../icons/logo.svg'

const Navbar = () => {
  return (
    <Header>
      <Container>
        <Flex width='100%' direction="row" align="center" justify='space-between'>
          <Link href='#'>
            <img src={Logo} alt="Logo" />
          </Link>
          <SocialLinks self='center' />
          <Flex align="center" >
            <Flex direction='column'>
              <TelLink href="tel:+38 (073) 126 00 72">+38 (073) 126 00 72</TelLink>
              <TelLink href="tel:+38 (099) 705 14 18">+38 (099) 705 14 18</TelLink>
            </Flex>
            <Menu />
          </Flex>

        </Flex>

      </Container>
    </Header>
  )
}

export default Navbar



