import { useEffect, useRef, useState } from "react"
import paragraphOrnament from "../../Assets/Images/Daco_40936 (1).png"
import Aos from "aos"
import "aos/dist/aos.css"
import PageTitle from "../../Components/PageTitle/PageTitle"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import { imgLoad } from "../../helpers/imgLoad"
import GaleryPokazy from "./GaleryPokazy/GaleryPokazy"
import { StyledAlladinLamp, StyledScrollTo } from "../../GlobalStyles.styles"

import { StyledWrapper, StyledContainer, StyledHeader, StyledTextContainer, StyledText, StyledParagraph, StyledList, StyledOrnament, StyledVideo } from "./Pokazy.styles"
import ScrollButton from "../../Components/ScrollButton/ScrollButton"

export default function Aktualnosci() {
   const [showContent, setShowContent] = useState(false)

   const headerBackgroundRef = useRef(null)
   const scrollRef = useRef(null)

   useEffect(() => {
      document.title = "Pokazy - Leyla Bellydance"
      Aos.init({ duration: 500, debounceDelay: 200})
      window.scrollTo(0, 0)

      var image = document.createElement('img')
      image.src = imgLoad(headerBackgroundRef.current) 
      image.onload = function() {
         setShowContent(true)
      }
   }, [])

   return (
      <>
         {!showContent ? <LoadingScreen /> : null }
         <section>
            <StyledHeader ref={headerBackgroundRef}>
               <StyledScrollTo ref={scrollRef} />
               <ScrollButton scrollRef={scrollRef.current} />
            </StyledHeader>
            <article>
               {/* Text headers */}
               <PageTitle 
                  title="Magia tańca orientalnego podczas Państwa uroczystości"
                  titleH2="W ten egzotyczny świat wprowadzi Cię tancerka Leyla, która może zatańczyć na Państwa weselu, 
                  imprezie okolicznościowej, czy ofiarować w imieniu Państwa, taniec dla gości imprezy."
                  displayOrns={true}
               /> 

               {/* Text second section */}
               <StyledWrapper data-aos="fade-up">
                  <StyledContainer>

                     <StyledTextContainer>
                        <StyledText>
                           <StyledParagraph>
                              Program i charakter pokazu może być dostosowany do rodzaju imprezy okolicznościowej oraz oczekiwań Klienta,
                              gdyż w repertuarze Leyli znajdują się:
                           </StyledParagraph>

                           <StyledList>
                              <li><StyledAlladinLamp></StyledAlladinLamp>pokazy z gatunku fantasy belly dance, czyli taneczne show z rekwizytami: skrzydłami Izydy, woalem, wachlarzami,</li>
                              <li><StyledAlladinLamp></StyledAlladinLamp>nowoczesny pop</li>
                              <li><StyledAlladinLamp></StyledAlladinLamp>zmysłowa klasyka</li>
                              <li><StyledAlladinLamp></StyledAlladinLamp>radosny folklor do wesołej muzyki</li>
                           </StyledList>

                           <StyledParagraph>
                              Na zakończenie pokazu proponujemy wspólną zabawę z Gośćmi przy dźwiękach znanych piosenek Shakiry, Tarkana, czy Arasha.
                              Nauka podstawowych ruchów belly dance rozweseli nawet najmniej roztańczonych Gości!
                           </StyledParagraph>
                        </StyledText>

                        <div style={{ textAlign: 'center' }}>
                           <StyledOrnament src={paragraphOrnament} alt="textOrnament" />
                        </div>
                     </StyledTextContainer>

                     <StyledVideo controls>
                        <source src="https://www.datocms-assets.com/57974/1636165650-agunia.mp4" type="video/mp4" /> 
                     </StyledVideo>

                  </StyledContainer>
               </StyledWrapper>

            </article>
            <div style={{padding: '40px 6vw 0'}}>
               <GaleryPokazy />
            </div>
         </section>
      </>
   )
}