import "./Header.css"
import { NavLink, Link } from "react-router-dom"
import { useEffect, useRef, useState, useMemo } from "react"

const Header = ({aboutMeRef, aboutMeRefScroll ,headerCustomRef}) => {
   const [toggle, setToggle] = useState(false)
   const [headerToggle, setHeaderToggle] = useState(true)

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

      if(aboutMeRef) observer.observe(aboutMeRef)

      return () => {
         if(aboutMeRef) {
            observer.unobserve(aboutMeRef)
         }
      }
   }, [aboutMeRef, options])


   useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options)

      if(headerCustomRef) observer.observe(headerCustomRef)

      return () => { 
         if(headerCustomRef) {
            observer.unobserve(headerCustomRef)
         }
      }
   }, [headerCustomRef, options])

   //// Functions
   const scrollFunc = (point) => {
      setToggle(false)
      window.scrollTo({
         top: point,
         behavior: 'smooth',
      }) 
   }

   const goToAboutMe = () => scrollFunc(aboutMeRefScroll)
   
   const changeUrlHandler = () => scrollFunc(0)

   const toggleMenu = () => {
      if(toggle === false){
         return setToggle(true)
      } else {
         return setToggle(false)
      }
   }

   return (
      <header>
         <div className={`Header_Nav`} ref={headerRef}>
            <div className={`Header_Nav_Background ${!headerToggle ? 'Header_Nav_Changecolor' : null}`}></div>

            <Link to="/" className="logo" onClick={changeUrlHandler}>Leyla Bellydance</Link>

            <nav>
               <button className="hamburger" onClick={toggleMenu}>
                  <span className="hamburger__box">
                     <span className={`hamburger__inner__after ${toggle ? 'hamburger__inner__afterClose' : null}`}></span>
                     <span className={`hamburger__inner ${toggle ? 'hamburger__innerClose' : null}`}></span>
                     <span className={`hamburger__inner__before ${toggle ? 'hamburger__inner__beforeClose' : null}`}></span>
                  </span>
               </button>


               <ul className={`navList ${toggle ? `toggledMenu` : null}`}>
                  {/* <NavLink exact to="/" onClick={goToAboutMe} className="navItem" activeClassName="activeNavItem">O mnie</NavLink> */}
                  <NavLink to="/Aktualności" className="navItem" activeClassName="activeNavItem" onClick={changeUrlHandler}>Aktualności</NavLink>
                  <NavLink to="/Pokazy" className="navItem" activeClassName="activeNavItem" onClick={changeUrlHandler}>Pokazy</NavLink>
                  <NavLink to="/Zajęcia" className="navItem" activeClassName="activeNavItem" onClick={changeUrlHandler}>Zajęcia taneczne</NavLink>
                  <NavLink to="/Kontakt" className="navItem" activeClassName="activeNavItem" onClick={changeUrlHandler}>Kontakt</NavLink>
               </ul>
            </nav>
         </div>


      </header>
   )
}

export default Header