import { useEffect, useRef, useState } from "react"
import "./Pokazy.css"
import paragraphOrnament from "../../Assets/Images/Daco_40936 (1).png"
import Aos from "aos"
import "aos/dist/aos.css"
import PageTitle from "../../Components/PageTitle/PageTitle"
import axios from "../../axios"
import vidPlaceHolder from "../../Assets/Pokazy/img9.jpg"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import { imgLoad } from "../../helpers/imgLoad"
import GaleryPokazy from "./GaleryPokazy/GaleryPokazy"

export default function Aktualnosci() {
   const [videoSrc, setVideoSrc] = useState('')
   const [showContent, setShowContent] = useState(false)

   const headerBackgroundRef = useRef()

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
            <div className="headerPokazy" ref={headerBackgroundRef}></div>
            <article>
               {/* Text headers */}
               <PageTitle 
                  title="Magia tańca orientalnego podczas Państwa uroczystości"
                  titleH2="W ten egzotyczny świat wprowadzi Cię tancerka Leyla, która może zatańczyć na Państwa weselu, 
                  imprezie okolicznościowej, czy ofiarować w imieniu Państwa, taniec dla gości imprezy."
                  displayOrns={true}
               /> 

               {/* Text second section */}
               <div data-aos="fade-up" className="pokazyInfo">
                  <div className="pokazyInfoContainer">

                     <div className="pokazyParagraphContainer">
                        <div className="pokazyText">
                           <p className="pokazyParagraph">
                              Program i charakter pokazu może być dostosowany do rodzaju imprezy okolicznościowej oraz oczekiwań Klienta,
                              gdyż w repertuarze Leyli znajdują się:
                           </p>

                           <ul className="pokazyList">
                              <li className="pokazyListItem"><span className="lampaAlladyna"></span>pokazy z gatunku fantasy belly dance, czyli taneczne show z rekwizytami: skrzydłami Izydy, woalem, wachlarzami,</li>
                              <li className="pokazyListItem"><span className="lampaAlladyna"></span>nowoczesny pop</li>
                              <li className="pokazyListItem"><span className="lampaAlladyna"></span>zmysłowa klasyka</li>
                              <li className="pokazyListItem"><span className="lampaAlladyna"></span>radosny folklor do wesołej muzyki</li>
                           </ul>

                           <p className="pokazyParagraph">
                              Na zakończenie pokazu proponujemy wspólną zabawę z Gośćmi przy dźwiękach znanych piosenek Shakiry, Tarkana, czy Arasha.
                              Nauka podstawowych ruchów belly dance rozweseli nawet najmniej roztańczonych Gości!
                           </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                           <img src={paragraphOrnament} className="paragraphOrnament ornamentPokazy" alt="" />
                        </div>
                     </div>

                     {videoSrc ? (
                        <video className="pokazyVideo" controls>
                           <source src={videoSrc} type="video/mp4" poster={vidPlaceHolder}/> 
                        </video>
                     ) :  null}

                  </div>
               </div>

            </article>
            <div style={{padding: '0 6vw'}}>
               <GaleryPokazy />
            </div>
         </section>
      </>
   )
}