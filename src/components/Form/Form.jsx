import React from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Logo from '../../icons/logo.svg';
import Close from '../../icons/btn-close-modal.svg';
import Boy from '../../imgs/boy-modal.png'
        

const Form = () => {
    return (
        <Section>
            <SectionHead>
                <SectionHeadItemLeft><img src={Logo} alt="" /></SectionHeadItemLeft>
                <SectionHeadItemRight><a href="#" title="Close"><img src={Close} alt=""/></a></SectionHeadItemRight>
            </SectionHead>
            <SectionBody>
                <FormContainer>
                    <ContainItem>
                        <TitleForm>Залишити <b>ЗАЯВКУ</b>
                        </TitleForm>
                    </ContainItem>
                    <ContainItem>
                        <TitleTextModal>
                            Заповни форму і наш спеціаліст передзвонить тобі,щоб розповісти про деталі курсу і відповісти на питання, що тебе цікавлять.
                        </TitleTextModal>
                    </ContainItem>
                    <ContainItem>
                        <Input placeholder="Ім'я"/>
                    </ContainItem>
                    <ContainItem>    
                        <Input placeholder="E-mail"/>
                        <ContainItem>
                            <Input placeholder="Телефон"/>
                        </ContainItem>
                        <ContainItem>
                            <Button>
                                Відправити 
                            </Button>
                        </ContainItem>
                    </ContainItem>
                </FormContainer>
                <SectionImg>
                    <img src={Boy} alt="" />
                </SectionImg>
            </SectionBody>
        </Section>
    )
}

export default Form;


const ContainItem = styled.div`

`;

const Section = styled.div`
    position: relative;
`;
const SectionHead = styled.div`
    margin-top: 2%;
`;
const SectionHeadItemLeft = styled.div`
    position: absolute;
    top: 0;
    left: 2%;
`;
const SectionHeadItemRight = styled.div`
    position: absolute;
    top: 0;
    right: 2%;
`;
const SectionBody = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10%;
    @media (max-width: 1140px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 15%;
    }
    
`;
const SectionImg = styled.div`
    /* position: absolute;
    top: 30%;
    right: 5%; */
    & > img {
        max-width: 600px;
    }
    @media (max-width: 1140px) {
        img {
        filter: blur(50px);
        position: absolute;
        top: 25%;
        right: 50px;
    }
    }
`;

const FormContainer = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 480px;
    box-sizing: border-box;
    /* position: absolute;
    top: 30%;
    left: 5%; */
    z-index: 2;
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
        text-align: center;
    } 
    @media (max-width: 648px) {
        font-size: 30px;
        text-align: center;
    }
`;

const TitleTextModal = styled.p`
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #333333;
    text-align: center;
`;