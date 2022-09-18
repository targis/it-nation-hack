import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Flex from "../ui/Flex";

import {
    Arrow,
    SlideBtn,
    SlideItem,
    Container,
    ContainerItem,
    CarouselTrack
} from "./styled";

function Carousel({children, width="100%", height="100%"}) {
    
    const [activeSlide, setActiveSlide] = useState(0);
    const [transform, setTransform] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const transVal = containerRef.current.offsetWidth * activeSlide;
        setTransform(`-${transVal}px`);
    }, [activeSlide]);

    const nextSlide = () => {
        if(activeSlide < children.length - 1) {
            setActiveSlide(activeSlide => activeSlide + 1);
        }
    };

    const prevSlide = () => {
        if(activeSlide > 0) {
            setActiveSlide(activeSlide - 1);
        }
    };
    
    const selectSlide = (i) => () => {
        setActiveSlide(i);
    }

    return (
        <Wrapper>
            <Container ref = {containerRef} width = {width} height = {height}>
                <SlideBtn onClick={prevSlide}>
                    <Arrow />
                </SlideBtn>
            
                <CarouselTrack transform={transform} >
                    {children.map((item, i) => (
                        <ContainerItem 
                            key={"container_item_key" + i}
                            // width={width}
                            // height={height}
                        >
                            {item}
                        </ContainerItem>
                    ))}
                </CarouselTrack>

                <SlideBtn rotate="true" onClick={nextSlide}>
                    <Arrow />
                </SlideBtn>
            </Container>
            <Flex align='center' justify='center'>
                {children.map((item, i) => 
                    <SlideItem 
                        key={i} 
                        onClick={selectSlide(i)}
                        active={i === activeSlide}
                    />
                )}
            </Flex>
            
        </Wrapper>
    )
}

export default Carousel;

const Wrapper = styled.div`
    display: none;
    margin-bottom: 36px;

    @media (max-width: 380px) {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
`