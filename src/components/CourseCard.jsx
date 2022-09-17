import React from 'react';
import styled from 'styled-components';

const CourseCard = ({
    name,
    date,
    lessons,
    places,
    location
}) => {
    return (
        <CardWrapper>
            <CourseAbout>
                <CourseDetails>
                    <b>{`${date.toLocaleDateString()}`}</b> {`| ${lessons} уроків`}
                </CourseDetails>
                <CourseDetails>
                    {`Усього місць: ${places}`}
                </CourseDetails>
                <CourseDetails>
                    {location}
                </CourseDetails>
            </CourseAbout>
            <CourseName>
                {`{${name}}`}
            </CourseName>
        </CardWrapper>
    );
}

export default CourseCard;

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    max-height: 250px;
    padding: 16px;

    background: #232F3C;
    border-radius: 8px;

    cursor: pointer;
    
    & > * {
        color: #FFFFFF;
    }

    :hover {
        background: #55CBDC;
    }
`;

const CourseAbout = styled.div`
    flex: 1 1 auto;
    margin-bottom: auto;
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
    justify-self: flex-end;

    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: calc(26px + 10 * (100vw / 1760));;
    line-height: 128%;

    text-transform: uppercase;

    @media(max-width: 724px) {
        line-height: 138%;
    }
`;

