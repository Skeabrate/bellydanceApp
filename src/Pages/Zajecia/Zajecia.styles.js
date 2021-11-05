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
   height: calc(100vh - 30px);

   @media (max-width: 1000px) {
      height: 60vh;
   }

   @media (max-width: 600px) {
      height: 30vh;
   }
`

export const StyledContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   padding: 2vw;
   background-color: rgb(252, 244, 229);
   border-radius: 50px 50px 0 0;
   border-top: 1px solid var(--selectTitle);
   overflow: hidden;

   @media (max-width: 1000px) {
      grid-template-columns: 1fr;
      border-radius: 30px 30px 0 0;
   }

   @media (max-width: 600px) {
      border-radius: 20px 20px 0 0;
   }
`

export const StyledWrapper = styled.div`
   display: flex;
   font-size: 1.1rem;
   height: 100%;
   padding: 2vw;
   flex-direction: column;
   text-align: justify;
   justify-content: space-between;
   align-items: flex-end;
   border-right: 4px dotted var(--selectTitle);

   @media (max-width: 1000px) {
      border-right: none;
      border-bottom: 4px dotted var(--selectTitle);
      padding: 8vw 2vw;
      font-size: 1rem;
   }
`

export const StyledParagraph = styled.p`
   padding-bottom: 2vw;
`