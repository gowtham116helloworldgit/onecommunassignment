import FirstHeader from '../FirstHeader'
import Header from '../Header'
import {FaArrowLeftLong} from 'react-icons/fa6'
import {FaArrowRight} from 'react-icons/fa6'
import './index.css'
const Home = () => {
  return (
    <div className="home-container">
      <FirstHeader />
      <Header />
      <div className="description-home-container">
        <div className="whitecontainer1">
          <FaArrowLeftLong className="left-icon" />
        </div>
        <div className="description-container">
          <div className="orange-container">
            <p className="orange-box"></p>
            <p className="orange-para">GREAT EXPERIENCE IN BUILDING</p>
          </div>
          <h1 className="dream-heading">
            You Dream, <br />
            We'll Make It Real
          </h1>
          <p className="work-para">
            All types of work - from desining and laying the foundation <br />
            finishing and commmisoning.Tight deadlines, reasonable
          </p>
          <button className="contact-button">Contact us</button>
        </div>
        <img
          src="https://i.ibb.co/7jPsC4h/Screenshot-2025-01-08-222606.png"
          className="man-image"
        />
        <div className="whitecontainer2">
          <FaArrowRight className="right-icon" />
        </div>
      </div>
    </div>
  )
}
export default Home
