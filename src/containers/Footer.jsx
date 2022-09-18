import React from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';
import Arrow from '../icons/arrow.svg';

const Footer = () => {

    const ScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <Container>
            <FooterContainer>
                <Text>
                    © Powered by POWERCODE
                </Text>
                <Button onClick={ScrollTop}>
                    <img src={Arrow} alt="" />
                </Button>
            </FooterContainer>
        </Container>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100px;
    width: 100%;
    padding: 0 46px;

    background: #F5F6F9;
    border-radius: 20px;
    margin-top: 15%;
    @media (max-width: 747px) {
        margin-top: 20%;
    }
    @media (max-width: 505px) {
        margin-top: 25%;
    }
    @media (max-width: 350px) {
        margin-top: 35%;
    }
`;

const Text = styled.span`
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;

    color: #232F3C;
    @media (max-width: 450px) {
        font-size: 16px;
    }
    @media (max-width: 400px) {
        font-size: 14px;
    }
    @media (max-width: 365px) {
        font-size: 10px;
    }
`;

const Button = styled.button`
    height: 48px;
    width: 48px;
    background-color: #FFFFFF;
    border-radius: 50%;
   
`;
