import {IoCallOutline} from 'react-icons/io5'
import {TfiEmail} from 'react-icons/tfi'
import {SlLocationPin} from 'react-icons/sl'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaVimeoV} from 'react-icons/fa'

import './index.css'

const FirstHeader = () => {
  return (
    <div >
      <div>
        <div className="details-container">
          <IoCallOutline className="call-icon" />
          <p className="number1">9731125090, </p>
          <p className="number1">9731125090</p>
          <TfiEmail className="mail-icon" />
          <p className="number1">unitedbuildingpro@gmail.com</p>
          <SlLocationPin className="location-icon" />
          <p className="number1">
            #63/A,E Block 2nd Stage, Dr.Rajkumar Road, Subramanya Nagar
            Banglore-560010
          </p>

          <FaFacebookF className="facebook-logo" />
          <FaTwitter className="twitter-logo" />
          <FaVimeoV className="vimeo-logo" />
          <div className="flag-container">
            <img
              src="https://i.ibb.co/82j8mkC/Screenshot-2025-01-08-182747.png"
              className="flag-image"
            />
            <p className="number1">IN</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FirstHeader
