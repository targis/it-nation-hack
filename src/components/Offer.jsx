import React from "react";
import styled from "styled-components";
import Container from "./ui/Container";
import OfferBgGreen from "../imgs/offer_bg_green.png"; 
import Button from "./ui/Button";
import OfferImg from "../imgs/laptop.png"


const Offer = () => {
    return (
        <Container>
            <OfferContainer>
                <OfferTextContainer>
                    <OfferTitle>
                          НЕ можеш обрати <b>свій курс?</b>
                    </OfferTitle>
                    <Offertext>
                        Наші фахівці допоможуть із вибором курсу, який підходить саме Вам! Залиште контакти та безкоштовно отримайте інформацію щодо курсу.
                    </Offertext>
                    <Button>ЗАПИСАТИСЯ</Button>
                </OfferTextContainer>
                <OfferImages
                        src={OfferImg}
                        alt = ""
                    />
            </OfferContainer>
        </Container>
    )
}

export default Offer;

const OfferContainer = styled.section`
    background-image: url(${OfferBgGreen});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;

    border-radius: 20px;
    padding: 30px 0 35px 50px ;
`;

const OfferTextContainer = styled.div`
    margin-right: 100px;
    width: 100%;
    max-width: 765px;
    
`;

const OfferTitle = styled.h2`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 1.3;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 10px;
`;

const Offertext = styled.p`
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 1.3;
    color: #FFFFFF;
    margin-bottom: 41px;
`;

const OfferImages = styled.img`
    width: 520px;
    height: 415px;
`;
