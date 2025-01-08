import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Contact from "./components/Contact"
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact}/>
    </Switch>
  )
}
export default App
