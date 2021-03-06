import { useState, useEffect } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { StyledPageTitle } from "../PageTitle/PageTitle.styles";
import { StyledGalery ,StyledSelectedImg, StyledImage, StyledCloseWrapper, StyledIconWrapper } from "./Galery.styles";
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Galery({ imagesData = [], displayTitle, label }) {
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
      <>
         {imagesData.length > 0 ? (
            <div>
            {displayTitle ? (
               <StyledPageTitle isTitle>{label}</StyledPageTitle>
            ) : null}
      
            <StyledSelectedImg isOpen={selectImg}>
               {imagesData[current].url !== undefined ? (
                  <img alt="" src={imagesData[current].url}/>
               ) : null
               } 

               <StyledCloseWrapper>
                  <CloseIcon
                     onClick={() => setSelectImg(false)}
                  />
               </StyledCloseWrapper>


               <StyledIconWrapper>
                  <ArrowForwardIosIcon 
                     onClick={prevSlide}
                  />
               </StyledIconWrapper>


               <StyledIconWrapper>
                  <ArrowForwardIosIcon 
                     onClick={nextSlide}
                  />
               </StyledIconWrapper>

            </StyledSelectedImg>

            <StyledGalery isOne={classForOne} isTwo={classForTwo}>
               {imagesData.map(({id, url = {}, }) => (
                  <StyledImage
                     key={id}
                     onClick={() => getImg(id)}
                  >
                     <LazyLoadImage
                        effect="blur"
                        src={url}
                        alt=""
                     />
                  </StyledImage>
               ))}
            </StyledGalery>
         </div>
         ) : null}
      </>
   )
}