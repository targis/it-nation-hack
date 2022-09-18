import React from "react";
import styled from "styled-components";
import Container from '../ui/Container';
import Time from '../../imgs/time-modal.png';
import Boy from '../../imgs/boy-modal 2.png';
import Button from "../ui/Button";

const Thankyoupage = ({ handleModalClose }) => {
     return (
          <Container>
               <SectionBand>
                    <SectionBody>
                         <BodyLeft>
                              <img src={Time} alt="" />
                         </BodyLeft>
                         <BodyCenter>
                              <SectionText>Дякуємо за заявку!</SectionText>
                              <Aboutsection>Скоро з вами зв'яжеться наш менеджер, чекайте на дзвінок</Aboutsection>
                              <ButtonSC onClick={handleModalClose}>Повернутися на головну</ButtonSC>
                         </BodyCenter>
                         <BodyRight>
                              <img src={Boy} alt="" />
                         </BodyRight>
                    </SectionBody>
               </SectionBand>
          </Container>
     )
}

export default Thankyoupage;

const BodyRight = styled.div`
     position: absolute;
     right: 10px;
     & > img {
        height: 260px;
    }
    @media (max-width: 1200px) {
          display: none;
     }
`;
const BodyCenter = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     text-align: center;
     max-width: 380px;
     z-index: 2;
     padding: 10px 5px;
     border-radius: 20px;
     /* backdrop-filter: blur(30px); */
     @media (max-width: 1200px) {
          width: 100%;
          height: 100%;
     }
`;

const BodyLeft = styled.div`
     position: absolute;
     left: 1%;
     & > img {
        height: 260px;
    }
    @media (max-width: 1200px) {
     filter: blur(30px);
          left: 50%;
          transform: translateX(-50%);
     }
`;

const SectionBody = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     margin-top: 10%;
     position: relative;
`;

const SectionHead = styled.div`
     position: relative;
     margin-top: 2%;
`;

const Aboutsection = styled.p`
     font-family: 'IBM Plex Mono';
     font-style: normal;
     font-weight: 400;
     font-size: 1em;
     color: #333333;
     margin-top: 10%;
     margin-bottom: 10%;
`;
const SectionText = styled.h1`
     font-family: 'Rubik';
     font-style: normal;
     font-weight: 700;
     font-size: 3em;
     line-height: 100%;
     text-align: center;
     letter-spacing: 1px;
     text-transform: uppercase;
     color: #232F3C; 
     @media (max-width: 576px) {
          font-size: 2.5em
      }
`;
const SectionHeadItemLeft = styled.div`

`;
const SectionHeadItemRight = styled.div`
     position: absolute;
     top: 0;
     right: 2%;
`;
const SectionBand = styled.div`
     padding: 0;
     margin: 0;
     width: 100%;
`;


const ButtonSC = styled(Button)`
     @media (max-width: 576px) {
     font-size: 14px;
     }

`