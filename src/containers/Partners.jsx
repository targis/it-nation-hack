import React from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';

import ITnation from '../icons/Logo_IT_nation.svg';
import Diya from '../icons/Diya.svg';
import Gerb from '../../src/icons/gerb.svg';
import Ease from '../icons/ease.svg';
import Powercode from '../icons/powercode_client.svg';
import PartnersBg from '../imgs/partners.svg'

const Partners = () => {
    return (
        <Container>
            <PartnersContainer bg={PartnersBg}>
                <Inscription>Наші партнери</Inscription>
                <Logos>
                    <A href='https://www.facebook.com/ITnation-20-102337935602457' target="_blank"><img src={ITnation} alt="" /></A>
                    <A href='https://diia.gov.ua/' target="_blank"><img src={Diya} alt="" /></A>
                    <A href='https://thedigital.gov.ua/' target="_blank"><img src={Gerb} alt="" /></A>
                    <A href='https://it-ease.com/ru/' target="_blank"><img src={Ease} alt="" /></A>
                    <A className='power' href='https://powercode.academy/uk/' target="_blank"><img src={Powercode} alt="" /></A>
                </Logos>
            </PartnersContainer>

        </Container>
    );
}

export default Partners;

const PartnersContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    min-height: 90px;
    padding: 5em 0;
    background-image: url(${({ bg }) => bg ? bg : 'none'});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 90%;
    /* &::before {
        content: 'Наші партнери';
        position: absolute;
        top: 50%;
        left: 32px;
        font-family: 'Rubik';
        font-weight: 700;
        font-size: 7.6vw;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #F5F6F9;
        z-index: -1;
        transform: translateY(-50%);
    } */
    @media (max-width: 991px) {
       display: block;
       background-image: none;
    }

`;

const Inscription = styled.h2`
        content: 'Наші партнери';
        position: absolute;
        top: 50%;
        left: 32px;
        font-family: 'Rubik';
        font-weight: 700;
        font-size: 7.6vw;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #F5F6F9;
        z-index: -1;
        transform: translateY(-50%);
        display: none;
        @media (max-width: 991px) {
            position: static;
            font-family: 'Rubik';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            text-align: center;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #232F3C;
            padding-bottom: 2em;
            transform: none;
            display: block;
    }
    /* @media (max-width: 1008px) {
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
    }  */
`;

const Logos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    /* transform: translate(-50%, -50%); */
    /* height: 58px; */
    /* @media (max-width: 1080px) {
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
    } */
`;


const A = styled.a`
    display: inline-block;
    margin-left: 40px;
    max-width: 100%;
    @media (max-width: 991px) {
        margin-bottom: 2em;
        margin-left: 2em;
        margin-right: 2em;
        }
        img {
            max-width: 100%;
        }
    &:first-child {
        margin-left: 0;
        @media (max-width: 576px) {
        width: 100%;
        text-align: center;
        }
    }
`