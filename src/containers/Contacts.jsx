import React from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';
import Form from '../components/Form';

import Question from '../icons/form/question.svg';

const Contacts = () => {
    return (
        <Container>
            <FormContainer>
                <FormHeader>
                    <FormHeaderText>Залишилися <b>питання?</b></FormHeaderText>
                    <img src={Question} alt="" />
                </FormHeader>
                <FormText>Заповни форму і наш спеціаліст передзвонить тобі, щоб розповісти про деталі курсу і відповісти на питання, що тебе цікавлять.</FormText>
                <Form />
            </FormContainer>
        </Container>
    );
}

export default Contacts;

const FormContainer = styled.div`
    width: 509px;
    padding: 26px 36px;

    background: #232F3C;
    border-radius: 20px;  
`;

const FormHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 16px;
`;

const FormHeaderText = styled.h4`
    font-family: 'Rubik';
    font-weight: 300;
    font-size: 44px;
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
`;
