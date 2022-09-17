import React from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';
import Arrow from '../icons/arrow.svg';

const Footer = ({ scrollTo }) => {
    return (
        <Container>
            <FooterContainer>
                <Text>
                    © Powered by POWERCODE
                </Text>
                <Button omClick={scrollTo.top}>
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
`;

const Text = styled.span`
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;

    color: #232F3C;
`;

const Button = styled.button`
    height: 48px;
    width: 48px;

    background-color: #FFFFFF;
    border-radius: 50%;
`;
