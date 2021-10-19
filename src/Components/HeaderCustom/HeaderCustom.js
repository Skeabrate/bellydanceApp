import "./HeaderCustom.css"
import { useRef, useEffect } from "react"

export default function HeaderCustom ({setHeaderCustomRef, headerStyle}) { 
   const headerScrollPosRef = useRef(null)

   useEffect(() => {
      window.scrollTo(0, 0)
      setHeaderCustomRef(headerScrollPosRef.current)
   }, [])  

   return (
      <div className={`headerBackground ${headerStyle}`}>
         <div className="headerScrollPos" ref={headerScrollPosRef}></div>
      </div>
   )
}