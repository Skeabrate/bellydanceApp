import styled from "styled-components"
import lamp from "./Assets/Images/pngjoy.com_genie-lamp-magic-lamp-aladdin-transparent-png-download_2230197.png"

export const StyledAlladinLamp = styled.span`
   display: inline-block;
   background: url(${lamp}) bottom;
   background-size: contain;
   background-repeat: no-repeat;
   height: 30px;
   width: 30px;
   margin-right: 5px;
`

export const StyledTextOrnament = styled.img`
   margin: 3.5rem auto;
   width: 300px;

   @media(max-width: 1000px){
      width: 200px;
   }
`