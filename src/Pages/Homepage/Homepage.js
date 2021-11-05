import { useEffect, useRef, useState } from "react"
import imgOrnament from "../../Assets/Images/Daco_4358948 (1).png"
import "aos/dist/aos.css"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import { imgLoad } from "../../helpers/imgLoad"
import HomepageBaner from "../../Assets/Images/banery/plakatAgnus.jpg"
import ScrollButton from "../../Components/ScrollButton/ScrollButton"

import { StyledHomepageWrapper, StyledTitleContainer, StyledTitle, StyledOrnament} from "./Homepage.styles"
import { StyledScrollTo } from "../../GlobalStyles.styles"

const Homepage = () => {
   const [showContent, setShowContent] = useState(false)
   const homepageRef = useRef(null)
   const scrollRef = useRef(null)

   useEffect(() => {
      document.title = "Leyla Bellydance"
      window.scrollTo(0, 0)
      
      var image = document.createElement('img')
      image.src = imgLoad(homepageRef.current) 
      image.onload = function() {
         setShowContent(true)
      }
   }, [])

   return (
      <>
         {!showContent ? <LoadingScreen /> : null }
         <StyledHomepageWrapper ref={homepageRef} HomepageBaner={HomepageBaner} data-aos="fade-in" data-aos-duration="1000">
            <StyledScrollTo ref={scrollRef} />
            <StyledTitleContainer data-aos="zoom-in" data-aos-duration="1000">
               <StyledTitle>
                  Magiczny Świat Orientu
               </StyledTitle>
               <StyledOrnament src={imgOrnament} alt="text-ornament"></StyledOrnament>
            </StyledTitleContainer>

            <ScrollButton scrollRef={scrollRef.current}/>
         </StyledHomepageWrapper>
      </>

   )
}

export default Homepage