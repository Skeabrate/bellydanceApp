import { useEffect } from "react"
import paragraphOrnament from "../../Assets/Images/Daco_40936 (1).png"
import Aos from "aos"
import "aos/dist/aos.css"
import { paragraphData } from './AboutMeData'
import Galery from "../../Components/Galery/Galery"

import { StyledPageTitle } from "../../Components/PageTitle/PageTitle.styles"
import { StyledAlladinLamp, StyledTextOrnament } from "../../GlobalStyles.styles"
import { StyledContainer, StyledArticleWrapper, StyledArticle, StyledParagraphContainer, StyledParagraph, StyledOrnament } from "./AboutMe.styles"

export default function AboutMe(){
   useEffect(() => {
      Aos.init({ duration: 500, once: true, })
   }, [])  
   
   return (
      <StyledContainer>
         
         <section>
            <header>
               <StyledPageTitle isTitle data-aos="zoom-in">O mnie</StyledPageTitle>
            </header>

            {paragraphData.map(paragraph => (
               <StyledArticleWrapper key={paragraph.text}>
                  <StyledArticle isFirst={paragraph === paragraphData[0]} isSecond={paragraph === paragraphData[1]}>
                     <StyledParagraphContainer isSecond={paragraph === paragraphData[1]}>
                        <StyledParagraph isFirst={paragraph === paragraphData[0]}>
                           {paragraph === paragraphData[0] ? (
                              <ul style={{ listStyle: 'none' }}>
                                 {paragraph.text.map(item => (
                                    <li key={item} data-aos="fade-left" style={{ padding: '15px 0' }}><StyledAlladinLamp></StyledAlladinLamp>{item}</li>
                                 ))}
                              </ul>
                           ) : (
                              <>{paragraph.text}</>
                           )}
                        </StyledParagraph>

                        <StyledOrnament isFirst={paragraph === paragraphData[1]}>
                           <StyledTextOrnament src={paragraphOrnament} alt="TextOrnament" />
                        </StyledOrnament>
                     </StyledParagraphContainer>

                     <Galery imagesData={paragraph.img} displayTitle={paragraph.title} label={paragraph.label} />

                  </StyledArticle>
               </StyledArticleWrapper>
            ))}

         </section>
      </StyledContainer>
   )
}