import { useEffect, useRef, useState } from "react"
import imgOrnament from "../../Assets/Images/Daco_4358948 (1).png"
import "./Homepage.css"
import Aos from "aos"
import "aos/dist/aos.css"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import { imgLoad } from "../../helpers/imgLoad"

const Homepage = () => {
   const [showContent, setShowContent] = useState(false)
   const homepageRef = useRef(null)

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
         <section ref={homepageRef} data-aos="fade-in" data-aos-duration="1000" className="Homepage_main">
            <div data-aos="zoom-in" data-aos-duration="1000" className="Homepage_title_container">
               <p className="Homepage_title">
                  Magiczny Świat Orientu
               </p>
               <img className="textOrnament" src={imgOrnament} alt="zdjecies"></img>
            </div>

         </section>
      </>

   )
}

export default Homepage