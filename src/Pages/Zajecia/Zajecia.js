import { useEffect, useState, useRef } from "react"
import zajeciaPlakat from "../../Assets/Zajecia/zajeciaOgloszenie.jpg"
import zajeciaFooterImg from "../../Assets/Zajecia/zajeciaFooter.jpg"
import paragraphOrnament from "../../Assets/Images/Daco_40936 (1).png"
import PageTitle from "../../Components/PageTitle/PageTitle"
import Galery from "../../Components/Galery/Galery"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import { imgLoad } from "../../helpers/imgLoad"

import { StyledTextOrnament } from "../../GlobalStyles.styles"
import { StyledAlladinLamp } from "../../GlobalStyles.styles"
import { StyledContainer, StyledHeader, StyledWrapper, StyledParagraph } from "./Zajecia.styles"

export default function Aktualnosci() {
   const [showContent, setShowContent] = useState(false)

   const headerBackgroundRef = useRef()

   useEffect(() => {
      document.title = "Zajęcia taneczne - Leyla Bellydance"
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
            <StyledHeader ref={headerBackgroundRef}></StyledHeader>
            
            <PageTitle
               title="Taniec orientalny jest dla każdej z nas ♥"
               titleH2="Bez względu na wiek, predyspozycje fizyczne, czy wcześniejszą aktywność ruchową, każda z Pań może rozpocząć naukę tańca belly dance."
               displayOrns={true}
               showBorder
            />

            <StyledContainer>
               <article>
                  <StyledWrapper>
                     <div>
                        <StyledParagraph>
                           Prowadząc zajęcia zwracam uwagę na szlifowanie techniki, pracuję nad gracją, zmysłowością i poprawą kondycji oraz rzeźby każdej z ćwiczących pań.
                        </StyledParagraph>

                        <StyledParagraph>
                           Uczę ich różnych styli tańca orientalnego, poszerzając ich wiedzę teoretyczną i praktyczną w zakresie tańca arabskiego.
                        </StyledParagraph>

                        <StyledParagraph>
                           Do każdej swojej tancerki staram się podchodzić w sposób zindywidualizowany, pomagając dostrzec swe predyspozycje i rozwijać możliwości.
                        </StyledParagraph>

                        <StyledParagraph>
                           Czas poświecony na taniec brzucha przynosi nam wymierne korzyści zarówno dla ciała, psychiki i naszej duszy.
                        </StyledParagraph>

                        <h3>Dzięki zajęciom tańca brzucha możemy:</h3>
                        <ul style={{listStyle: 'none'}}>
                           <li>
                              <StyledAlladinLamp></StyledAlladinLamp>
                              zniwelować ból pleców
                           </li>

                           <li>
                              <StyledAlladinLamp></StyledAlladinLamp>
                              poprawić  ogólną kondycję
                           </li>

                           <li>
                              <StyledAlladinLamp></StyledAlladinLamp>
                              wzmocnić mięśnie brzucha, miednicy, pleców, ramion i nóg. A im silniejsze mięśnie brzucha, to zdrowszy i bardziej odciążony kręgosłup!
                           </li>

                           <li>
                              <StyledAlladinLamp></StyledAlladinLamp>
                              usuwać wszelkie niedogodności związane z siedzącym trybem życia.
                           </li>

                           <li>
                              <StyledAlladinLamp></StyledAlladinLamp>
                              dzięki technice opartej na izolacji pogłębiać  świadomość ciała i polepszać koordynację ruchową.
                           </li>

                           <li>
                              <StyledAlladinLamp></StyledAlladinLamp>
                              pracując systematycznie nad  zwiększeniem zakresu ruchu w stawach, siłą mięśni i ich rozciąganiem, utrzymaniem ładnej, wyprostowanej sylwetki nabierać gracji, elegancji w codziennym ruchu
                           </li>

                           <li>
                              <StyledAlladinLamp></StyledAlladinLamp>
                              w sposób przyjemny pozbyć się zbędnych kilogramów - tańcząc w takt orientalnej muzyki spalamy ok. 500kc/h !
                           </li>
                        </ul>

                     </div>
                     <div style={{ textAlign: 'center', margin: '0 auto' }}>
                        <StyledTextOrnament src={paragraphOrnament} alt="" />
                     </div>

                     <Galery imagesData={[{ id: 0, imgSrc: zajeciaFooterImg }]} />

                  </StyledWrapper>
               </article>

               <article>
                  <StyledWrapper style={{ borderRight: 'none', borderBottom: 'none' }}>
                     <StyledParagraph>
                        Dzieki wymaganej systematyczności w treningach taniec orientalny uczy nas cierpliwości, wytrwałości i szacunku dla swojego ciała.
                        Jednocześnie jest lekcją pokory wobec nieznanej nam wiedzy, wymagającą naszego zaangażowania i  pracy, jeśli chcemy rozwijać się
                        w tym wyjątkowym tańcu. Poprzez pracę z emocjami i wysiłek fizyczny pozwala  uwolnić się od napięć i
                        skupić się na samej sobie - tym, co czuje nasze ciało -  na  własnych odczuciach, emocjach.
                        Taniec w gronie innych kobiet toskonale wpływa na nasz nastrój i samopoczucie, pozwala rozwijać swą pasję , mieć satysfakcje
                        z osobistych postępów, a nawet dzielić się nią  podczas wspólnych występów na scenie, czy tanecznym parkiecie.
                     </StyledParagraph>

                     <div style={{ margin: '0 auto' }}>
                        <StyledTextOrnament src={paragraphOrnament} alt="" />
                     </div>

                     <Galery imagesData={[{ id: 0, imgSrc: zajeciaPlakat }]} />

                  </StyledWrapper>
               </article>
            </StyledContainer>
         </section>
      </>
   )
}