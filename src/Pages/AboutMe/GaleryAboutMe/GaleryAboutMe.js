import Galery from "../../../Components/Galery/Galery";
import img1 from "../../../Assets/O mnie/slajd3/244652845_592772605478956_4791335255023541151_n.jpg"
import img2 from "../../../Assets/O mnie/slajd3/244712496_252147136870490_6484233968903017720_n.jpg"
import img3 from "../../../Assets/O mnie/slajd3/244985410_209138251320952_1701331889967227977_n.jpg"
import img4 from "../../../Assets/O mnie/slajd3/244999310_3088782831406809_4395760513778321234_n.jpg"
import img5 from "../../../Assets/O mnie/slajd3/245363477_1051494192274733_4590789761162204427_n.jpg"
import img6 from "../../../Assets/O mnie/slajd3/245408200_196576039283551_740038903917513075_n.jpg"
import img7 from "../../../Assets/O mnie/slajd3/245439860_897864857500320_3652354743338706401_n.jpg"
import img8 from "../../../Assets/O mnie/slajd3/245497733_4605346046154982_6930266027229283329_n.jpg"
import img9 from "../../../Assets/O mnie/slajd3/246648210_407646917405422_5343308388623484731_n.jpg"
import img10 from "../../../Assets/O mnie/slajd3/246791318_227675642759787_448839878675796262_n.jpg"

const aboutMeImages = [
   {
      id: 0,
      imgSrc: img1,
   },
   {
      id: 1,
      imgSrc: img2,
   },
   {
      id: 2,
      imgSrc: img3,
   },
   {
      id: 3,
      imgSrc: img4,
   },
   {
      id: 4,
      imgSrc: img5,
   },
   {
      id: 5,
      imgSrc: img6,  
   },
   {
      id: 6,
      imgSrc: img7,
   },
   {
      id: 7,
      imgSrc: img8,
   },
   {
      id: 8,
      imgSrc: img9,
   },
   {
      id: 9,
      imgSrc: img10,
   },
]

export default function GaleryAboutMe() {
   return (
      <div style={{marginBottom: '10vh'}}>
         <Galery imagesData={aboutMeImages} displayTitle={true} label="♥ Wspieram ♥" />
      </div>
   )
}