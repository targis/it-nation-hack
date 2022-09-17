import React from 'react';
import styled from 'styled-components';

const JobCard = ({
    position,
    img,
    experience,
    time,
    salary,
    color
}) => {
    return (
        <CardWrapper color={color}>
            <Image 
                src={img}
                alt=''
            />
            <CardHeader>
                <Position color={color}>{position}</Position>
                <Experience>від <b>{experience}</b> {time} досвіду</Experience>
            </CardHeader>
            <Text>дохід від</Text>
            <Salary>{`$${salary}`}</Salary>
            <Text>в місяць</Text>
        </CardWrapper>
    );
}

export default JobCard;

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;

    height: 100%;
    width: 100%;
    padding: 30px 20px 20px;

    border-radius: 20px;
    border: ${({color}) => `1px solid ${color}` || '1px solid black'};
    overflow: hidden;

    @media (max-width: 1024px) {
        padding: 25px 20px 20px;
    }

    @media (max-width: 768px) {
        padding: 20px 20px 20px;
    }

    @media (max-width: 360px) {
        padding: 15px 20px 20px;
    }
`;

const CardHeader = styled.div`
    flex: 1 1 auto;
`;

const Experience = styled.p`
    font-family: 'Rubik';
    font-weight: 400;
    font-size: 20px;
    line-height: 230%;

    text-transform: uppercase;

    color: #333333;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 360px) {
        font-size: 16px;
    }
`;

const Position = styled.h4`
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 56px;
    line-height: 118%;
    text-transform: uppercase;

    color: ${({color}) => color || 'black'};

    @media (max-width: 1024px) {
        font-size: 52px;
    }

    @media (max-width: 768px) {
        font-size: 49px;
    }

    @media (max-width: 360px) {
        font-size: 46px;
    }
`;

const Text = styled.p`
    font-family: 'IBM Plex Mono';
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: #333333;

    @media (max-width: 1024px) {
        font-size: 18px;
    }
`;

const Salary = styled.p`
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 46px;
    line-height: 120%;

    text-transform: uppercase;

    color: #232F3C;

    @media (max-width: 1024px) {
        font-size: 42px;
    }

    @media (max-width: 768px) {
        font-size: 39px;
    }

    @media (max-width: 360px) {
        font-size: 36px;
    }
`;

const Image = styled.img`
    position: absolute;
    top: 30px;
    right: 0;
    transform: translateX(30%);
    z-index: 2;

    @media (max-width: 1024px) {
        top: 20px;
        padding: 25px 20px 20px;
    }

    @media (max-width: 768px) {
        top: 10px;
        padding: 20px 20px 20px;
    }

    @media (max-width: 360px) {
        top: 0;
        padding: 15px 20px 20px;
    }
`;
