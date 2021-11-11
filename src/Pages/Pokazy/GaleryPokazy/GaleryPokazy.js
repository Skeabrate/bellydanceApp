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
import img10 from "../../../Assets/Images/banery/plakatAgnus-min.jpg"

const pokazyImages = [
   {
      id: 0,
      url: img1,
   },
   {
      id: 1,
      url: img2,
   },
   {
      id: 2,
      url: img3,
   },
   {
      id: 3,
      url: img4,
   },
   {
      id: 4,
      url: img5,
   },
   {
      id: 5,
      url: img6,  
   },
   {
      id: 6,
      url: img7,
   },
   {
      id: 7,
      url: img8,
   },
   {
      id: 8,
      url: img9,
   },
   {
      id: 9,
      url: img10,
   },
]

export default function GaleryPokazy() {
   return (
      <div style={{marginBottom: '10vh'}}>
         <Galery imagesData={pokazyImages} displayTitle={true} label="Galeria" />
      </div>
   )
}