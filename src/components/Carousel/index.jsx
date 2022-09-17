import React, { useState, useEffect, useRef } from "react";
import Flex from "../ui/Flex";

import {
    Arrow,
    SlideBtn,
    SlideItem,
    Container,
    ContainerItem,
    CarouselTrack
} from "./styled";

function Carousel({children, width="335px", height="335px"}) {
    
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
        <div style={{margin: '0 0 50px'}}>
            <Container ref = {containerRef} width = {width} height = {height}>
                <SlideBtn onClick={prevSlide}>
                    <Arrow />
                </SlideBtn>
            
                <CarouselTrack transform={transform} >
                    {children.map((item, i) => (
                        <ContainerItem 
                            key={"container_item_key" + i}
                            width={width}
                            height={height}
                        >
                            {item}
                        </ContainerItem>
                    ))}
                </CarouselTrack>

                <SlideBtn rotate="true" onClick={nextSlide}>
                    <Arrow />
                </SlideBtn>
            </Container>
            <Flex width='335px' align='center' justify='center'>
                {children.map((item, i) => 
                    <SlideItem 
                        key={i} 
                        onClick={selectSlide(i)}
                        active={i === activeSlide}
                    />
                )}
            </Flex>
            
        </div>
    )
}

export default Carousel;