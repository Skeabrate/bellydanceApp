import "./Kontakt.css"
import { useEffect } from "react"
import HeaderCustom from "../../Components/HeaderCustom/HeaderCustom"
import Instagram from "../../Assets/SocialSVGs/instagram.png"
import Facebook from "../../Assets/SocialSVGs/facebook.png"
import YouTube from "../../Assets/SocialSVGs/youtube.png"
import Email from "../../Assets/SocialSVGs/gmail.png"
import TelNum from "../../Assets/SocialSVGs/telephone.png"
import Aos from "aos"
import "aos/dist/aos.css"
import Socials from "../../Components/Socials/Socials"

const socialsData = [
   {
      id: 1,
      type: 'Agnieszka Leyla Świeczkowska',
      link: 'https://www.facebook.com/agnieszka.swieczkowska.9',
      social: Facebook,
      fade: "fade-right",
   },
   {
      id: 2,
      type: '@bellydance_leyla',
      link: 'https://www.instagram.com/bellydance_leyla/',
      social: Instagram,
      fade: "fade-left",
   },
   {
      id: 3,
      type: 'Belly dance Włocławek - taniec orientalny z Leylą',
      link: 'https://www.facebook.com/bellydancewloclawek',
      social: Facebook,
      fade: "fade-right",
   },
   {
      id: 4,
      type: 'Agnieszka Leyla Świeczkowska',
      link: 'https://www.youtube.com/user/LeylaWloclawek/videos',
      social: YouTube,
      fade: "fade-left",
   },
   {
      id: 5,
      type: 'biuro@infraline.pl  ',
      link: `mailto:'biuro@infraline.pl'`,
      social: Email,
      fade: "fade-right",
   },
   {
      id: 6,
      type: 'Tel. 502 505 119',
      link: `tel:'502 505 119'`,
      social: TelNum,
      fade: "fade-left",
   },
   
]

export default function Kontakt({setHeaderCustomRef}) {

   useEffect(() => {
      document.title = "Kontakt - Leyla Bellydance"
      window.scrollTo(0, 0)
      Aos.init({duration: 500, debounceDelay: 200, once: true,})
   }, [])

   return (
      <section>
         <HeaderCustom headerStyle="headerKontakt" setHeaderCustomRef={setHeaderCustomRef}/>
         <article className="kontaktContainer">
            <div className="kontaktInfo">

               <h1 data-aos="zoom-in" className="kontaktTitle">Kontakt</h1>

               <Socials 
                  socialsData={socialsData}
                  classList={"kontaktList"}
                  classItem={"kontaktListItem"}
                  classLink={"kontaktListItemSocial"}
                  classSocial={"socialImg"}
               />

            </div>
         </article>
      </section>
      
   )
}