import styled from "styled-components"

import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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

export const StyledCloseIcon = styled(CloseIcon)`
   position: fixed;
   top: 20px;
   right: 20px;
   transform: scale(1.5);
   color: white;
   cursor: pointer;
   transition: all .3s ease-in-out;

   &:hover{
      transform: scale(1.3);
   }
`

export const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
   position: absolute;
   top: 50%;
   left: 30px;
   transform: scale(1.5);
   color: white;
   cursor: pointer;
   transition: transform .3s ease-in-out;

   &:hover{
      transform: scale(1.3);
   }
`

export const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
   position: absolute;
   top: 50%;
   right: 30px;
   transform: scale(1.5);
   color: white;
   cursor: pointer;
   transition: transform .3s ease-in-out;

   &:hover{
      transform: scale(1.3);
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

   img{
      width: 100%;
      cursor: pointer;
   }

   &:hover{
      opacity: 0.9;
   }
` 