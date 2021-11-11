import { useEffect, useRef, useState } from "react"
import "aos/dist/aos.css"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import { imgLoad } from "../../helpers/imgLoad"
import HomepageBaner from "../../Assets/Images/banery/plakatAgnus-min.jpg"
import ScrollButton from "../../Components/ScrollButton/ScrollButton"
import HeroTitle from "../../Components/HeroTitle/HeroTitle"

import { StyledHomepageWrapper } from "./Homepage.styles"
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

            <HeroTitle label={"Magiczny Świat Orientu"} isMain/>

            <ScrollButton scrollRef={scrollRef.current}/>
         </StyledHomepageWrapper>
      </>

   )
}

export default Homepage