import styled from "styled-components"
import baner from "../../Assets/Images/banery/banerAktualnosci.jpg"
import playBtn from "../../Assets/Images/play.png"

export const StyledContainer = styled.div`
   width: 100%;
   height: 100vh;
   position: relative;
   background: url(${baner}) top;
   position: relative;
   background-size: cover;
   background-repeat: no-repeat;
   box-shadow: 0px 0px 29px -3px rgba(0, 0, 0, 1);

   @media (max-width: 1000px) {
      height: 60vh;
   }

   @media (max-width: 600px) {
      height: 30vh;
   }
`

export const StyledArticle = styled.article`
   position: relative;
   padding: 5px 3vw 3vw 3vw;
   font-size: 1.3rem;
   margin: ${({isFirst}) => isFirst ? '0 6vw 6vw' : '6vw'};
   background-color: var(--postBackground);
   border-radius: 50px 50px 0 0;
   border-top: 1px solid var(--selectTitle);
   border-bottom: 1px solid var(--selectTitle);

   @media (max-width: 1000px) {
      font-size: 1rem;
      border-radius: 30px 30px 0 0;
   }

   @media (max-width: 600px) {
      border-radius: 20px 20px 0 0;
      margin: 6vw 3vw;
   }
`

export const StyledPost = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 32px;
`

export const StyledDate = styled.div`
   padding: 0 10px 3px 10px;
   font-size: 16px;
   color: rgb(59, 59, 59);
   border-bottom: 2px dotted var(--selectTitle);

   @media (max-width: 600px) {
      font-size: 14px;
   }
`

export const StyledTitle = styled.h1`
   text-align: center;
   padding-bottom: 1vw;
   border-bottom: 4px dotted var(--selectTitle);
   width: 60vw;

   @media (max-width: 1000px) {
      padding-top: 1vw;
   }

   @media (max-width: 600px) {
      padding-top: 3vw;
      width: 70vw;
   }
`

export const StyledVideo = styled.video`
   height: 40vw;
   width: 100%;
`

export const StyledLoading = styled.div`
   height: calc(100vh - 70vh);
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: 1000px) {
      height: calc(100vh - 50vh);
   }

   @media (max-width: 600px) {
      text-align: center;
      height: calc(100vh - 30vh);
   }
`

export const StyledThumbnail = styled.div`
   width: 100%;
   height: 40vw;
   position: relative;
   border-radius: 10px;
   overflow: hidden;
   
   img{
      width: 100%;
      height: 100%;
      transition: transform .5s ease-in-out;
   }

   &:hover img{
      transform: scale(1.05);
   }
`

export const StyledPlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0;
      transition: opacity .5s ease-in-out;
   }

   img{
      width: 20vw;
      height: 20vw;
      opacity: 0;
      transition: all .5s ease-in-out;
   }

   &:hover::after{
      opacity: 0.4;
   }

   &:hover img{
      opacity: 0.6;
   }
`