import React from 'react'
import Profile from '../../assets/images/S-24.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import './home.css'

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>Welcome to Positive Vibes-FOTP</span> <br />
            Focused on the Positive, Empowering Your Journey
          </h1>
          <p className='home__description'>
            With a passion for empowering individuals and a commitment to
            excellence, Positive Vibes-FOTP strives to create a supportive
            environment where you can thrive. My diverse skill set ensures that
            whether you’re seeking guidance, inspiration, or a memorable event,
            you’ll receive exceptional service tailored to your needs.
            <br />
            Discover the possibilities with Positive Vibes-FOTP. Your
            transformation starts here!
          </p>
          <Link to='/about' className='button'>
            More About Me
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>

        {/* Icons for Phone and Email */}
        <div className='contact-icons'>
          <a href='tel:+14079137687' className='contact-icon'>
            <FaPhoneAlt />
          </a>
          <a href='mailto:positivevibesfotp@gmail.com' className='contact-icon'>
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className='color__block'></div>
    </section>
  )
}

export default Home
