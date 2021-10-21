import Socials from "../Socials/Socials"
import Facebook from "../../Assets/SocialSVGs/facebookTransparent.png"
import Instagram from "../../Assets/SocialSVGs/instagramTransparent.png"
import YouTube from "../../Assets/SocialSVGs/youtubeTransparent.png"
import "./Footer.css"

const Footer = () => {
   const socialsData = [
      {
         id: 1,
         link: 'https://www.youtube.com/user/LeylaWloclawek/videos',
         social: YouTube,
      },
      {
         id: 2,
         link: 'https://www.facebook.com/agnieszka.swieczkowska.9',
         social: Facebook,
      },
      {
         id: 3,
         link: 'https://www.instagram.com/bellydance_leyla/',
         social: Instagram,
      },
   
   ]

   return (
      <footer className="footerStyle">
         <div className="logo" style={{color: 'black', textShadow: 'none'}}>Leyla Bellydance</div>
         <div className="footerKontakt">
            <Socials 
               socialsData={socialsData}
               classList="footerSocialsList"
               classLink="footerSocialsLink"
               classSocial="footersocialImg"
            />
         </div>
         <div>&copy; {(new Date().getFullYear())} Sebastian Świeczkowski All rights reserved</div>
         <div></div>
         <div>
            {`Icons made by `} 
            <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
            {`, `}
            <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a>
            {`, `}
            <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/authors/ruslan-babkin" title="Ruslan Babkin">Ruslan Babkin</a>
            {`, `}
            <a target="_blank" rel="noreferrer" href="https://www.freepik.com" title="Freepik">Freepik</a>
            {` from `}
            <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
         </div>
         <a target="_blank" rel="noreferrer" href='https://pngtree.com/so/gold'>gold png from pngtree.com/</a>
      </footer>
   )
}

export default Footer