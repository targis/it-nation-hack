import styled from 'styled-components'

import Button from '../ui/Button'
import Flex from '../ui/Flex'

const Section = styled.section`
  padding: 40px 0;
  min-height: calc(100vh - 95px);
  display: flex;
  align-items: center;
`

const Col = styled.div`
  width: calc(50% - 32px);
  & + & {
    margin-left: 32px;
    @media (max-width: 991px) {
      margin-left: 0;
      order: -1;
      max-width: 500px;
    }
    @media (max-width: 576px) {
      position: absolute;
      z-index: -1;
      filter: blur(27px);
      opacity: 30;
      transition: all 0.25s ease;
    }
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`

const Description = styled.p`
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  font-size: 26px;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 0.69em;
  @media (max-width: 576px) {
    font-size: 18px;
  }
`

const Header = styled.h1`
  margin-bottom: 0.5em;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 1.2em;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--font-color);
  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 991px) {
    font-size: 60px;
  }
  @media (max-width: 576px) {
    font-size: 38px;
    margin-bottom: 45px;
  }
`

const ButtonSecondary = styled(Button)`
  position: relative;
  display: inline-block;
  margin-left: 0.625em;
  /* padding: 0.6em 64px 1.25em 0.6em; */
  padding-right: 58px;
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
  /* @media (max-width: 991px) {
    display: block;
    margin-top: 1.5em;
    margin-left: 0;
  } */
  @media (max-width: 576px) {
    display: flex;
    margin: 0 auto;
    margin-top: 1.75em;
    padding-top: 45px;
    padding-right: 21px;
    &::after {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const FlexMd = styled(Flex)`
  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 576px) {
    justify-content: center;
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
  @media (max-width: 991px) {
    filter: ${({ isMenuOpen }) => (isMenuOpen ? 'blur(27px)' : 'none')};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '30' : '100')};
    transition: all 0.25s ease;
  }

  svg {
    max-width: 100%;
    height: auto;
  }
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
  FlexMd,
}
