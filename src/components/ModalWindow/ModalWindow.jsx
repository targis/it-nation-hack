import React, { useState } from "react";
import { ModalBackground, ModalContent } from "./styled";
import styled from "styled-components";
import Container from '../ui/Container'
import Logo from '../../icons/logo.svg';
import Close from '../../icons/btn-close-modal.svg';
import Boy from '../../imgs/boy-modal.png'
import Thankyoupage from '../Thankyoupage'
import ContactForm from '../ContactForm'

const ModalWindow = ({ active, setActive, children, isModalForm, isFormSubmitted, setIsFormSubmitted }) => {



  const handleModalClose = () => {
    setActive(false)
    if (setIsFormSubmitted) {
      setIsFormSubmitted(false)
    }
  }

  return (
    <ModalBackground active={active}
      pointer={active ? '1' : "none"}
      onClick={handleModalClose}>
      <ModalContent
        transform={active ? "scale(1)" : "scale(0.5)"}
        onClick={(e => e.stopPropagation())}
      >

        <Section>

          <SectionHead>
            <SectionHeadItemLeft>
              <img src={Logo} alt="" />
            </SectionHeadItemLeft>
            <SectionHeadItemRight>
              <ButtonClose onClick={handleModalClose}>
                <img src={Close} alt="Close" />
              </ButtonClose>
            </SectionHeadItemRight>
          </SectionHead>
          <SectionBody>

            {isFormSubmitted && (<Thankyoupage handleModalClose={handleModalClose} />)}

            {isModalForm && !isFormSubmitted ? (
              <>
                <ContactForm light={true} setIsFormSubmitted={setIsFormSubmitted} />
                <SectionImg>
                  <img src={Boy} alt="" />
                </SectionImg>
              </>
            ) : (
              children
            )}











          </SectionBody>
        </Section>

      </ModalContent>
    </ModalBackground>
  )
}

export default ModalWindow;


const ButtonClose = styled.button`
  background: none;
  border: none;
`


const ContainItem = styled.div`

`;

const Section = styled(Container)`
    position: relative;
    /* width: 100vw;
    height: 100vh; */
`;
const SectionHead = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;
const SectionHeadItemLeft = styled.div`
    @media (max-width: 576px) {
      width: 50px;
      overflow: hidden;
    }
`;
const SectionHeadItemRight = styled.div`
    /* position: absolute;
    top: 0;
    right: 2%; */
`;
const SectionBody = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2em;
    align-items: center;
    /* padding-bottom: 2em; */
    height: 100%;
    @media (max-width: 1140px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2em;
    }
    
`;
const SectionImg = styled.div`
    /* position: absolute;
    top: 30%;
    right: 5%; */
    & > img {
        max-width: 600px;
    }
    @media (max-width: 1140px) {
        img {
        filter: blur(50px);
        position: absolute;
        top: 25%;
        right: 50px;
        z-index: -1;
        opacity: 30;
    }
    }
`;

const FormContainer = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 480px;
    box-sizing: border-box;
    /* position: absolute;
    top: 30%;
    left: 5%; */
    z-index: 2;
`;

const TitleForm = styled.h3`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 42px;
    line-height: 1.3;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #333333;
    white-space: nowrap;

    & > b {
        font-weight: 700;
        text-align: center;
    } 
    @media (max-width: 648px) {
        font-size: 30px;
        text-align: center;
    }
`;

const TitleTextModal = styled.p`
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #333333;
    text-align: center;
`;