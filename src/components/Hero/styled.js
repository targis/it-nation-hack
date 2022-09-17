import styled from 'styled-components'

import Button from '../ui/Button'

const Section = styled.section`
  padding: 40px 0;
  height: calc(100vh - 95px);
  min-height: 600px;
`

const Col = styled.div`
  /* position: relative; */
`

const Description = styled.p`
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  font-size: 26px;
  line-height: 48px;
  color: #333333;
  margin-bottom: 0.27em;
`

const Header = styled.h1`
  margin-bottom: 0.5em;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--font-color);
`

const ButtonSecondary = styled(Button)`
  position: relative;
  display: inline-block;
  margin-left: 0.625em;
  /* padding: 0.6em 64px 1.25em 0.6em; */
  padding-right: 64px;
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #333333;
  background: none;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 2.44em;
    height: 2.44em;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: ${({ bgimage }) =>
      bgimage ? `url('${bgimage}')` : 'none'};
    transform: translateY(-50%);
  }
`

const HeroImage = styled.div`
  & img {
    max-width: 100%;
  }
`

const HeroContent = styled.div`
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '100')};
  transition: opacity 0.25s ease;
`

const HeroImageSC = styled.div`
  .bg path {
    fill: ${({ isMenuOpen }) => (isMenuOpen ? '#4FCC97' : '#55CBDC')};
    transition: all 0.25s ease;
  }
`

export {
  HeroContent,
  HeroImage,
  Section,
  Col,
  Description,
  Header,
  ButtonSecondary,
  HeroImageSC,
}
