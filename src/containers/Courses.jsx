import React, { forwardRef } from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';
import CourseCard from '../components/CourseCard';

import Button from '../components/ui/Button';

const Courses = forwardRef(({ activeLocation, setActiveLocation }, ref) => {

    // const [activeLocation, setActiveLocation] = useState(null);
    const isActiveLocation = (loc) => loc === activeLocation

    const courses = [
        { id: 1, name: 'front-end', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'online' },
        { id: 2, name: 'it project manager', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'Київ' },
        { id: 3, name: 'ux/ui web design', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'Запоріжжя' },
        { id: 4, name: 'front-end advanced', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'online' },
        { id: 5, name: 'front-end', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'Київ' },
        { id: 6, name: 'it project manager', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'Запоріжжя' },
        { id: 7, name: 'ux/ui web design', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'online' },
        { id: 8, name: 'front-end advanced', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'Київ' },
        { id: 9, name: 'front-end', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'Запоріжжя' },
        { id: 10, name: 'it project manager', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'online' },
        { id: 11, name: 'ux/ui web design', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'Київ' },
        { id: 12, name: 'front-end advanced', date: new Date(2019, 1, 31), lessons: 12, places: 18, location: 'Запоріжжя' },
    ]

    const locations = Array.from(new Set(courses.map(course => course.location)));

    return (
        <Wrapper ref={ref}>
            <Container>
                <CoursesTitle>Наші курси</CoursesTitle>
                <CoursesHeader>
                    <HeaderText><b>On-line</b> навчання</HeaderText>
                    <ButtonsArea>
                        {locations.map((location, i) => (
                            <CourseButton
                                key={location}
                                onClick={() => setActiveLocation(location)}
                                isActiveLocation={isActiveLocation(location)}
                            >
                                {location}
                            </CourseButton>
                        ))}
                    </ButtonsArea>
                </CoursesHeader>
                <CardsContainer>
                    {!activeLocation
                        ? courses.map(course => (
                            <CourseCard
                                key={course.id}
                                name={course?.name}
                                date={course?.date}
                                lessons={course?.lessons}
                                places={course?.places}
                                location={course?.location}
                            />
                        ))
                        : courses.filter(course => course.location === activeLocation).map(course => (
                            <CourseCard
                                key={course.id}
                                name={course?.name}
                                date={course?.date}
                                lessons={course?.lessons}
                                places={course?.places}
                                location={course?.location}
                            />
                        ))
                    }
                </CardsContainer>
            </Container>
        </Wrapper>
    );
})

export default Courses;

const Wrapper = styled.section`

`;

const CoursesTitle = styled.h3`
    margin-bottom: 16px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: calc(24px + 40 * (100vw / 1410));
    line-height: 138%;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #232F3C;
    @media (max-width: 740px) {
        text-align: center;
    }    
`;

const CourseButton = styled(Button)`
    height: 40px;
    width: 120px;
    margin: 0 10px 0 0;
    padding: 0;
    font-size: 14px;
    color: #333333;
    background: ${({ isActiveLocation }) => isActiveLocation ? '#EF5B63' : 'none'};
    color: ${({ isActiveLocation }) => isActiveLocation ? '#FFFFFF' : 'inherit'}; 
    border: ${({ isActiveLocation }) => isActiveLocation ? 'none' : '1px solid #333333'};
`;

const CardsContainer = styled.div`
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 250px;
    grid-gap: 30px;

    margin-bottom: 120px;

    @media(max-width: 1474px) {
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 75px;
    }

    @media(max-width: 1114px) {
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 50px;
        grid-gap: 20px;
    }
    
    @media(max-width: 754px) {
        grid-template-columns: repeat(1, minmax(300px, 1fr));
        grid-auto-rows: 180px;
        grid-gap: 10px;
        margin-bottom: 20px;
    }
`;

const CoursesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 36px;

    @media (max-width: 740px) {
        flex-direction: column-reverse;
        margin-bottom: 30px;
    }
`;

const HeaderText = styled.span`
    margin-right: 16px;

    font-family: 'Rubik';
    font-weight: 500;
    font-size: calc(18px + 6 * (100vw / 1410));
    line-height: 185%;

    letter-spacing: 2px;
    text-transform: uppercase;

    color: #333333;

    & > b {
        font-weight: 500;
        color: #4FCC97;
    }
`;

const ButtonsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(calc(33.3% - 52px), 120px));
    grid-column-gap: 10px;

    :last-child {
        margin-right: 0;
    }

    @media (max-width: 740px) {
        margin-bottom: 30px;
    }
`;
