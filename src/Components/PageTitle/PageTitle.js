import "./PageTitle.css"
import headerOrnament from "../../Assets/Images/kontaktRamkaKpia.png"
import headerOrnamentDown from "../../Assets/Images/kontaktRamkaKulki.png"

export default function PageTitle({title, titleH2, style, displayOrns}) {
   return (
      <header>
         <div className={`pageTitleContainer ${style}`}>
            {displayOrns ? (
               <img data-aos="zoom-in" data-aos-once="false" className="pageTitleOrnament" alt="" src={headerOrnament} />
            ) : null}
            
            <h1 data-aos="fade-right" data-aos-once="false" className="pageTitle">{title}</h1>
            {titleH2 !== null ? (
               <h2 data-aos="fade-left" data-aos-once="false" className="pageTitleH2">{titleH2}</h2>
            ) : null}

            {displayOrns ? (
               <img data-aos="zoom-in" data-aos-once="false" className="pageTitleOrnamentDown" alt="" src={headerOrnamentDown} />
            ) : null}
         </div>
      </header>
   )
}