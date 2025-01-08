import FirstHeader from '../FirstHeader'
import Header from '../Header'
import './index.css'
const Services = () => {
  return (
    <div className="services-container">
      <FirstHeader />
      <Header />

      <div className="service-container">
        <h1 className="ourservices">Our Services</h1>
        <div className="images-container">
          <img
            src="https://i.ibb.co/1mLZnj5/Screenshot-2025-01-08-234443.png"
            className="building-image"
          />
          <img
            src="https://i.ibb.co/D4YZTgF/Screenshot-2025-01-08-234506.png"
            className="building-image"
          />
          <img
            src="https://i.ibb.co/7tz4bwh/Screenshot-2025-01-08-234523.png"
            className="building-image"
          />
        </div>
        <div className="images-container">
          <img
            src="https://i.ibb.co/2cBWFsK/Screenshot-2025-01-08-235653.png"
            className="building-image"
          />
          <img
            src="https://i.ibb.co/8rR46X8/Screenshot-2025-01-08-234932.png"
            className="building-image"
          />
          <img
            src="https://i.ibb.co/3k62bVL/Screenshot-2025-01-08-234951.png"
            className="building-image"
          />
        </div>
      </div>
    </div>
  )
}
export default Services
