import "./HeaderCustom.css"
import { useRef, useEffect, useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { imgLoad } from "../../helpers/imgLoad"
import LoadingScreen from "../LoadingScreen/LoadingScreen"

export default function HeaderCustom ({setHeaderCustomRef, headerStyle }) { 
   const [showContent, setShowContent] = useState(false)

   const headerScrollPosRef = useRef(null)
   const headerBackgroundRef = useRef(null)


   useEffect(() => {
      window.scrollTo(0, 0)
      setHeaderCustomRef(headerScrollPosRef.current)
      Aos.init({ duration: 500 })

      var image = document.createElement('img')
      image.src = imgLoad(headerBackgroundRef.current) 
      image.onload = function() {
         setShowContent(true)
      }
   }, [])  

   return (
      <>
         {!showContent ? <LoadingScreen /> : null }
         <div ref={headerBackgroundRef} data-aos="fade-in" className={`headerBackground ${headerStyle}`}>
            <div className="headerScrollPos" ref={headerScrollPosRef}></div>
         </div>
      </>
   )
}