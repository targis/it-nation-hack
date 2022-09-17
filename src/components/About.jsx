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
                    <AboutSectionText>Наша місія – надавати високоякісну IT освіту, адаптовану до сучасних вимог роботодавців. <br />
                        Наші основні напрямки: Front end, Python, UI/UX design, PM, QA и др. Розшир свої кар’єрні можливості разом з нами!
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
    margin-bottom: 120px;

    @media (max-width: 1024px) {
        margin-bottom: 100px;
    }

    @media (max-width: 768px) {
        margin-bottom: 80px;
    }

    @media (max-width: 360px) {
        margin-bottom: 60px;
    }
`;

const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 16px;
    padding-left: 36px;
    width: 100%;


`;

const AboutSection = styled.h2`
    position: relative;
    font-family: 'Rubik';
    font-weight: 700;
    font-size: calc(24px + 40 * (100vw / 1760));;
    line-height: 1.1;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #232F3C;
    display: flex;
    margin-bottom: 16px;

    ::before {
        content:"";
        background-color: #55CBDC;
        border-radius: 36px;
        height: 172px;
        width: 10px;
        top: 0;
        left: -36px;
        position: absolute;    
    }
`;

const AboutSectionParagraph = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: calc(18px + 6 * (100vw / 1760));;
    line-height: 1.7;
    letter-spacing: 1px;
    color: #232F3C;
    margin-bottom: 26px;
    white-space: nowrap;
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
    width: 100%;
    max-width: 540px;
    background-image: url(${ImgAboutBg});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const AboutSectionImg = styled.img`
    width: 398px;
    height: 567px;
    object-fit: cover;
`;