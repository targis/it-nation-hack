import React from "react";
import styled from "styled-components";
import Logo from '../../icons/logo.svg';
import Container from '../ui/Container';
import Close from '../../icons/btn-close-modal.svg';
import Time from '../../imgs/time-modal.png';
import Boy from '../../imgs/boy-modal 2.png';
import Button from "../ui/Button";

const Thankyoupage = () => {
    return (
     <Container>
          <SectionBand>
               <SectionHead>
                   <SectionHeadItemLeft><img src={Logo} alt="" /></SectionHeadItemLeft>
                   <SectionHeadItemRight><a href="#" title="Close"><img src={Close} alt=""/></a></SectionHeadItemRight>
               </SectionHead>
               <SectionBody>
                   <BodyLeft>
                        <img src={Time} alt="" />
                    </BodyLeft>
                    <BodyCenter>
                        <SectionText>Дякуємо за заявку!</SectionText>
                        <Aboutsection>Скоро з вами зв'яжеться наш менеджер, чекайте на дзвінок</Aboutsection>
                        <Button>Повернутися на головну</Button>
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
`;
const BodyCenter = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     text-align: center;
     width: 380px;
     z-index: 2;
     padding: 10px 5px;
     border-radius: 20px;
     backdrop-filter: blur(30px);
`;

const BodyLeft = styled.div`
     position: absolute;
     left: 1%;
     & > img {
        height: 260px;
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
