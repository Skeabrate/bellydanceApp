import { useEffect, useState, useRef } from "react"
import zajeciaPlakat from "../../Assets/Zajecia/zajeciaOgloszenie.jpg"
import zajeciaFooterImg from "../../Assets/Zajecia/zajeciaFooter.jpg"
import paragraphOrnament from "../../Assets/Images/ornParag.png"
import PageTitle from "../../Components/PageTitle/PageTitle"
import Galery from "../../Components/Galery/Galery"
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen"
import { imgLoad } from "../../helpers/imgLoad"
import Aos from "aos"
import "aos/dist/aos.css"

import { StyledOrnament, StyledAsset, StyledScrollTo, StyledText, StyledTextContainer, StyledTextOrnament, StyledWrapper, StyledParagraph, StyledContainer } from "../../GlobalStyles.styles"
import { StyledAlladinLamp } from "../../GlobalStyles.styles"
import { StyledHeader, StyledTextHeader } from "./Zajecia.styles"
import ScrollButton from "../../Components/ScrollButton/ScrollButton"

const HEADER_TITLE = "Taniec orientalny jest dla każdej z nas ♥"

export default function Aktualnosci() {
   const [showContent, setShowContent] = useState(false)

   const headerBackgroundRef = useRef(null)
   const scrollRef = useRef(null)

   useEffect(() => {
      document.title = "Zajęcia taneczne - Leyla Bellydance"
      window.scrollTo(0, 0)
      Aos.init({ duration: 500, once: true, })

      var image = document.createElement('img')
      image.src = imgLoad(headerBackgroundRef.current) 
      image.onload = function() {
         setShowContent(true)
      }
   }, [])

   return (
      <>
         {!showContent ? <LoadingScreen /> : null}
         <section>
            <StyledHeader ref={headerBackgroundRef}>
               <StyledScrollTo ref={scrollRef} />
               <ScrollButton isVisible scrollRef={scrollRef.current}/>
            </StyledHeader>

            <PageTitle
               title={HEADER_TITLE}
               showH1
               titleH2="Bez względu na wiek, predyspozycje fizyczne, czy wcześniejszą aktywność ruchową, każda z Pań może rozpocząć naukę tańca belly dance."
               displayOrns={true}
               showBorder
            />

            <StyledTextHeader>
               <StyledParagraph data-aos="fade-left">
                  <StyledAlladinLamp></StyledAlladinLamp>
                  Prowadząc zajęcia zwracam uwagę na szlifowanie techniki, pracuję nad gracją, zmysłowością i poprawą kondycji oraz rzeźby każdej z ćwiczących pań.
               </StyledParagraph>

               <StyledParagraph data-aos="fade-left">
                  <StyledAlladinLamp></StyledAlladinLamp>
                  Uczę ich różnych styli tańca orientalnego, poszerzając ich wiedzę teoretyczną i praktyczną w zakresie tańca arabskiego.
               </StyledParagraph>

               <StyledParagraph data-aos="fade-left">
                  <StyledAlladinLamp></StyledAlladinLamp>
                  Do każdej swojej tancerki staram się podchodzić w sposób zindywidualizowany, pomagając dostrzec swe predyspozycje i rozwijać możliwości.
               </StyledParagraph>

               <StyledParagraph data-aos="fade-left">
                  <StyledAlladinLamp></StyledAlladinLamp>
                  Czas poświecony na taniec brzucha przynosi nam wymierne korzyści zarówno dla ciała, psychiki i naszej duszy.
               </StyledParagraph>
            </StyledTextHeader>

            <StyledWrapper>
               <StyledContainer>
                  <StyledTextContainer>
                     <StyledText>
                        <h3 style={{marginBottom: '10px'}}>Dzięki zajęciom tańca brzucha możemy:</h3>
                        <ul style={{ listStyle: 'none' }}>
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

                     </StyledText>

                     <StyledOrnament>
                        <StyledTextOrnament src={paragraphOrnament} alt="" />
                     </StyledOrnament>
                  </StyledTextContainer>

                  <Galery imagesData={[{ id: 0, url: zajeciaFooterImg }]} />

               </StyledContainer>
            </StyledWrapper>

            <StyledWrapper isSecond>
               <StyledContainer>
                  <StyledTextContainer isSecond>
                     <StyledText>
                        <StyledParagraph>
                           Dzieki wymaganej systematyczności w treningach taniec orientalny uczy nas cierpliwości, wytrwałości i szacunku dla swojego ciała.
                        </StyledParagraph>

                        <StyledParagraph>
                           Jednocześnie jest lekcją pokory wobec nieznanej nam wiedzy, wymagającą naszego zaangażowania i  pracy, jeśli chcemy rozwijać się
                           w tym wyjątkowym tańcu. Poprzez pracę z emocjami i wysiłek fizyczny pozwala  uwolnić się od napięć i
                           skupić się na samej sobie - tym, co czuje nasze ciało -  na  własnych odczuciach, emocjach.
                        </StyledParagraph>

                        <StyledParagraph>
                           Taniec w gronie innych kobiet toskonale wpływa na nasz nastrój i samopoczucie, pozwala rozwijać swą pasję , mieć satysfakcje
                           z osobistych postępów, a nawet dzielić się nią  podczas wspólnych występów na scenie, czy tanecznym parkiecie.
                        </StyledParagraph>
                     </StyledText>

                     <StyledTextOrnament src={paragraphOrnament} alt="" />

                  </StyledTextContainer>

                  <StyledAsset>
                     <Galery imagesData={[{ id: 0, url: zajeciaPlakat }]} />
                  </StyledAsset>

               </StyledContainer>
            </StyledWrapper>
         </section>
      </>
   )
}