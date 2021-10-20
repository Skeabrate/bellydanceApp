import "./AboutMe.css"
import { useEffect, useRef } from "react"
import paragraphOrnament from "../../Assets/Images/Daco_40936 (1).png"
import Aos from "aos"
import "aos/dist/aos.css"
import Galery from "../../Components/Galery/Galery"
import Img1 from "../../Assets/O mnie/1781858_508677732582657_543189622_o.jpg"
import Img2 from "../../Assets/O mnie/241635603_4321978131252579_5802682755729074331_n.jpg"
import Img3 from "../../Assets/O mnie/242441948_4365331123583946_990698166353954655_n.jpg"
import Img4 from "../../Assets/O mnie/474836_393086987475066_88157261_o.jpg"
import imgDyploms1 from "../../Assets/O mnie/slajd3/244652845_592772605478956_4791335255023541151_n.jpg"
import imgDyploms2 from "../../Assets/O mnie/slajd3/244712496_252147136870490_6484233968903017720_n.jpg"
import imgDyploms3 from "../../Assets/O mnie/slajd3/244985410_209138251320952_1701331889967227977_n.jpg"
import imgDyploms4 from "../../Assets/O mnie/slajd3/244999310_3088782831406809_4395760513778321234_n.jpg"
import imgDyploms5 from "../../Assets/O mnie/slajd3/245363477_1051494192274733_4590789761162204427_n.jpg"
import imgDyploms6 from "../../Assets/O mnie/slajd3/245408200_196576039283551_740038903917513075_n.jpg"
import imgDyploms7 from "../../Assets/O mnie/slajd3/245439860_897864857500320_3652354743338706401_n.jpg"
import imgDyploms8 from "../../Assets/O mnie/slajd3/245497733_4605346046154982_6930266027229283329_n.jpg"
import imgDyploms9 from "../../Assets/O mnie/slajd3/246648210_407646917405422_5343308388623484731_n.jpg"
import imgDyploms10 from "../../Assets/O mnie/slajd3/246791318_227675642759787_448839878675796262_n.jpg"

const paragraphData = [
   {
      text: [
         "Agnieszka Leyla Świeczkowska posiada państwowe uprawnienia do wykonywania zawodu instruktora belly dance.",
         "Jest dyplomowaną Instruktorką Tańca Sportowego o specjalności belly danceoraz dyplomowanym Instruktorem Sportu.",
         "Swoją technikę taneczną nieustannie rozwija, uczestnicząc w warsztatach prowadzonych przez wybitnych nauczycieli tańca orientalnego.",
         "Naucza różnych odmian tańca orientalnego. Prowadząc własne zajęcia zwraca uwagę na szlifowanie techniki, pracuje nad gracją i poprawą kondycji oraz sylwetki każdej z ćwiczących pań.",
      ],
      img: [
         {
            id: 0,
            imgSrc: Img4,
         },
         {
            id: 1,
            imgSrc: Img1,
         },
      ],
   },
   {
      text: `Agnieszka Leyla Świeczkowska posiada państwowe uprawnienia do wykonywania zawodu instruktora 
      belly dance. Jest dyplomowaną Instruktorką Tańca Sportowego o specjalności belly dance
      oraz dyplomowanym Instruktorem Sportu. Swoją technikę taneczną nieustannie rozwija, 
      uczestnicząc w warsztatach prowadzonych przez wybitnych nauczycieli tańca orientalnego. 
      Naucza różnych odmian tańca orientalnego. Prowadząc własne zajęcia zwraca uwagę na 
      szlifowanie techniki, pracuje nad gracją i poprawą kondycji oraz sylwetki każdej z 
      ćwiczących pań.`,
      img: [
         {
            id: 0,
            imgSrc: Img2,
         },
         {
            id: 1,
            imgSrc: Img3,
         },
      ],
   },
   {
      text: `Swoją technikę taneczną nieustannie rozwijam uczestnicząc w największych festiwalach tanecznych i warsztatach prowadzonych przez wybitnych nauczycieli i 
      żyjących legend tańca orientalnego, m.in: Lubna Emam, Kazafy, Khaled Mahmoud, Tito, Randa Kamel, Camelia, Hosseny El Masry, Beata & Horacio Cifuentes, 
      Bozenka, Mercedes Nieto, Margarita Darina.`,
      img: [
         {
            id: 0,
            imgSrc: imgDyploms1,
         },
         {
            id: 1,
            imgSrc: imgDyploms2,
         },
         {
            id: 2,
            imgSrc: imgDyploms3,
         },
         {
            id: 3,
            imgSrc: imgDyploms4,
         },
         {
            id: 4,
            imgSrc: imgDyploms5,
         },
         {
            id: 5,
            imgSrc: imgDyploms6,  
         },
         {
            id: 6,
            imgSrc: imgDyploms7,
         },
         {
            id: 7,
            imgSrc: imgDyploms8,
         },
         {
            id: 8,
            imgSrc: imgDyploms9,
         },
         {
            id: 9,
            imgSrc: imgDyploms10,
         },
      ],
      title: true,
      label: '♥ Wspieram ♥',
   },
]

export default function AboutMe({setAboutMeRef, setAboutMeRefSCroll}){

   const aboutMeRef = useRef(null)
   
   useEffect(() => {
      setAboutMeRef(aboutMeRef.current)
      setAboutMeRefSCroll(aboutMeRef.current.getBoundingClientRect().top)
      Aos.init({ duration: 500 })
   }, [])  
   
   return (
      <>
         <div className="AboutMe_Container" >
            <div style={{
               width: '100%',
               height: '60px',
               position: 'absolute',
               top: '-60px'
            }} id="AboutMeId" ref={aboutMeRef}></div> {/* cheat div to fix scroll bug */}



            <section className="AboutMe_Section">
               <header>
                  <h1 data-aos="zoom-in" className="pageTitle AboutMe_h1">O mnie</h1>
               </header>

               {paragraphData.map(paragraph => (
                  <article key={paragraph.text} className="AboutMe_wraper">
                     <div className={`${paragraph === paragraphData[1] ? 'SecondArticle' : null} AboutMe_article`}>

                        <div className={`${paragraph === paragraphData[1] ? 'SecondParagraphContainer' : null}`}>
                           <div className={`${paragraph === paragraphData[0] ? 'FirstParagraph' : null} AboutMe_paragraph`} >
                              {paragraph === paragraphData[0] ? (
                                 <ul style={{ listStyle: 'none' }}>
                                    {paragraph.text.map(item => (
                                       <li key={item} data-aos="fade-left" style={{ padding: '15px 0' }}><span className="lampaAlladyna"></span>{item}</li>
                                    ))}
                                 </ul>
                              ) : (
                                 <>{paragraph.text}</>
                              )}

                           </div>

                           <div className={`${paragraph === paragraphData[1] ? 'paragrahOrnament_aboutMe_container' : null}`} style={{ textAlign: 'center' }}>
                              <img src={paragraphOrnament} className={`${paragraph === paragraphData[2] ? 'paragraphOrnamentNoMargin' : null} paragraphOrnament`} alt="" />
                           </div>
                        </div>

                        <Galery imagesData={paragraph.img} displayTitle={paragraph.title} label={paragraph.label} />

                     </div>
                  </article>
               ))}

               
               {/* <article className="AboutMe_wraper">
                  <div className={`AboutMe_article_galery`}>
                     <h1 className="pageTitle AboutMe_h1">Moja edukacja taneczna</h1>
                     <div></div>
                  </div>
               </article> */}

            </section>
         </div>
      </>
   )
}