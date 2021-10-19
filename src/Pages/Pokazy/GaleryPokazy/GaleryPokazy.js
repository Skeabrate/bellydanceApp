import Galery from "../../../Components/Galery/Galery"
import img1 from "../../../Assets/Pokazy/img1.jpg"
import img2 from "../../../Assets/Pokazy/img2.jpg"
import img3 from "../../../Assets/Pokazy/img3.jpg"
import img4 from "../../../Assets/Pokazy/img4.jfif"
import img5 from "../../../Assets/Pokazy/img5.jpg"
import img6 from "../../../Assets/Pokazy/img6.jpg"
import img7 from "../../../Assets/Pokazy/img7.jpg"
import img8 from "../../../Assets/Pokazy/img8.jpg"
import img9 from "../../../Assets/Pokazy/img9.jpg"
import img10 from "../../../Assets/Images/banery/plakat Agnus.jpg"

const pokazyImages = [
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

export default function GaleryPokazy() {
   return (
      <div style={{marginBottom: '10vh'}}>
         <Galery imagesData={pokazyImages} displayTitle={true} label="Galeria" />
      </div>
   )
}