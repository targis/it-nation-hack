import React, { forwardRef } from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';
import Form from '../components/Form';
import Button from '../components/ui/Button';
import SocialLinks from '../components/SocialLinks';

import Pointer from '../icons/contacts/pointer.svg';
import Call from '../icons/contacts/call.svg';
import Email from '../icons/contacts/email.svg';
import Question from '../icons/form/question.svg';

const Contacts = forwardRef((props, ref) => {
    return (

        <Container ref={ref}>
            <ContactsWrapper>

                <FormContainer>
                    <FormHeader>
                        <FormHeaderText>Залишилися <b>питання?</b></FormHeaderText>
                        <FormHeaderIcon src={Question} alt="" />
                    </FormHeader>
                    <FormText>Заповни форму і наш спеціаліст передзвонить тобі, щоб розповісти про деталі курсу і відповісти на питання, що тебе цікавлять.</FormText>
                    <Form />
                </FormContainer>

                <ContactsContainer>
                    <ButtonsArea>
                        <Button
                            height='40px'
                            width='120px'
                            margin='0 10px 0 0'
                            padding='0'
                            size='14px'
                            lheight='114%'
                        >
                            Київ
                        </Button>
                        <Button
                            height='40px'
                            width='120px'
                            margin='0 10px 0 0'
                            padding='0'
                            size='14px'
                            lheight='114%'
                            bgcolor='none'
                            border='1px solid #FFFFFF'
                        >
                            Запоріжжя
                        </Button>
                    </ButtonsArea>

                    <ContactInformation>
                        <ContactList>
                            <ContactItem>
                                <img src={Pointer} alt="" />
                                м.Київ, вул. Верхній Вал, 24
                            </ContactItem>
                            <ContactItem>
                                <img src={Call} alt="" />
                                +38 (073) 126 00 72
                            </ContactItem>
                            <ContactItem>
                                <img src={Email} alt="" />
                                powercodeacademy@gmail.com
                            </ContactItem>
                        </ContactList>

                    </ContactInformation>

                    <SocialLinks />
                </ContactsContainer>


            </ContactsWrapper>
        </Container>


    );
})

export default Contacts;

const ContactsWrapper = styled.section`
    position: relative;
    /* height: 495px; */
    width: 100%;
    /* padding: 45px; */
    margin-bottom: 70px;
    background-color: yellowgreen;
    border-radius: 20px;

    @media (max-width: 1170px) {
        height: auto;
    }
`;

const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 495px;
    width: 100%;
    padding: 45px;
    /* max-width: 450px;   */
    background: #232F3C;
    border-radius: 20px;

    @media (max-width: 1170px) {
        /* height: 296px; */
        padding: 26px 20px;
    }
`;

const ButtonsArea = styled.div`
    display: flex;
    margin-bottom: 46px;

    @media (max-width: 1170px) {
        justify-content: center;
        margin-bottom: 36px;
    }
`;

const ContactInformation = styled.address`
    /* height: 100%; */
    flex: 1 1 auto;
    @media (max-width: 1170px) {
        flex: 0 1 auto;
    }
`;
const ContactList = styled.ul`
    
`
const ContactItem = styled.li`
    display: flex;
    align-items: center;

    margin-bottom: 18px;

    list-style-type: none;

    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 178%;
    text-decoration: none;

    color: #FFFFFF;

    & > img {
        margin-right: 16px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;

const FormContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-32px, -50%);

    width: 509px;
    padding: 26px 36px;

    background: #232F3C;
    border-radius: 20px;
    
    @media (max-width: 1170px) {
        width: 100%;
        position: static;
        transform: none;
        margin-bottom: 30px;
    }

    @media (max-width: 768px) {
        padding: 25px 20px 30px;
    }
`;

const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 16px;
`;

const FormHeaderIcon = styled.img`
    
    @media (max-width: 450px) {
        width: 56px;
        height: 56px;
    }
`

const FormHeaderText = styled.h4`
    font-family: 'Rubik';
    font-weight: 300;
    font-size: calc(24px + 20 * (100vw / 1760));
    line-height: 132%;

    letter-spacing: 4px;
    text-transform: uppercase;

    color: #FFFFFF;    

    & > b {
        font-weight: 700;
    }
`;

const FormText = styled.p`
    margin-bottom: 26px;

    font-family: 'IBM Plex Mono';
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;

    color: #FFFFFF; 
    overflow: hidden;
    text-overflow: ellipsis;
`;
