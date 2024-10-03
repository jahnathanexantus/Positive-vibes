import React, { useState } from 'react'
import './services.css'

const Service = () => {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = section => {
    setOpenDropdown(openDropdown === section ? null : section)
  }

  return (
    <div className='service-container'>
      <h1>Our Services</h1>

      {/* Life Coaching */}
      <div className='service-section'>
        <h2 onClick={() => toggleDropdown('lifeCoaching')}>Life Coaching</h2>
        {openDropdown === 'lifeCoaching' && (
          <ul>
            <li>
              <strong>Career Coaching</strong>: career development, job
              transitions, and professional growth
            </li>
            <li>
              <strong>Credit Card Coaching</strong>: managing credit cards
              effectively, focusing on strategies for responsible use, debt
              reduction, and improving credit scores.
            </li>
            <li>
              <strong>Executive Coaching</strong>: leadership skills, management
              strategies, and executive performance
            </li>
            <li>
              <strong>Fertility Coaching</strong>: support to individuals and
              couples through fertility challenges and treatments
            </li>
            <li>
              <strong>General Life Coaching</strong>: personalized support to
              help individuals identify their goals, overcome obstacles, and
              enhance their overall well-being.
            </li>
            <li>
              <strong>Grief Coaching</strong>: support to clients who are
              processing and healing from loss and bereavement
            </li>
            <li>
              <strong>Relationship Coaching</strong>: guiding clients in
              improving personal and romantic relationships
            </li>
            <li>
              <strong>Self-Exploration</strong>: support to clients in exploring
              and understanding their own sexuality and desires
            </li>
            <li>
              <strong>Weight Management Coaching</strong>: support to clients in
              achieving weight loss goals (pre and post surgery) and maintaining
              a healthy lifestyle.
            </li>
          </ul>
        )}
      </div>

      {/* Professional Speaking */}
      <div className='service-section'>
        <h2 onClick={() => toggleDropdown('professionalSpeaking')}>
          Professional Speaking
        </h2>
        {openDropdown === 'professionalSpeaking' && (
          <ul>
            <li>
              <strong>Keynote Speeches</strong>
            </li>
            <li>
              <strong>Workshops and Seminars</strong>
            </li>
            <li>
              <strong>Panel Discussions</strong>
            </li>
            <li>
              <strong>Webinars and Virtual Events</strong>
            </li>
            <li>
              <strong>Motivational Talks</strong>
            </li>
            <li>
              <strong>Corporate Training</strong>
            </li>
          </ul>
        )}
      </div>

      {/* Hosting, MC, or Moderating */}
      <div className='service-section'>
        <h2 onClick={() => toggleDropdown('hosting')}>
          Hosting, Master of Ceremonies (MC), or Moderating
        </h2>
        {openDropdown === 'hosting' && (
          <ul>
            <li>
              <strong>Event Introduction</strong>
            </li>
            <li>
              <strong>Program Coordination</strong>
            </li>
            <li>
              <strong>Audience Engagement</strong>
            </li>
            <li>
              <strong>Speech Delivery</strong>
            </li>
            <li>
              <strong>Time Management</strong>
            </li>
            <li>
              <strong>Problem Solving</strong>
            </li>
            <li>
              <strong>Networking Facilitation</strong>
            </li>
          </ul>
        )}
      </div>

      {/* Notary Public */}
      <div className='service-section'>
        <h2 onClick={() => toggleDropdown('notary')}>Notary Public</h2>
        {openDropdown === 'notary' && (
          <ul>
            <li>
              <strong>Document Verification</strong>
            </li>
            <li>
              <strong>Oaths and Affirmations</strong>
            </li>
            <li>
              <strong>Witnessing Signatures</strong>
            </li>
            <li>
              <strong>Certifying Copies</strong>
            </li>
          </ul>
        )}
      </div>

      {/* Wedding Officiant */}
      <div className='service-section'>
        <h2 onClick={() => toggleDropdown('wedding')}>Wedding Officiant</h2>
        {openDropdown === 'wedding' && (
          <ul>
            <li>
              <strong>Conducting Ceremonies</strong>
            </li>
            <li>
              <strong>Legal Requirements</strong>
            </li>
            <li>
              <strong>Personalization</strong>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Service
