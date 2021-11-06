import styled from "styled-components"

export const StyledHomepageWrapper = styled.section`
   width: 100%;
   height: 100vh;
   background: url(${({HomepageBaner}) => HomepageBaner}) center;
   background-size: cover;
   background-repeat: no-repeat;
   position: relative;
   box-shadow: 0px 0px 29px -3px rgba(0, 0, 0, 1);
   display: flex;
   justify-content: center;
   align-items: flex-end;
   padding-bottom:20vh;
`