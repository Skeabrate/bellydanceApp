import { useEffect, useRef, useState, useMemo } from "react"
import { StyledHeader, StyledHeaderBackground, StyledLogo, StyledNavItem, StyledNav, StyledHamburger, StyledHamburgerInner, StyledHamburgerWrapper } from "./Header.styles"

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
               <StyledHamburger onClick={toggleMenu}>
                  <StyledHamburgerWrapper>
                     <StyledHamburgerInner isToggled={toggle}></StyledHamburgerInner>
                  </StyledHamburgerWrapper>
               </StyledHamburger>


               <StyledNav isToggled={toggle}>
                  <StyledNavItem isToggled={headerToggle} exact to="/" onClick={changeUrlHandler}>Home</StyledNavItem>
                  <StyledNavItem isToggled={headerToggle} to="/Aktualności" onClick={changeUrlHandler}>Aktualności</StyledNavItem>
                  <StyledNavItem isToggled={headerToggle} to="/Pokazy" onClick={changeUrlHandler}>Pokazy</StyledNavItem>
                  <StyledNavItem isToggled={headerToggle} to="/Zajęcia" onClick={changeUrlHandler}>Zajęcia taneczne</StyledNavItem>
                  <StyledNavItem isToggled={headerToggle} to="/Kontakt" onClick={changeUrlHandler}>Kontakt</StyledNavItem>
               </StyledNav>
            </nav>
         </StyledHeader>


      </header>
   )
}

export default Header