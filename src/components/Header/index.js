import './index.css'
import {Link} from 'react-router-dom'
import Services from '../Services'
const Header = () => {
  const serviceRender = () => {
    return <Services />
  }
  return (
    <div className="header-container">
      <img
        src="https://i.ibb.co/Ntg7MVr/Screenshot-2025-01-08-184757.png"
        className="company-logo"
      />
      <ul className="unorderlist-container">
        <Link to="/" className="link-home">
          <li className="home-link">Home</li>
        </Link>
        <Link to="/aboutus" className="link-home">
          <li className="home-link">About us</li>
        </Link>
        <select className="home-link-select" onChange="serviceRender()">
          <option value="https://www.google.com" className="home-link-select">
            Services
          </option>

          <option className="home-link-select">Projects</option>
          <option className="home-link-select">Work</option>
          <option className="home-link-select">Feedback</option>
        </select>
        <Link to="/contact" className="link-home">
        <li className="home-link-contact">Contact us</li>
        </Link>
      </ul>
    </div>
  )
}
export default Header
