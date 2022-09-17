import Container from '../ui/Container'
import Button from '../ui/Button'
import { HeroContent, Section, Col, Description, Header, ButtonSecondary } from './styled'
// import  HeroImageSrc  from '../../imgs/girl.png'
import HeroImage from './HeroImage'
import Flex from '../ui/Flex'
import MenuBody from '../MenuBody'

import PlayIcon from '../../icons/video.svg'

const Hero = ({ isMenuOpen }) => {
  return (
    <Section>
      <Container>
        <Flex direction={'row'} align={'center'}>
          <Col>
            <HeroContent isMenuOpen={isMenuOpen} >
              <Description>
                Курси від провідних IT спеціалістів
              </Description>
              <Header>
                Powercode Academy
              </Header>
              <Button>Записатися</Button>
              <ButtonSecondary bgimage={PlayIcon}>Дивитись відео</ButtonSecondary>
            </HeroContent>
            <MenuBody isMenuOpen={isMenuOpen} />
          </Col>
          <Col>
            <HeroImage isMenuOpen={isMenuOpen} />
            {/* <HeroImageSrc /> */}
            {/* <img src={HeroImageSrc} alt="Happy student" /> */}


          </Col>
        </Flex>
      </Container>
    </Section>
  )
}

export default Hero

