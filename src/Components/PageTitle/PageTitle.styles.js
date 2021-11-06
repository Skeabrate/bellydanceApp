import styled from "styled-components"

export const StyledContainer = styled.div`
   border-top: ${({showBorder}) => showBorder ? '20px solid rgb(241, 232, 147)' : '0'};
   padding: 6vw;
   text-align: center;
   overflow: hidden;
   position: relative;
   display: grid;
   place-items: center;

   
   &::after{
      display: ${({showBorder}) => showBorder ? 'block' : 'none'};
      content: "";
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 10px;
      background: rgb(212, 167, 17);
      
      @media (max-width: 1000px){
         height: 5px;
      }
   }

   @media (max-width: 1000px){
      border-top: ${({showBorder}) => showBorder ? '15px solid rgb(241, 232, 147)' : '0'};
   }

   @media(max-width: 850px){
      padding: 6vw 3vw;
   }
`

export const StyledOrnamentUp = styled.img`
   height: 15vw;

   &::selection{
      background-color: var(--selectTitle);
   }
`

export const StyledOrnamentDown = styled.img`
   margin-top: 3vw;
   height: 3vw;

   &::selection{
      background-color: var(--selectTitle);
   }
`

export const StyledPageTitle = styled.h1`
   display: ${({isTitle, showH1}) => isTitle || showH1 ? 'block' : 'none'};
   margin: 0 auto 30px;
   padding: 20px;
   font-size: 3.5rem;
   font-family: 'Great Vibes', cursive;
   color: var(--orange);
   text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
   letter-spacing: 1px;
   position: relative;
   text-align: center;

   &::after{
      content: '';
      display: block;
      bottom: 0;
      margin: 30px auto 0;
      width: 80%;
      height: 5px;
      border-bottom: 4px dotted var(--orange);
   }

   &::selection{
      background-color: var(--selectTitle);
   }

   @media(max-width: 1000px){
      font-size: 2.5rem;
   }

   @media(max-width: 850px){
      font-size: 2rem;
   }

   @media(max-width: 600px){
      display: block;
   }
`

export const StyledPageTitleSecond = styled.h2`
   font-size: 1.6rem;
   width: 70%;
   padding: 2vw;

   &::selection{
      background-color: var(--selectTitle);
   }

   @media(max-width: 1000px){
      font-size: 1.3rem;
   }

   @media(max-width: 850px){
      font-size: 1rem;
   }

   @media(max-width: 600px){
      padding: 0;
      width: 90%;
   }
`