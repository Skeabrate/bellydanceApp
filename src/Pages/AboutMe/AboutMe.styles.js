import styled from "styled-components"

export const StyledContainer = styled.div`
   position: relative;
   width: 100%;
   background-color: white;
   font-size: 1.3rem;

   @media(max-width: 1000px){
      font-size: 1rem;
   }
`

export const StyledArticleWrapper = styled.article`
   overflow: hidden;

   &:nth-child(odd){
      background-color: var(--postBackground);
      border-bottom: 1px solid var(--selectTitle);
   }
`

export const StyledArticle = styled.div`
   display: grid;
   grid-template-columns: ${({isSecond}) => isSecond ? '1fr 1fr' : '1fr'};
   padding: 6vw;

   @media(max-width: 850px){
      grid-template-columns: 1fr;
   }
`

export const StyledParagraphContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-right: ${({isSecond}) => isSecond ? '6vw' : '0'};

   @media(max-width: 850px){
      margin-right: 0;
   }
`

export const StyledParagraph = styled.div`
   justify-self: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: ${({isFirst}) => isFirst ? 'center' : 'justify'};
`

export const StyledOrnament = styled.div`
   text-align: center;
   display: ${({isFirst}) => isFirst ? 'none' : 'block'};

   @media(max-width: 850px){
      display: block;
   }
`