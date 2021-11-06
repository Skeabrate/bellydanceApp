import React from 'react';
import styled from "styled-components"
import imgOrnament from "../../Assets/Images/Daco_4358948 (1).png"
import "aos/dist/aos.css"

const StyledTitleContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 95%;

   &::after{
      content: "";
      background-color: black;
      width: 102%;
      height: 130%;
      position: absolute;
      border-radius: 10px;  
      z-index: -2;
      opacity: ${({isDarker}) => isDarker ? '0.4' : '0.2'};
   }

   &::before{
      content: "";
      position: absolute;
      width: 102%;
      height: 130%;
      border-radius: 10px;
      box-shadow: 0px 0px 40px ${({isDarker}) => isDarker ? '0px' : '-9px'} black;
   }

   @media (max-width: 600px){
      display: ${({isMain}) => isMain ? 'flex' : 'none'};
   }
`

const StyledTitle = styled.p`
   font-family: 'Great Vibes', cursive;
   font-size: 4rem;
   letter-spacing: 3px;
   color: var(--light);
   text-align: center;
   text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
   position: relative;

   @media (max-width: 1000px){
      font-size: 3.2rem;
   }

   @media(max-width: 530px){
      font-size: 2rem;
   }
`

const StyledOrnament = styled.img`
   width: 300px;
   transform: rotate(-180deg);

   @media(max-width: 1000px){
      width: 200px;
   }
`

const HeroTitle = ({label, isMain, isDarker}) => {
   return (
      <StyledTitleContainer isMain={isMain} isDarker={isDarker} data-aos="fade-in" data-aos-duration="2000">
         <StyledTitle>
            {label}
         </StyledTitle>
         <StyledOrnament src={imgOrnament} alt="text-ornament"></StyledOrnament>
      </StyledTitleContainer>
   );
};

export default HeroTitle;