import styled from "styled-components"
import lamp from "./Assets/Images/pngjoy.com_genie-lamp-magic-lamp-aladdin-transparent-png-download_2230197.png"

export const StyledAlladinLamp = styled.span`
   display: inline-block;
   background: url(${lamp}) bottom;
   background-size: contain;
   background-repeat: no-repeat;
   height: 30px;
   width: 30px;
   margin-right: 5px;
`

export const StyledTextOrnament = styled.img`
   margin: 3.5rem auto;
   width: 300px;

   @media(max-width: 1000px){
      width: 200px;
   }
`

export const StyledScrollTo = styled.div`
   position: absolute;
   bottom: 0;
   width: 100%;
   height: 50px;
`

/* TEXT CONTAINER for row */
export const StyledWrapper = styled.div`
   background-color: ${({isSecond}) => isSecond ? 'white' : 'var(--postBackground)'};
   border-radius: 50px 50px 0 0 ;
   border-top: ${({isSecond}) => isSecond ? 'none' : '1px solid rgb(240, 220, 156)'};

   @media (max-width: 1000px) {
      border-radius: 30px 30px 0 0 ;
   }

   @media (max-width: 600px) {
      border-radius: 20px 20px 0 0 ;
   }
`

export const StyledContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   padding: 6vw;

   @media(max-width: 1200px){
      grid-template-columns: 1fr;
   }
`

export const StyledTextContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-right: 6vw;
   grid-column: ${({isSecond}) => isSecond ? '2' : '1'};

   @media(max-width: 1200px){
      margin-right: 0;
   }
`

export const StyledAsset = styled.div`
   grid-column: 1;
   grid-row: 1;
   margin-right: 6vw;

   @media(max-width: 1200px){
      margin-right: 0;
      grid-column: 2;
      grid-row: 2;
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

export const StyledOrnament = styled.div`
   text-align: center;
   display: none;

   @media(max-width: 1200px){
      display: block;
   }
`