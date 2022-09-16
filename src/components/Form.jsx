import React from "react";
import styled from "styled-components";
import Input from "./ui/Input";
import Button from "./ui/Button";
        

const Form = () => {
    return (
        <FormContainer>
            <TitleForm>
                Залишити <b>ЗАЯВКУ</b>
            </TitleForm>
            <TitleTextModal>
                Заповни форму і наш спеціаліст передзвонить тобі, <br/> щоб розповісти про деталі курсу і відповісти на <br/> питання, що тебе цікавлять.
            </TitleTextModal>
            <Input
        placeholder="Ім'я"
      />
      <Input
        placeholder="E-mail"
      />
      <Input
        placeholder="Телефон"
            />
            <Button>
                Відправити 
            </Button>
        </FormContainer>
    )
}

export default Form;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 480px;
    box-sizing: border-box;
    
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
    } 
`;

const TitleTextModal = styled.p`
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #333333;
`;