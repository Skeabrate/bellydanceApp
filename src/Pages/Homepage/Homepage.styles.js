import styled from "styled-components"

export const StyledHomepageWrapper = styled.section`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: flex-end;
   padding-bottom:20vh;
   background: url(${({HomepageBaner}) => HomepageBaner});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   z-index: 0;
   background-color: var(--light);
   position: relative;
`

export const StyledTitleContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 95%;

   &::after{
      content: "";
      background-color: rgb(0, 0, 0);
      width: 100%;
      height: 130%;
      position: absolute;
      border-radius: 10px;  
      z-index: -2;
      opacity: 0.2;
   }

   &::before{
      content: "";
      position: absolute;
      width: 100%;
      height: 130%;
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 37px -13px rgba(0, 0, 0, 1);
      -moz-box-shadow: 0px 0px 37px -13px rgba(0, 0, 0, 1);
      box-shadow: 0px 0px 37px -13px rgba(0, 0, 0, 1);
   }
`

export const StyledTitle = styled.p`
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

export const StyledOrnament = styled.img`
   width: 300px;
   transform: rotate(-180deg);

   @media(max-width: 1000px){
      width: 200px;
   }
`