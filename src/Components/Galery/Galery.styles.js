import styled, { css } from "styled-components"

/* ICONS */ 
const styledIcon = css`
   position: fixed;
   cursor: pointer;
   transform: scale(1.5);
   color: white;
   transition: transform .3s ease-in-out;
   height: 26px;
   width: 26px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
`

const styledIconBackground = css`
   content: '';
   position: absolute;
   width: 100%;
   height: 100%;
   border-radius: 50%;
   background-color: black;
   opacity: 0.1;
   z-index: -1;
   bottom: 0;
   left: 0;
`

export const StyledCloseWrapper = styled.div`
   ${styledIcon}
   top: 20px;
   right: 20px;

   &::after{
      ${styledIconBackground}
   }

   &:hover{
      transform: scale(1.3);
   }
`

export const StyledIconWrapper = styled.div`
   ${styledIcon}
   top: 50%;
   right: 30px;

   &::after{
      ${styledIconBackground}
   }
   
   &:hover{
      transform: scale(1.3);
   }

   &:not(:last-child){
      transform: rotate(180deg) scale(1.5);
      top: 50%;
      left: 30px;
   }

   &:hover:not(:last-child){
      transform: rotate(180deg) scale(1.3)
   }
`
/* ICONS */



export const StyledSelectedImg = styled.div`
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   transition: 
      opacity .4s ease-in-out, 
      visibility .4s ease-in-out, 
      transform .5s ease-in-out;
   visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
   opacity: ${({isOpen}) => isOpen ? '1' : '0'};
   overflow: hidden;
   z-index: 999;

   &::after{
      content: "";
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: black;
      z-index: -1;
      opacity: 0.9;
   }

   img{
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 100%;
      display: block;
      line-height: 0;
      padding: 20px 0 20px;
      margin: 0 auto;
   }
`

export const StyledGalery = styled.div`
   width: 100%;:hover{
   opacity: 0.9;
}
   column-count: ${({isOne, isTwo}) => isOne ? '1' : isTwo ? '2' : '3'};
   column-width: 33%;
   padding: 0 12px;

   @media (max-width: 1000px) {
      column-count: ${({isOne}) => isOne ? '1' : '2'};  
   }

   @media (max-width: 600px) {
      column-count: 1;
   }
`

export const StyledImage = styled.div`
   transition: opacity .2s ease-in-out;
   text-align: center;

   img{
      max-width: 100%;
      max-height: 90vh;
      cursor: pointer;
   }

   &:hover{
      opacity: 0.9;
   }
` 