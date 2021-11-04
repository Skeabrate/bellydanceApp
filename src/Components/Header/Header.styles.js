import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledHeader = styled.div`
   position: ${({isToggled}) => isToggled ? 'absolute' : 'fixed'};
   top: 0;
   left: 0;
   right: 0;
   background: transparent;
   font-size: 1.1rem;
   height: ${({isToggled}) => isToggled ? '100px' : '50px'};
   display: flex;
   justify-content: space-between;
   padding-left: 4vw;
   padding-right: 4vw;
   flex-direction: row;
   align-items: center;
   z-index: 10;
   box-shadow: 1px 1px 10px -3px rgba(0, 0, 0, 1);
   transition: all .4s ease-in-out;

   &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${({isToggled}) => isToggled ? '100px' : '50px'};
      background-color: black;
      z-index: -1;
      opacity: 0.2;
      transition: all .4s ease-in-out;
   } 
`

export const StyledHeaderBackground = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   height: ${({isToggled}) => isToggled ? '100px' : '50px'};
   width: 100%;
   background: linear-gradient(0deg, rgb(126, 0, 0) 0%, var(--orange) 88%);
   opacity: ${({isToggled}) => isToggled ? '0' : '1'};
   transition: height .4s ease-in-out,
               opacity .5s .1s ease-in-out;
`

export const StyledLogo = styled(Link)`
   font-family: 'Great Vibes', cursive;
   color: ${({isBlack}) => isBlack ? 'black' : 'white'};
   text-decoration: none;
   z-index: 1;
   font-size: ${({isToggled}) => isToggled ? '2.5rem' : '1.8rem'};
   text-shadow: ${({isBlack}) => isBlack ? 'none' : '2px 2px 2px rgba(0, 0, 0, 1)'};
   transition: all .4s ease-in-out;

   &::selection{
      background-color: var(--selectTitle);
      color: black;
      text-shadow: none;
   }

   @media (max-width: 1000px) {
      font-size: ${({isToggled}) => isToggled ? '1.8rem' : '1.6rem'};
  }
`