import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './Pages/404/NotFound';
import AboutMe from './Pages/AboutMe/AboutMe';
import Homepage from "./Pages/Homepage/Homepage"
import Aktualnosci from './Pages/Aktualnosci/Aktualnosci'
import Zajecia from './Pages/Zajecia/Zajecia'
import Pokazy from './Pages/Pokazy/Pokazy'
import Kontakt from './Pages/Kontakt/Kontakt'


function App() {
  const content = (
    <Switch>
      <Route exact path="/">
        <Homepage  />
        <AboutMe />
      </Route>

      <Route path="/Aktualności" component={Aktualnosci} />

      <Route path="/Pokazy" component={Pokazy} />

      <Route path="/Zajęcia" component={Zajecia} />

      <Route path="/Kontakt" component={Kontakt} />

      <Route component={NotFound} />
    
    </Switch>
  ) 

  return (
    <Router>
      <Header/>
      {content}
      <Footer />
    </Router>
  );
}

export default App;
