import "./PageTitle.css"
import headerOrnament from "../../Assets/Images/kontaktRamkaKpia.png"
import headerOrnamentDown from "../../Assets/Images/kontaktRamkaKulki.png"

export default function PageTitle({title, titleH2, style, displayOrns}) {
   return (
      <header>
         <div className={`pageTitleContainer ${style}`}>
            {displayOrns ? (
               <img data-aos="zoom-in" className="pageTitleOrnament" alt="" src={headerOrnament} />
            ) : null}
            
            <h1 data-aos="fade-right" className="pageTitle">{title}</h1>
            {titleH2 !== null ? (
               <h2 data-aos="fade-left" className="pageTitleH2">{titleH2}</h2>
            ) : null}

            {displayOrns ? (
               <img data-aos="zoom-in" className="pageTitleOrnamentDown" alt="" src={headerOrnamentDown} />
            ) : null}
         </div>
      </header>
   )
}