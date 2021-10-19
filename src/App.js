import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import AboutMe from './Pages/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import Aktualnosci from './Pages/Aktualnosci/Aktualnosci';
import Pokazy from './Pages/Pokazy/Pokazy'
import Zajecia from './Pages/Zajecia/Zajecia'
import Kontakt from './Pages/Kontakt/Kontakt'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react';
import NotFound from './Pages/404/NotFound';

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
    
    </Switch>
  ) 

  return (
    <Router>
      <Header aboutMeRef={aboutMeRef} aboutMeRefScroll={aboutMeRefScroll} headerCustomRef={headerCustomRef}/>
      {content}
      <Footer />
      
      <Route>
        <NotFound />
      </Route>
    </Router>
  );
}

export default App;
