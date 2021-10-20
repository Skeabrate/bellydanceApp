import "./Galery.css"
import { useState, useEffect } from "react"
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Aos from "aos"
import "aos/dist/aos.css"

export default function Galery({ imagesData, displayTitle, label }) {
   const [selectImg, setSelectImg] = useState(false)
   const [current, setCurrent] = useState(0)

   // klasy dla 1 i 2 zdjec 
   const [classForOne, setClassForOne] = useState(false)
   const [classForTwo, setClassForTwo] = useState(false)

   const length = imagesData.length
   let newCurrent = 0

   useEffect(() => {
      if(length === 1) setClassForOne(true) 
      if(length === 2) setClassForTwo(true)

      Aos.init({duration: 500, debounceDelay: 200 })
   }, []) 

   useEffect(() => {
      newCurrent = current
   }, [current])


   // Obsulga zdjec
   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1) 
   }

   const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
   }

   const getImg = ( id ) => {
      setCurrent(parseInt(id))
      setSelectImg(true) 
   }


   // Obsluga klawiszy
   useEffect(() => {
      const abortCont = new AbortController()
      const { signal } = abortCont

      if(selectImg) document.addEventListener('keydown', (e) => {
         if(e.keyCode === 27) setSelectImg(false)
         if(e.keyCode === 39) {
            if(newCurrent === length - 1){
               newCurrent = 0
            } else {
               newCurrent += 1
            }
            return setCurrent(newCurrent) 
         }
         if(e.keyCode === 37) {
            if(newCurrent === 0){
               newCurrent = length - 1
            } else {
               newCurrent -= 1
            }
            return setCurrent(newCurrent)
         }
      }, {signal: signal})
      else document.removeEventListener('keydown', () => {})

      return () => {
         abortCont.abort()
      }
   }, [selectImg, current])

   
   return (
      <div>
         {displayTitle ? (
            <h2 data-aos="zoom-in" className="galeryHeader">{label}</h2>
         ) : null}
   
         <div className={`selectImg ${selectImg ? "open" : null}`}>
            {imagesData[current].imgSrc !== undefined ? (
               <img alt="" src={imagesData[current].imgSrc}/>
            ) : null
            } 
            
            <CloseIcon
               className="closeIcon"
               onClick={() => setSelectImg(false)}
            />
            <ArrowBackIosIcon 
               className="leftIcon" 
               onClick={prevSlide}
            />
            <ArrowForwardIosIcon 
               className="rightIcon" 
               onClick={nextSlide}
            />
         </div>
         <div className={`galery ${classForOne ? 'galeryForOne' : null} ${classForTwo ? 'galeryForTwo' : null}`}>
            {imagesData.map(image => (
               <div 
                  className='galeryImage'
                  key={image.id}
                  onClick={() => getImg(image.id)}
               >
                  <img
                     src={image.imgSrc}
                     alt=""
                  />
               </div>
            ))}
         </div>
      </div>
   )
}