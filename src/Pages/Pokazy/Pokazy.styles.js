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
   display: flex;
   justify-content: center;
   align-items: flex-end;
   padding-bottom: 20vh;

   @media (max-width: 1000px) {
      height: 60vh;
      padding-bottom: 15vh;
   }

   @media (max-width: 600px) {
      height: 30vh;
   }
`

export const StyledVideo = styled.video`
   height: 25vw;
   width: 45vw;

   @media(max-width: 1200px){
      height: 50vw;
      width: 100%;

      img{
         height: 100%;
      }
   }
`