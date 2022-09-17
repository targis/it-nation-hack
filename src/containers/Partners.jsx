import React from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';

import ITnation from '../icons/Logo_IT_nation.svg';
import Diia from '../icons/diia.svg';
import Ease from '../icons/ease.svg';
import Powercode from '../icons/powercode_client.svg';

const Partners = () => {
    return (
        <Container>
            <PartnersContainer>
                <Inscription>Наші партнери</Inscription>
                <Logos>
                    <a href='https://www.instagram.com/it_nation_2.0/'><img src={ITnation} alt="" /></a>
                    <a href='https://thedigital.gov.ua/'><img src={Diia} alt="" /></a>
                    <a href='https://it-ease.com/ru/'><img src={Ease} alt="" /></a>
                    <a href='https://powercode.academy/uk/'><img src={Powercode} alt="" /></a>
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
    margin-bottom: 105px;
`;

const Inscription = styled.h2`
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 146px;
    line-height: 60%;

    letter-spacing: 3px;
    text-transform: uppercase;

    color: #F5F6F9;  
`;

const Logos = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 58px;
`;
