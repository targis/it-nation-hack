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

    height: 100%;
    width: 100%;
    padding: 30px 20px 20px;

    border-radius: 20px;
    border: ${({color}) => `1px solid ${color}` || '1px solid black'};
    overflow: hidden;
`;

const CardHeader = styled.div`
    flex: 1 1 auto;
`;

const Position = styled.h4`
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 56px;
    line-height: 118%;
    text-transform: uppercase;

    color: ${({color}) => color || 'black'};
`;

const Experience = styled.p`
    font-family: 'Rubik';
    font-weight: 400;
    font-size: 20px;
    line-height: 230%;

    text-transform: uppercase;

    color: #333333;
`;

const Text = styled.p`
    font-family: 'IBM Plex Mono';
    font-weight: 400;
    font-size: 22px;
    line-height: 132%;

    color: #333333;
`;

const Salary = styled.p`
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 46px;
    line-height: 120%;

    text-transform: uppercase;

    color: #232F3C;
`;

const Image = styled.img`
    position: absolute;
    top: 30px;
    left: 115px;
    z-index: -1;
`;
