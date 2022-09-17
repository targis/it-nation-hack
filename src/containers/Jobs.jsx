import React, { forwardRef } from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';
import JobCard from '../components/JobCard';

import Junior from '../imgs/junior.png';
import Middle from '../imgs/middle.png';
import Senior from '../imgs/senior.png';

const Salary = forwardRef((props, ref) => {

    const jobs = [
        { id: 1, position: 'Junior', img: Junior, experience: 6, time: 'місяців', salary: 400, color: '#4FCC97' },
        { id: 2, position: 'Middle', img: Middle, experience: 2, time: 'років', salary: 1100, color: '#55CBDC' },
        { id: 3, position: 'Senior', img: Senior, experience: 4, time: 'років', salary: 2400, color: '#EF5B63' }
    ]

    return (
        <Container ref={ref}>
            <JobTitle>Зарплати IT фахівців</JobTitle>
            <JobContainer>
                {jobs.map(job => (
                    <JobCard
                        key={job.id}
                        position={job?.position}
                        img={job?.img}
                        experience={job?.experience}
                        time={job?.time}
                        salary={job?.salary}
                        color={job?.color}
                    />
                ))}
            </JobContainer>
        </Container>
    );
})

export default Salary;

const JobTitle = styled.h3`
    margin-bottom: 26px;

    font-family: 'Rubik';
    font-weight: 700;
    font-size: calc(24px + 40 * (100vw / 1760));
    line-height: 138%;

    letter-spacing: 4px;
    text-transform: uppercase;

    color: #232F3C;

    @media (max-width: 720px) {
        text-align: center;
    }
`;

const JobContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 450px));
    grid-template-rows: 420px;  
    grid-gap: 30px;

    margin-bottom: 120px;

    @media (max-width: 1024px) {
        /* grid-template-rows: 370px;   */
        justify-content: center;
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: 270px;
        grid-auto-rows: 270px;
        margin-bottom: 90px;
    }

    @media (max-width: 768px) {
        margin-bottom: 60px;
    }

    @media (max-width: 360px) {
        margin-bottom: 30px;
    }

    /* @media (max-width: 768px) {
        justify-content: center;
        grid-template-columns: repeat(1, minmax(auto, 450px));
        grid-template-rows: 270px;   
    } */

`;