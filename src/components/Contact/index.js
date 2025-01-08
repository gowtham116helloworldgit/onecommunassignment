import FirstHeader from '../FirstHeader'
import Header from '../Header'
import './index.css'
import {Component} from 'react'
class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <FirstHeader />
        <Header />
        <div className="contact-heading">
          <h1 className="ourservices">Contact Us</h1>
          <img
            src="https://i.ibb.co/Scg85Pj/Screenshot-2025-01-09-004105.png"
            className="form-image"
          />
          <img
            src="https://i.ibb.co/PCMFzyJ/Screenshot-2025-01-09-004128.png"
            className="contact-image"
          />
        </div>
      </div>
    )
  }
}
export default Contact
