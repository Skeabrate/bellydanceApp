import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

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
   box-shadow: 1px 1px 20px -4px rgba(0, 0, 0, 1);
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
   color: ${({isBlack}) => isBlack ? 'black' : `var(--light)`};
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


export const StyledNav = styled.ul`
   color: var(--light);
   display: flex;
   list-style: none;
   /* gap: 2.5vw; */

   @media (max-width: 1000px){
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      padding-top: 20px;
      transform: ${({isToggled}) => isToggled ? 'scale(1)' : 'scale(0)'};
      visibility: ${({isToggled}) => isToggled ? 'visible' : 'hidden'};
      opacity: ${({isToggled}) => isToggled ? '1' : '0'};
      transition: transform 0.4s 0s ease-in-out;

      &::after{
         z-index: -1;
         content: '';
         position: fixed;
         width: 1500px;
         height: 1500px;
         background-color: rgb(0, 0, 0);
         opacity: 0.7;
         border-radius: 50%;
      }
   }
`


export const StyledNavItem = styled(NavLink)`
   display: flex;
   align-items: center;
   color: var(--light);
   letter-spacing: 1px;
   text-decoration: none;
   position: relative;
   transition: all 0.3s 0s ease-in-out;
   text-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
   height: ${({isToggled}) => isToggled ? '100px' : '50px'};
   position: relative;
   margin: 0 1.2vw;

   &.active::after{
      opacity: 0.8;
   }
   
   &::selection{
      background-color: var(--selectTitle);
      color: black;
      text-shadow: none;
   }

   &::after{
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 5px;
      height: 4px;
      background-color: var(--light);
      opacity: 0;
      transition: opacity .2s ease-in-out;
      border-radius: 50px;
   }

   &:hover::after{
      opacity: 0.8;
   }

   @media (max-width: 1000px){
      text-decoration: none;
      margin: 5px;
      margin-left: 20px;
      font-size: 1.5rem;
      height: 50px;

      &.active::after{
         display: none;
      }

      &:hover::after { 
         display: none;
      }

      &:hover{
         transform: scale(1.05);
      }
   }
`


export const StyledHamburger = styled.button`
   display: none;

   @media (max-width: 1000px) {
      padding: 10px;
      cursor: pointer;
      display: inline-block;
      background-color: transparent;
      border: 0;
      margin: 0;
   }
`

export const StyledHamburgerWrapper = styled.span`
   width: 36px;
   height: 23px;
   display: inline-block;
   position: relative;
   transition: transform .3s 0s ease-in-out;

   &:hover{
      transform: scale(0.85);
   }
`

export const StyledHamburgerInner = styled.span`
   width: 100%;
   height: 3px;
   background-color: ${({isToggled}) => isToggled ? 'transparent' : 'var(--light)'};
   position: absolute;
   left: 0;
   top: 50%;
   transform: translateY(-50%);
   transition: background-color .1s .3s ease-in-out;

   &::after, &::before{
      content: '';
      width: 100%;
      height: 3px;
      background-color: var(--light);
      position: absolute;
      left: 0;
      transition: transform .2s .2s ease-in-out, 
                  background-color .2s .2s ease-in-out; 
   }

   &::after{
      bottom: 10px;
      transform: ${({isToggled}) => isToggled ? 'translateY(10px) rotate(45deg)' : 'unset'};
   }

   &::before{
      top: 10px;
      transform: ${({isToggled}) => isToggled ? 'translateY(-10px) rotate(-45deg)' : 'unset'}
   }
`
