import React from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';

import ITnation from '../icons/Logo_IT_nation.svg';
import Diya from '../icons/Diya.svg';
import Gerb from '../../src/icons/gerb.svg';
import Ease from '../icons/ease.svg';
import Powercode from '../icons/powercode_client.svg';

const Partners = () => {
    return (
        <Container>
            <PartnersContainer>
                <Inscription>Наші партнери</Inscription>
                <Logos>
                    <a href='https://www.facebook.com/ITnation-20-102337935602457'><img src={ITnation} alt="" /></a>
                    <a href='https://diia.gov.ua/'><img src={Diya} alt="" /></a>
                    <a href='https://thedigital.gov.ua/'><img src={Gerb} alt="" /></a>
                    <a href='https://it-ease.com/ru/'><img src={Ease} alt="" /></a>
                    <a className='power' href='https://powercode.academy/uk/'><img src={Powercode} alt="" /></a>
                </Logos>
            </PartnersContainer>

        </Container>
    );
}

export default Partners;

const PartnersContainer = styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    margin-bottom: 15%;
    @media (max-width: 1080px) {
        margin-bottom: 50%;
    }
    @media (max-width: 797px) {
        margin-bottom: 60%;
    }
    @media (max-width: 690px) {
        margin-bottom: 70%;
    }
    @media (max-width: 620px) {
        margin-bottom: 80%;
    }
    @media (max-width: 560px) {
        margin-bottom: 90%;
    }
    @media (max-width: 475px) {
        margin-bottom: 100%;
    }
    @media (max-width: 440px) {
        margin-bottom: 120%;
    }
    @media (max-width: 385px) {
        margin-bottom: 150%;
    }
`;

const Inscription = styled.h2`
    text-align: center;
    font-family: 'Rubik';
    font-weight: 700;
    font-size: calc(24px + 142 * (100vw / 1760));
    line-height: 100%;

    letter-spacing: 3px;
    text-transform: uppercase;

    color: #F5F6F9; 
    @media (max-width: 1008px) {
        line-height: 100%;  
    }
    @media (max-width: 797px) {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #232F3C;
        padding-bottom: 25%;
    } 
`;

const Logos = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 58px;
    @media (max-width: 1080px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 970px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 2fr;
        grid-gap: 20px;
        & > a.power {
            grid-column-start: 1;
            grid-column-end:3;
        }
    }
    @media (max-width: 797px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        & > a.power {
            grid-column-start: 1;
            grid-column-end:1;
        }
    }
`;
