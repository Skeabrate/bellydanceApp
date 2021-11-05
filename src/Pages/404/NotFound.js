import styled from "styled-components"

const StyledNotFound = styled.div`
   position: fixed;
   display: grid;
   align-content: center;
   text-align: center;
   background-color: var(--postBackground);
   width: 100%;
   height: 100vh;
   z-index: 999;
`

export default function NotFound() {
   return (
      <StyledNotFound>
         <h1 style={{fontSize: '10rem'}}>404</h1>
         <h2 style={{paddingBottom: '20px'}}>Not Found</h2>
         <h2>The resource requested could not be found on this server!</h2>
      </StyledNotFound>
   )
}