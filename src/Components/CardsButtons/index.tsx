import type { ReactNode } from "react";
import styled from "styled-components"

export const CardBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.5vh;
`

interface ButtonProps {
    text: string;
    link: string;
    icon?: ReactNode;
}

const StyledButton = styled.a`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px 20px;
    width: 30vw;
    height: 5vh;
    border-radius: 8px;
    text-decoration: none;
    transition: 0.3s;
    cursor: pointer;
    font-size: 2.3vh;
    gap: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    background-color: #e84f03;
    color: white;
    &:hover {
    background-color: #b43c00;
    transform: scale(1.05);
  }

    @media (max-width: 1280px) {
    width: 50vw;
    }

    @media (max-width: 768px) {
      width: 70vw;
    }
`

export default function Button({ text, link, icon }: ButtonProps) {
  return (
    <StyledButton href={link} rel="noopener noreferrer">
        {icon}
        {text}
    </StyledButton>
  );
}