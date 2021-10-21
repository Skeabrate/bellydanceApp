import { useEffect } from "react"
import imgOrnament from "../../Assets/Images/Daco_4358948 (1).png"
import "./Homepage.css"
import Aos from "aos"
import "aos/dist/aos.css"


const Homepage = () => {
   useEffect(() => {
      document.title = "Leyla Bellydance"
      window.scrollTo(0, 0)
      Aos.init({ duration: 500 })
   }, [])

   return (
      <>
         <section data-aos="fade-in" className="Homepage_main">

            <div className="Homepage_title_container">
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