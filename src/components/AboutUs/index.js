import FirstHeader from '../FirstHeader'
import Header from '../Header'
import './index.css'
const AboutUs = () => {
  return (
    <div className="about-container">
      <FirstHeader />
      <Header />
      <div className="aboutus-container">
        <img
          src="https://i.ibb.co/DwXtWQJ/Screenshot-2025-01-08-224100.png"
          className="about-image"
        />
        <div className="about-description-container">
          <h1 className="aboutus-heading">About us</h1>
          <p className="everyone-heading">
            Everyone has a vision of their dream home or workspace — a space
            filled with <br />
            special features and lasting impressions. At United Buildpro Pvt
            Ltd, we bring
            <br />
            those dreams to life. Even if you’re unsure of what you want, our
            team of experts <br />
            knows <br />
            the right questions to ask to uncover your desires and <br />
            create a space that’s uniquely yours. Every project we undertake is
            a harmonious blend <br />
            of our client’s vision and our design expertise. We focus on
            creating spaces that not only meet
            <br /> expectations but exceed them, offering a seamless integration
            of style and functionality,
            <br />
            eneneral term meaning the art and science to form objects systems.
          </p>
          <button className="knowmore-container">Know More</button>
        </div>
      </div>
    </div>
  )
}
export default AboutUs
