import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react';
import NotFound from './Pages/404/NotFound';
import AboutMe from './Pages/AboutMe/AboutMe';
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen"

const Homepage = lazy(() => import('./Pages/Homepage/Homepage'))
const Aktualnosci = lazy(() => import('./Pages/Aktualnosci/Aktualnosci'))
const Zajecia = lazy(() => import('./Pages/Zajecia/Zajecia'))
const Pokazy = lazy(() => import('./Pages/Pokazy/Pokazy'))
const Kontakt = lazy(() => import('./Pages/Kontakt/Kontakt'))


function App() {
  const [aboutMeRef, setAboutMeRef] = useState('')
  const [headerCustomRef, setHeaderCustomRef] = useState('')

  const [aboutMeRefScroll, setAboutMeRefSCroll] = useState('')

  const content = (
    <Suspense fallback={<LoadingScreen />} >
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
    <Router>
      <Header aboutMeRef={aboutMeRef} aboutMeRefScroll={aboutMeRefScroll} headerCustomRef={headerCustomRef}/>
      {content}
      <Footer />
    </Router>
  );
}

export default App;
