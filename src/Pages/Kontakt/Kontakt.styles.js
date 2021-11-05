import styled from "styled-components"
import baner from "../../Assets/Images/banery/banerKontakt.jpg"
import ornament from "../../Assets/Images/ramkaKontakt.png"

export const StyledHeader = styled.div`
    width: 100%;
   height: 100vh;
   position: relative;
   background: url(${baner}) center;
   position: relative;
   background-size: cover;
   background-repeat: no-repeat;
   box-shadow: 0px 0px 29px -3px rgba(0, 0, 0, 1);

   @media (max-width: 1000px) {
      height: 60vh;
   }

   @media (max-width: 600px) {
      height: 30vh;
   }
`

export const StyledArticle = styled.article`
   background-color: var(--postBackground);
`

export const StyledKontakt = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   overflow: hidden;
   padding: 5vw 5vw 10vw 5vw;

   @media (max-width: 1000px) {
      flex-direction: column;
   }
`

export const StyledTitle = styled.h1`
   font-family: 'Great Vibes', cursive;
   font-size: 3.4rem;
   padding: 0 20px;
   color: rgb(168, 124, 2);
   letter-spacing: 6px;
   padding: 18vw;
   position: relative;
   text-shadow: 2px 2px 0px rgba(0, 0, 0, 1);

   &::after{
      content: '';
      position: absolute;
      left: 0;
      top: -13px;
      width: 100%;
      height: 100%;
      background: url(${ornament}) center;
      background-size: cover;
      background-repeat: no-repeat;
   }

   @media (max-width: 1000px) {
      padding: 23vw;
      font-size: 3rem;

      &::after{
         content: '';
         position: absolute;
         left: 0;
         top: -10px;
         width: 100%;
         height: 100%;
         background-size: cover;
         background-repeat: no-repeat;
      }
   }

   @media (max-width: 600px) {
      font-size: 2rem;
      text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
      padding: 28vw;

      &::after{
         top: -6px;
      }
   }
`