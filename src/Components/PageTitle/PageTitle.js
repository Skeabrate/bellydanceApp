import headerOrnament from "../../Assets/Images/kontaktRamkaKpia.png"
import headerOrnamentDown from "../../Assets/Images/kontaktRamkaKulki.png"
import "aos/dist/aos.css"

import { StyledContainer, StyledOrnamentUp, StyledOrnamentDown, StyledPageTitle, StyledPageTitleSecond } from "./PageTitle.styles"

export default function PageTitle({title, titleH2, showBorder, displayOrns}) {
   return (
      <header>
         <StyledContainer showBorder={showBorder}>
            {displayOrns ? (
               <StyledOrnamentUp data-aos="zoom-in" data-aos-once="false" alt="textOrnament" src={headerOrnament} />
            ) : null}
            
            <StyledPageTitle data-aos="fade-right" data-aos-once="false">{title}</StyledPageTitle>
            {titleH2 !== null ? (
               <StyledPageTitleSecond data-aos="fade-left" data-aos-once="false">{titleH2}</StyledPageTitleSecond>
            ) : null}

            {displayOrns ? (
               <StyledOrnamentDown data-aos="zoom-in" data-aos-once="false" alt="textOrnament" src={headerOrnamentDown} />
            ) : null}
         </StyledContainer>
      </header>
   )
}