import React from "react";
import styled from "styled-components";
import Container from "./ui/Container";
import ImgAbout from "../imgs/girl_student.png";    
import ImgAboutBg from "../imgs/fone_girl_student.png"    

const About = () => {
    return (
        <Container>
            <AboutContainer>
                <AboutTextContainer>
                    <AboutSection>POWERCODE ACADEMY</AboutSection>
                        <AboutSectionParagraph> - це курси від провідних фахівців IT галузі. <br />
                                                    Ми навчаємо у Запоріжжі, Києві та Online. 
                        </AboutSectionParagraph>
                    <AboutSectionText>Наша місія – надавати високоякісну IT освіту, адаптовану до <br /> сучасних вимог роботодавців. <br />
                        Наші основні напрямки: Front end, Python, UI/UX design, PM, <br /> QA и др. Розшир свої кар’єрні можливості разом з нами!
                    </AboutSectionText>
                </AboutTextContainer>
                <AboutImgContainer>
                    <AboutSectionImg
                        src={ImgAbout}
                        alt = ""
                    />
                </AboutImgContainer>
            </AboutContainer>
        </Container>
    )
}

export default About;

const AboutContainer = styled.section`
    display: flex;
`;

const AboutTextContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    margin-right: 35px;
    width: 100%;
    ::before{
        content:"";
        background-color: #55CBDC;
        border-radius: 36px;
        height: 172px;
        width: 10px;
        position: absolute;
        
}
`;


const AboutSection = styled.h2`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 1.1;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #232F3C;
    display: flex;
    margin-bottom: 16px;
`;

const AboutSectionParagraph = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.7;
    letter-spacing: 1px;
    color: #232F3C;
    margin-bottom: 26px;
`;

const AboutSectionText = styled.span`
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.7;
    color: #333333;
`;

const AboutImgContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 508px;
    width: 538px;
    background-image: url(${ImgAboutBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;

const AboutSectionImg = styled.img`
    width: 398px;
    height: 567px;
`;