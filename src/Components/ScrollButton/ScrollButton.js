import styled, { keyframes } from "styled-components"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const bounce = keyframes`
   from {
      opacity: 0;
      transform: translate(-50%, 0);
   }

   to {
      opacity: 0.9;
      transform: translate(-50%, 20px);
   }
`;

const bounceSecond = keyframes`
   from {
      transform: rotate(-90deg) translateX(0);
   }

  to {
      transform: rotate(-90deg) translateX(-20px);
  }
`;

const StyledButton = styled.button`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   position: absolute;
   bottom: 50px;
   left: 50%;
   transform: translateX(-50%);
   background-color: transparent;
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${({isVisible}) => isVisible ? '#fee73f' : 'var(--light)'};
   cursor: pointer;
   transition: all .3s ease-in-out;
   opacity: 0;
   animation: ${bounce} 1.5s alternate infinite;

   svg{
      font-size: 3.5rem;
      transform:  rotate(-90deg);
   }

   svg:last-child{
      position: absolute;
      font-size: 3.3rem;
      top: 0;
      opacity: 1;
      animation: ${bounceSecond} 1.5s alternate infinite;
   }

   /* &:hover {
      animation-timing-function: step-start;
   } */

   @media (max-width: 600px){
      display: none;
   }
`

export const StyledSecondArrow = styled(ArrowBackIosIcon)`
   position: absolute;
   top: 0;
`


export default function ScrollButton({scrollRef, isVisible}) {

   const handleScrolltoRef = () => scrollRef.scrollIntoView({behavior: 'smooth', block: 'start'})

   return (
      <StyledButton onClick={handleScrolltoRef} isVisible={isVisible}>
         <ArrowBackIosIcon />
         <ArrowBackIosIcon />
      </StyledButton>
   )
}