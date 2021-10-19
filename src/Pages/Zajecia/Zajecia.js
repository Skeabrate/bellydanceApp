import { useEffect } from "react"
import HeaderCustom from "../../Components/HeaderCustom/HeaderCustom"
import zajeciaPlakat from "../../Assets/Zajecia/zajeciaOgloszenie.jpg"
import zajeciaFooterImg from "../../Assets/Zajecia/zajeciaFooter.jpg"
import paragraphOrnament from "../../Assets/Images/Daco_40936 (1).png"
import Aos from "aos"
import "aos/dist/aos.css"
import "./Zajecia.css"
import PageTitle from "../../Components/PageTitle/PageTitle"

export default function Aktualnosci({setHeaderCustomRef}) {

   useEffect(() => {
      document.title = "Zajęcia taneczne - Leyla Bellydance"
      Aos.init({duration: 1000, debounceDelay: 200})
      window.scrollTo(0, 0)
   }, [])

   return (
      <section className="zajeciaBackground">

         <HeaderCustom headerStyle="headerZajecia" setHeaderCustomRef={setHeaderCustomRef}/>
         
         <PageTitle 
            title="Taniec orientalny jest odpowiedni dla każdej z nas, bez względu na wiek, predyspozycje fizyczne, czy wcześniejszą aktywność ruchową."
            titleH2={null}
            style="zajeciaTitleBorderTop"
            displayOrns={true}
         />
         
         <div data-aos="fade-up" className="zajeciaContainer">
            <article>
               <div className="zajeciaInfo">
                  <div>
                     <p className="zajeciaParagraph">
                        Prowadząc zajęcia zwracam uwagę na szlifowanie techniki, pracuję nad gracją, zmysłowością i poprawą kondycji oraz rzeźby każdej z ćwiczących pań.
                     </p>

                     <p className="zajeciaParagraph">
                        Uczę ich różnych styli tańca orientalnego, poszerzając ich wiedzę teoretyczną i praktyczną w zakresie tańca arabskiego.
                     </p>

                     <p className="zajeciaParagraph">
                        Do każdej swojej tancerki staram się podchodzić w sposób zindywidualizowany, pomagając dostrzec swe predyspozycje i rozwijać możliwości.
                     </p>

                     <p className="zajeciaParagraph">Czas poświecony na taniec brzucha przynosi nam wymierne korzyści zarówno dla ciała, psychiki i naszej duszy.</p>

                     <h3>Dzięki zajęciom tańca brzucha możemy:</h3>
                     <ul className="zajeciaList">
                        <li className="zajeciaListItem">
                           <span className="lampaAlladyna"></span>
                           zniwelować ból pleców
                        </li>

                        <li className="zajeciaListItem">
                           <span className="lampaAlladyna"></span>
                           poprawić  ogólną kondycję
                        </li>

                        <li className="zajeciaListItem">
                           <span className="lampaAlladyna"></span>
                           wzmocnić mięśnie brzucha, miednicy, pleców, ramion i nóg. A im silniejsze mięśnie brzucha, to zdrowszy i bardziej odciążony kręgosłup!
                        </li>

                        <li className="zajeciaListItem">
                           <span className="lampaAlladyna"></span>
                           usuwać wszelkie niedogodności związane z siedzącym trybem życia.
                        </li>

                        <li className="zajeciaListItem">
                           <span className="lampaAlladyna"></span>
                           dzięki technice opartej na izolacji pogłębiać  świadomość ciała i polepszać koordynację ruchową.
                        </li>

                        <li className="zajeciaListItem">
                           <span className="lampaAlladyna"></span>
                           pracując systematycznie nad  zwiększeniem zakresu ruchu w stawach, siłą mięśni i ich rozciąganiem, utrzymaniem ładnej, wyprostowanej sylwetki nabierać gracji, elegancji w codziennym ruchu
                        </li>

                        <li className="zajeciaListItem">
                           <span className="lampaAlladyna"></span>
                           w sposób przyjemny pozbyć się zbędnych kilogramów - tańcząc w takt orientalnej muzyki spalamy ok. 500kc/h !
                        </li>
                     </ul>

                     <div style={{textAlign: 'center'}}>
                        <img src={paragraphOrnament} className="paragraphOrnament" alt="" />
                     </div>
                  </div>

                  <div data-aos="zoom-in" data-aos-duration="1000" className="zajeciaImageCont">
                     <img alt="" src={zajeciaFooterImg}/>
                  </div>
                  
               </div>
            </article>

            <article>
               <div className="zajeciaInfo" style={{borderRight: 'none', borderBottom: 'none'}}>
                  <p className="zajeciaParagraph">
                     Dzieki wymaganej systematyczności w treningach taniec orientalny uczy nas cierpliwości, wytrwałości i szacunku dla swojego ciała.
                     Jednocześnie jest lekcją pokory wobec nieznanej nam wiedzy, wymagającą naszego zaangażowania i  pracy, jeśli chcemy rozwijać się
                     w tym wyjątkowym tańcu. Poprzez pracę z emocjami i wysiłek fizyczny pozwala  uwolnić się od napięć i
                     skupić się na samej sobie - tym, co czuje nasze ciało -  na  własnych odczuciach, emocjach.
                     Taniec w gronie innych kobiet toskonale wpływa na nasz nastrój i samopoczucie, pozwala rozwijać swą pasję , mieć satysfakcje
                     z osobistych postępów, a nawet dzielić się nią  podczas wspólnych występów na scenie, czy tanecznym parkiecie.
                  </p>
                  
                  <div style={{margin: '0 auto'}}>
                     <img src={paragraphOrnament} className="paragraphOrnament" style={{marginTop: '0'}} alt="" />
                  </div>

                  <div data-aos="zoom-in" data-aos-duration="1000" className="zajeciaImageCont">
                     <img alt="" src={zajeciaPlakat} />
                  </div>

               </div>   
            </article>
         </div>
      </section>
   )
}