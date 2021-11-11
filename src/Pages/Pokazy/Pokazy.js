import { useEffect, useRef, useState } from "react"
import paragraphOrnament from "../../Assets/Images/ornParag.png"
import Aos from "aos"
import "aos/dist/aos.css"
import PageTitle from "../../Components/PageTitle/PageTitle"
import axios from "../../axios"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import { imgLoad } from "../../helpers/imgLoad"
import GaleryPokazy from "./GaleryPokazy/GaleryPokazy"
import { StyledAlladinLamp, StyledScrollTo, StyledTextOrnament } from "../../GlobalStyles.styles"

import { StyledHeader, StyledVideo } from "./Pokazy.styles"
import { StyledWrapper, StyledContainer, StyledTextContainer, StyledText, StyledParagraph, StyledList, StyledOrnament} from "../../GlobalStyles.styles"
import ScrollButton from "../../Components/ScrollButton/ScrollButton"
import HeroTitle from "../../Components/HeroTitle/HeroTitle"

const HEADER_TITLE = "Magia tańca orientalnego podczas Państwa uroczystości"

export default function Aktualnosci() {
   const [videoSrc, setVideoSrc] = useState('')
   const [showContent, setShowContent] = useState(false)

   const headerBackgroundRef = useRef(null)
   const scrollRef = useRef(null)

   const fetchVideo = async () => {
      try{
         const res = await axios.get('/Video.json')
         setVideoSrc(res.data)

      } catch (ex) {
         console.log(ex.response)
      } 

   }

   useEffect(() => {
      fetchVideo()

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
               <HeroTitle label={HEADER_TITLE} />
               <ScrollButton scrollRef={scrollRef.current} />
            </StyledHeader>
            <article>
               {/* Text headers */}
               <PageTitle 
                  title={HEADER_TITLE}
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

                        <StyledOrnament>
                           <StyledTextOrnament src={paragraphOrnament} alt="textOrnament" />
                        </StyledOrnament>
                     </StyledTextContainer>

                     {videoSrc ? (
                        <StyledVideo controls>
                           <source src={videoSrc} type="video/mp4" /> 
                        </StyledVideo>
                     ) :  null}

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