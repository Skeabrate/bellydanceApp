import { useEffect } from "react"
import HeaderCustom from "../../Components/HeaderCustom/HeaderCustom"
import "./Pokazy.css"
import GaleryPokazy from "./GaleryPokazy/GaleryPokazy"
import paragraphOrnament from "../../Assets/Images/Daco_40936 (1).png"
import pokazyVideo from "../../Assets/Pokazy/Videos/agunia.mp4"
import Aos from "aos"
import "aos/dist/aos.css"
import PageTitle from "../../Components/PageTitle/PageTitle"

export default function Aktualnosci({setHeaderCustomRef}) {
   useEffect(() => {
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
                     <img src={paragraphOrnament} className="pokazyTextOrnament" alt="" />
                  </div>

                  <video className="pokazyVideo" controls>
                     <source src={pokazyVideo} type="video/mp4"/> 
                  </video>

               </div>
            </div>

         </article>
         <GaleryPokazy />
      </section>
   )
}