import './App.css';
import Footer from './Components/Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react';
import NotFound from './Pages/404/NotFound';
import PuffLoader from "react-spinners/PuffLoader"

const Homepage = lazy(() => import('./Pages/Homepage/Homepage'))
const Header = lazy(() => import('./Components/Header/Header'))
const AboutMe = lazy(() => import('./Pages/AboutMe/AboutMe'))
const Aktualnosci = lazy(() => import('./Pages/Aktualnosci/Aktualnosci'))
const Pokazy = lazy(() => import('./Pages/Pokazy/Pokazy'))
const Zajecia = lazy(() => import('./Pages/Zajecia/Zajecia'))
const Kontakt = lazy(() => import('./Pages/Kontakt/Kontakt'))

function App() {
  const [aboutMeRef, setAboutMeRef] = useState('')
  const [headerCustomRef, setHeaderCustomRef] = useState('')

  const [aboutMeRefScroll, setAboutMeRefSCroll] = useState('')

  const content = (
    <Suspense 
      fallback={
      <div style={{
        backgroundColor: 'rgb(252, 244, 229)', 
        width: '100%', 
        height: '100vh', 
        position: 'absolute', 
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <PuffLoader size={100} color="rgb(255, 187, 0)" />
          
      </div>}
    >
      <Switch>
        <Route exact path="/">
          <Homepage />
          <AboutMe setAboutMeRef={setAboutMeRef} setAboutMeRefSCroll={setAboutMeRefSCroll}/>
        </Route>

        <Route path="/Aktualności">
          <Aktualnosci setHeaderCustomRef={setHeaderCustomRef}/>
        </Route>

        <Route path="/Pokazy">
          <Pokazy setHeaderCustomRef={setHeaderCustomRef}/>
        </Route>

        <Route path="/Zajęcia">
          <Zajecia setHeaderCustomRef={setHeaderCustomRef}/>
        </Route>

        <Route path="/Kontakt">
          <Kontakt setHeaderCustomRef={setHeaderCustomRef}/>
        </Route>

        <Route>
          <NotFound />
        </Route>
      
      </Switch>
    </Suspense>
  ) 

  return (
    <Suspense
      fallback={
        <div style={{
          backgroundColor: 'rgb(252, 244, 229)',
          width: '100%',
          height: '100vh',
          position: 'absolute',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <PuffLoader size={100} color="rgb(255, 187, 0)" />

        </div>}
    >
      <Router>
        <Header aboutMeRef={aboutMeRef} aboutMeRefScroll={aboutMeRefScroll} headerCustomRef={headerCustomRef} />
        {content}
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
