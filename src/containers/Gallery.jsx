import React from 'react';
import styled from 'styled-components';

import Container from '../components/ui/Container';

import Img1 from '../imgs/gallery/1.jpg';
import Img2 from '../imgs/gallery/2.jpg';
import Img3 from '../imgs/gallery/3.jpg';
import Img4 from '../imgs/gallery/4.jpg';
import Img5 from '../imgs/gallery/5.jpg';
import Img6 from '../imgs/gallery/6.jpg';
import Img7 from '../imgs/gallery/7.jpg';
import Img8 from '../imgs/gallery/8.jpg';
import Img9 from '../imgs/gallery/9.jpg';
import Img10 from '../imgs/gallery/10.jpg';

const Gallery = () => {

    const photos = [
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        Img7,
        Img8,
        Img9,
        Img10,
    ]

    return (
        <Container>
            <GalleryContainer>
                {photos.map((photo, i) => (
                    <Photo 
                        key={i}
                        src={photo}
                        alt=''
                        area={`img${i + 1}`}
                    />
                ))}
            </GalleryContainer>
        </Container>
    );
}

export default Gallery;

const GalleryContainer = styled.section`
    width: 100%;
    margin-bottom: 180px;

    display: grid;
    grid-template-columns: repeat(6, minmax(auto, 210px));
    grid-template-rows: repeat(3, minmax(auto, 210px)); 

    grid-template-areas: 
        "img1 img1 img2 img3 img4 img4"
        "img1 img1 img5 img6 img6 img7"
        "img8 img9 img9 img6 img6 img10";

    grid-gap: 30px;

    box-sizing: border-box;
`;

const Photo = styled.img`
    height: 100%;
    width: 100%;
    aspect-ratio: 1;
    grid-area: ${({area}) => area || ''};   
`;