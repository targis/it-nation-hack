import React, { forwardRef } from "react";
import styled from "styled-components";
import Container from "./ui/Container";
import OfferBgGreen from "../imgs/offer_bg_green.png";
import Button from "./ui/Button";
import OfferImg from "../imgs/laptop.png"



const Offer = forwardRef((props, ref) => {

    return (
        <Container ref={ref}>
            <OfferContainer>
                <OfferTextContainer>
                    <OfferTitle>
                        Не можеш обрати <b>свій курс?</b>
                    </OfferTitle>
                    <OfferText>
                        Наші фахівці допоможуть із вибором курсу, який підходить саме Вам! Залиште контакти та безкоштовно отримайте інформацію щодо курсу.
                    </OfferText>
                    <Button
                        padding='21px 46px'
                        size='18px'
                    >
                            запитати
                    </Button>
                </OfferTextContainer>

                <OfferImageContainer>
                    <OfferImages
                            src={OfferImg}
                            alt = ""
                    />
                </OfferImageContainer>
            </OfferContainer>
        </Container>
    )
})

export default Offer;

const OfferContainer = styled.div`
    display: flex;

    background-image: url(${OfferBgGreen});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    border-radius: 20px;
    padding: 30px 0 35px 50px;
    margin-bottom: 120px;

    @media (max-width: 1024px) {
        margin-bottom: 90px;
        background: #4FCC97;
        padding: 25px 39px 35px ;
    }

    @media (max-width: 768px) {
        margin-bottom: 60px;
        padding: 20px 28px 30px ;
    }

    @media (max-width: 320px) {
        margin-bottom: 30px;
        padding: 16px 16px 30px ;
    }
`;

const OfferTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-right: 100px;
    width: 100%;

    @media (max-width: 1024px) {
        margin-right: 0;
    }

    @media (max-width: 768px) {
        align-items: center;
    }
`;

const OfferTitle = styled.h2`
    font-family: 'Rubik';
    font-weight: 300;
    font-size: calc(24px + 40 * (100vw / 1760));
    line-height: 1.3;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

const OfferText = styled.p`
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: calc(18px + 8 * (100vw / 1760));
    line-height: 1.3;
    color: #FFFFFF;
    margin-bottom: 41px;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

const OfferImageContainer = styled.div`
    width: 100%;
    max-width: 520px;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const OfferImages = styled.img`
    width: 100%;
    height: 100%;

    object-fit: contain;
`;
