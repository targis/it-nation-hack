import React from "react";
import styled from "styled-components";        

const About = () => {
    return (
        <>
            <AboutSection>POWERCODE ACADEMY</AboutSection>
            <AboutSectionParagraph> - це курси від провідних фахівців IT галузі. <br />
            Ми навчаємо у Запоріжжі, Києві та Online. 
            </AboutSectionParagraph>
            <AboutSectionText>Наша місія – надавати високоякісну IT освіту, адаптовану до <br /> сучасних вимог роботодавців. <br />
Наші основні напрямки: Front end, Python, UI/UX design, PM, <br /> QA и др. Розшир свої кар’єрні можливості разом з нами!</AboutSectionText>
        </>
    )
}

export default About;

const AboutSection = styled.h2`
font-family: 'Rubik';
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 1.1;
letter-spacing: 4px;
text-transform: uppercase;
color: #232F3C;
`;

const AboutSectionParagraph = styled.p`
font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 1.7;
letter-spacing: 1px;
color: #232F3C;
`;

const AboutSectionText = styled.span`
font-family: 'IBM Plex Mono';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 1.7;
color: #333333;
`;