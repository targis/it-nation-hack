import styled from "styled-components";

export const SlideBtn = styled.button`
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    z-index: 100;

    position: absolute;
    top: 50%;
    transform: translateY(-50%)
    
    ${({ rotate }) => (rotate ? "rotate(180deg);" : null)};
    ${({ rotate }) => (rotate ? "right: 13px;" : "left: 13px;")};
`;

export const Arrow = styled.div`
    width: 9px;
    height: 9px;
    border-style: solid;
    border-width: 0 0 2px 2px;
    border-color: white;
    transform: rotate(45deg);
`;

export const SlideItem = styled.div`
    height: 12px;
    width: 12px;
    margin-right: 10px;

    border-radius: 12px;
    background-color: ${({ active }) => active ? '#EF5B63' : '#39444F'};

    cursor: pointer;

    & > * {
        width: 100%;
        height: 100%;
    }

    :focus {
        background-color: red;
    }
`;

export const Container = styled.div`
    /* display: */
    position: relative;
    /* background-color: white; */
    border: none;
    overflow-x: hidden;
    margin-bottom: 26px;
    max-height: 360px;
    max-width: 360px;
    aspect-ratio: 1;


    width: ${({ width }) => (width ? width : "auto")};
    height: ${({ height }) => (height ? height : "auto")};
`;

export const ContainerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};

    max-height: 360px;
    max-width: 360px;
`;

export const CarouselTrack = styled.div`
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    max-height: 360px;
    width: max-content;
    transition: 0.2s linear transform;

    ${({ transform }) =>
        transform
            ? `transform: translateX(${transform});`
            : `transform: translateX(0);`
    }
`;