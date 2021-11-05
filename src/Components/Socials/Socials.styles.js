import styled from "styled-components"

export const StyledList = styled.ul`
   display: grid;
   grid-template-columns: 1fr 1fr;
   text-justify: left;
   font-size: 1.1rem;
   letter-spacing: 1px;
   list-style: none;
   font-style: italic;

   @media (max-width: 1000px) {
      grid-template-columns: 1fr;
   }

   @media (max-width: 600px) {
      letter-spacing: 0px;
      font-size: 0.9rem;
   }
`

export const StyledListItem = styled.li`
   margin: 2vw;
   background-color: rgb(247, 234, 213);
   border-radius: 10px;
   box-shadow: 0px 0px 10px -5px rgb(143, 110, 3);
   transition: all .3s;

   a{
      color: black;
      text-decoration: none;
   }

   &:hover{
      background: rgb(240, 228, 208); 
      transform: translate(0, -100px);
   }

   @media (max-width: 1000px) {
      margin: 5vw 0;
   }
`

export const StyledImg = styled.img`
   width: 70px;
   margin-right: 1rem;

   @media (max-width: 600px) {
      width: 60px;
   }
`

export const StyledLink = styled.a`
   display: flex;
   align-items: center;
   padding: 2vw;

   @media (max-width: 600px) {
      gap: 10px;
   }
`