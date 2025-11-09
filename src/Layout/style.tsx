import styled from "styled-components";

export const Footer = styled.footer`
    margin-top: 25vh;
    font-size: 2vh;

    @media (max-width: 1024px) {
        margin-top: 28vh;
    }

    @media (max-width: 768px) {
        margin-top: 24vh;
        font-size: 2vh;
    }

    @media (max-width: 540px) {
        margin-top: 15vh;
        font-size: 1.8vh;
    }

    @media (max-width: 430px) {
        margin-top: 22vh;
        font-size: 1.5vh;
    }

    @media (max-width: 380px) {
        margin-top: 20vh;
        font-size: 1.5vh;
    }
`

export const TextFooter = styled.p`
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #146770;
`