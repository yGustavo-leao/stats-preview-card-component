import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-areas:
    "img"
    "content"
    ;
    max-width: 390px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #1c1a38;

    @media (min-width: 1000px) {
        grid-template-areas:
        "content img"
        ;
        grid-template-columns: 50% 50%;
        max-width: 1200px;
    }
`

export const BannerContainer = styled.div`
    grid-area: img;
    display: flex;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #aa5cdb;
        filter: brightness(50%) contrast(170%);
        opacity: .5;
        pointer-events: none;
    }
`

export const BannerImg = styled.img`
    width: 100%;
    object-fit: cover;
`

export const ContentContainer = styled.div`
    grid-area: content;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    text-align: center;

    @media (min-width: 1000px) {
        text-align: start;
        max-width: 550px;
        align-self: center;
        margin-left: 1rem;
    }
`

export const Title = styled.h1`
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: white;
    letter-spacing: 1px;

    @media (min-width: 1000px) {
        font-size: 2.5rem;
    }
`

export const Span = styled.span`
    color: #aa5cdb;
`

export const TextContent = styled.p`
    color: #ffffffbf;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    line-height: 2rem;
    letter-spacing: 1px;

    @media (min-width: 1000px) {
        font-size: 1.2rem;
    }
`

export const StatisticContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const StatisticItem = styled.div`
    @media (min-width: 1000px) {
        margin-top: 1rem;
    }
`

export const StatisticValue = styled.span`
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: white;
    font-size: 2rem;
    font-weight: bold;
`

export const StatisticName = styled.h2`
    color: #ffffff99;
    font-family: "Lexend Deca", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
`