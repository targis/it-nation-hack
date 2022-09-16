import React from 'react';
import styled from 'styled-components';

const CourseCard = ({
    name,
    date,
    lessons,
    places
}) => {
    return (
        <CardWrapper>
            <CourseDetails>
                <b>{`${date.toDateString()}`}</b> {`| ${lessons} уроків`}
            </CourseDetails>
            <CourseDetails>
                {`Усього місць: ${places}`}
            </CourseDetails>
            <CourseName>
                {`{${name}}`}
            </CourseName>
        </CardWrapper>
    );
}

export default CourseCard;

const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 330px;
    max-height: 250px;
    padding: 16px;

    display: flex;
    flex-direction: column;

    background: #232F3C;
    border-radius: 8px;
    
    & > * {
        color: #FFFFFF;
    }
`;

const CourseDetails = styled.p`
    margin-bottom: 11px;

    font-family: 'IBM Plex Mono';
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;

    & > b {
        font-weight: 700;
    }
`;

const CourseName = styled.p`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 128%;

    text-transform: uppercase;
`;

