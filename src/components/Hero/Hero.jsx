import Container from '../ui/Container'
import Button from '../ui/Button'
import { FlexMd, HeroContent, Section, Col, Description, Header, ButtonSecondary } from './styled'
// import  HeroImageSrc  from '../../imgs/girl.png'
import HeroImage from './HeroImage'
import MenuBody from '../MenuBody'

import PlayIcon from '../../icons/video.svg'

const Hero = ({ isMenuOpen }) => {
  return (
    <Section>
      <Container>
        <FlexMd direction={'row'} align={'center'}>
          <Col>
            <HeroContent isMenuOpen={isMenuOpen} >
              <Description>
                Курси від провідних IT спеціалістів
              </Description>
              <Header>
                Powercode Academy
              </Header>
              <Button display={'inline-block'}>Записатися</Button>
              <ButtonSecondary bgimage={PlayIcon}>Дивитись відео</ButtonSecondary>
            </HeroContent>
            <MenuBody isMenuOpen={isMenuOpen} />
          </Col>
          <Col>
            <HeroImage isMenuOpen={isMenuOpen} />
            {/* <HeroImageSrc /> */}
            {/* <img src={HeroImageSrc} alt="Happy student" /> */}


          </Col>
        </FlexMd>
      </Container>
    </Section>
  )
}

export default Hero

