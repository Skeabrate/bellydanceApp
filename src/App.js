import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react';
import NotFound from './Pages/404/NotFound';
import AboutMe from './Pages/AboutMe/AboutMe';
import Homepage from "./Pages/Homepage/Homepage"
import Aktualnosci from './Pages/Aktualnosci/Aktualnosci'
import Zajecia from './Pages/Zajecia/Zajecia'
import Pokazy from './Pages/Pokazy/Pokazy'
import Kontakt from './Pages/Kontakt/Kontakt'


function App() {
  const [aboutMeRef, setAboutMeRef] = useState('')
  const [headerCustomRef, setHeaderCustomRef] = useState('')

  const [aboutMeRefScroll, setAboutMeRefSCroll] = useState('')

  const content = (
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
