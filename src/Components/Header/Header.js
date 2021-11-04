import "./Header.css"
import { NavLink } from "react-router-dom"
import { useEffect, useRef, useState, useMemo } from "react"
import { StyledHeader, StyledHeaderBackground, StyledLogo } from "./Header.styles"

const Header = () => {
   const [toggle, setToggle] = useState(false)
   const [headerToggle, setHeaderToggle] = useState(true)

   const headerPosition = useRef()

   const headerRef = useRef()

   const callbackFunction = entries => {
      const [entry] = entries
      setHeaderToggle(entry.isIntersecting)
   }

   const options = useMemo(() => {
      return {
         root: null,
         rootMargin: '0px',
         threshold: 1,
      }
   }, [])
   
   useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options)
      if(headerPosition.current) observer.observe(headerPosition.current)

      return () => {
         if(headerPosition.current) {
            observer.unobserve(headerPosition.current)
         }
      }
   }, [headerPosition.current, options])

   //// Functions
   const scrollFunc = (point) => {
      setToggle(false)
      window.scrollTo({
         top: point,  
      }) 
   }

   const changeUrlHandler = () => scrollFunc(0)

   const toggleMenu = () => {
      setToggle(!toggle)
   }

   return (
      <header>
         <div style={{
        width: '100%',
        height: '50px',
        position: 'absolute',
        top: '0px',
      }} ref={headerPosition}></div>
         <StyledHeader ref={headerRef} isToggled={headerToggle}>
            <StyledHeaderBackground isToggled={headerToggle}></StyledHeaderBackground>

            <StyledLogo isToggled={headerToggle} to="/" onClick={changeUrlHandler}>Leyla Bellydance</StyledLogo>

            <nav>
               <button className="hamburger" onClick={toggleMenu}>
                  <span className="hamburger__box">
                     <span className={`hamburger__inner__after ${toggle ? 'hamburger__inner__afterClose' : null}`}></span>
                     <span className={`hamburger__inner ${toggle ? 'hamburger__innerClose' : null}`}></span>
                     <span className={`hamburger__inner__before ${toggle ? 'hamburger__inner__beforeClose' : null}`}></span>
                  </span>
               </button>


               <ul className={`navList ${toggle ? `toggledMenu` : null}`}>
                  <NavLink exact to="/" className="navItem" onClick={changeUrlHandler}>Home</NavLink>
                  <NavLink to="/Aktualności" className="navItem" onClick={changeUrlHandler}>Aktualności</NavLink>
                  <NavLink to="/Pokazy" className="navItem" onClick={changeUrlHandler}>Pokazy</NavLink>
                  <NavLink to="/Zajęcia" className="navItem" onClick={changeUrlHandler}>Zajęcia taneczne</NavLink>
                  <NavLink to="/Kontakt" className="navItem" onClick={changeUrlHandler}>Kontakt</NavLink>
               </ul>
            </nav>
         </StyledHeader>


      </header>
   )
}

export default Header