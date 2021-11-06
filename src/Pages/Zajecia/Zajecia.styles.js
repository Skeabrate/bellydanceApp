import styled from "styled-components"
import baner from "../../Assets/Images/banery/banerZajecia.png"

export const StyledHeader = styled.div`
   width: 100%;
   height: 100vh;
   position: relative;
   background: url(${baner}) center;
   position: relative;
   background-size: cover;
   background-repeat: no-repeat;
   background-attachment: fixed;
   height: calc(100vh - 30px);
   display: flex;
   justify-content: center;
   align-items: flex-end;
   padding-bottom: 15vh;

   @media (max-width: 1000px) {
      background-attachment: unset;
      height: 60vh;
      padding-bottom: 15vh;
   }

   @media (max-width: 600px) {
      height: 30vh;
   }
`

export const StyledTextHeader = styled.div`
   font-size: 1.3rem;
   text-align: center;
   position: relative;
   padding: 0 6vw 10vw;

   @media (max-width: 1000px) {
      font-size: 1rem;
   }
`