import { useEffect, useState } from "react"
import HeaderCustom from "../../Components/HeaderCustom/HeaderCustom"
import "./Pokazy.css"
import GaleryPokazy from "./GaleryPokazy/GaleryPokazy"
import paragraphOrnament from "../../Assets/Images/Daco_40936 (1).png"
import Aos from "aos"
import "aos/dist/aos.css"
import PageTitle from "../../Components/PageTitle/PageTitle"
import axios from "../../axios"

export default function Aktualnosci({setHeaderCustomRef}) {
   const [videoSrc, setVideoSrc] = useState('')

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
   }, [])

   return (
      <section>
         <HeaderCustom headerStyle="headerPokazy" setHeaderCustomRef={setHeaderCustomRef}/>
         <article>
            {/* Text headers */}
            <PageTitle 
               title="Niech magia tańca orientalnego będzie niezapomnianym akcentem Państwa uroczystości"
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
                        <source src={videoSrc} type="video/mp4"/> 
                     </video>
                  ) : null}

               </div>
            </div>

         </article>
         <GaleryPokazy />
      </section>
   )
}