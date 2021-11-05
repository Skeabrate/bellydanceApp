import { useEffect, useRef, useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Socials from "../../Components/Socials/Socials"
import { imgLoad } from "../../helpers/imgLoad"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import { socialsData } from "./KontaktData"
import { StyledHeader, StyledArticle, StyledKontakt, StyledTitle } from "./Kontakt.styles"
import { StyledScrollTo } from "../../GlobalStyles.styles"
import ScrollButton from "../../Components/ScrollButton/ScrollButton"

export default function Kontakt() {
   const headerBackgroundRef = useRef(null)
   const [showContent, setShowContent] = useState(false)

   const scrollRef = useRef(null)

   useEffect(() => {
      document.title = "Kontakt - Leyla Bellydance"
      window.scrollTo(0, 0)
      Aos.init({duration: 500, debounceDelay: 200, once: true,})

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
            <StyledArticle>
               <StyledKontakt>

                  <StyledTitle data-aos="zoom-in">Kontakt</StyledTitle>

                  <Socials socialsData={socialsData} />

               </StyledKontakt>
            </StyledArticle>
         </section>
      </>
   )
}