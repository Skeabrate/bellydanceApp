import styled from "styled-components"

export const StyledFooter = styled.footer`
   width: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding: 5vw;
   background: linear-gradient(0deg, rgb(173, 153, 119) 0%, rgb(255, 255, 255) 100%);
   font-weight: bold;
   font-size: 12px;
   letter-spacing: 1px;
   gap: 5px;
   position: absolute;
   box-shadow: 0px 0px 13px 16px rgba(255, 255, 255, 1);
`

export const StyledSvg = styled.svg`
   margin-right: 10px;
   margin-left: 10px;
`
export const StyledAttributes = styled.div`
   @media (max-width: 600px) {
      font-size: 8px;
   }
`