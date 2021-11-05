import { useEffect, useRef, useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Socials from "../../Components/Socials/Socials"
import { imgLoad } from "../../helpers/imgLoad"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import { socialsData } from "./KontaktData"
import { StyledHeader, StyledArticle, StyledKontakt, StyledTitle } from "./Kontakt.styles"

export default function Kontakt() {
   const headerBackgroundRef = useRef(null)
   const [showContent, setShowContent] = useState(false)

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
            <StyledHeader ref={headerBackgroundRef}></StyledHeader>
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