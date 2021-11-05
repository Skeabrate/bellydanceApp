import styled from "styled-components"
import baner from "../../Assets/Images/banery/banerPokazy.jpg"

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

export const StyledWrapper = styled.div`
   background-color: var(--postBackground);
   border-radius: 50px 50px 0 0 ;
   border-top: 1px solid rgb(240, 220, 156);

   @media (max-width: 1000px) {
      border-radius: 30px 30px 0 0 ;
   }

   @media (max-width: 600px) {
      border-radius: 20px 20px 0 0 ;
   }
`

export const StyledContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 6vw;

   @media(max-width: 850px){
      flex-direction: column;
      padding: 8vh 3vh;
   }
`

export const StyledTextContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-right: 6vw;

   @media(max-width: 850px){
      margin-right: 0;
   }
`

export const StyledText = styled.div`
   font-size: 1.3rem;
   text-align: justify;
   position: relative;

   @media (max-width: 1000px) {
      font-size: 1rem;
   }
`

export const StyledParagraph = styled.p`
   padding: 15px 0;
`

export const StyledList = styled.ul`
   list-style: none;
`

export const StyledOrnament = styled.img`
   display: none;

   @media(max-width: 850px){
      display: block;
      width: 200px;
      margin: 3.5rem auto;
   }
`

export const StyledVideo = styled.video`
   height: 25vw;
   width: 45vw;

   @media(max-width: 850px){
      height: 50vw;
      width: 100%;

      img{
         height: 100%;
      }
   }
`