import "./HeaderCustom.css"
import { useRef, useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export default function HeaderCustom ({setHeaderCustomRef, headerStyle}) { 
   const headerScrollPosRef = useRef(null)

   useEffect(() => {
      window.scrollTo(0, 0)
      setHeaderCustomRef(headerScrollPosRef.current)
      Aos.init({ duration: 500 })
   }, [])  

   return (
      <div data-aos="fade-in" className={`headerBackground ${headerStyle}`}>
         <div className="headerScrollPos" ref={headerScrollPosRef}></div>
      </div>
   )
}