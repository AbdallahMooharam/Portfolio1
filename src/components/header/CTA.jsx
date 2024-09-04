import React from 'react'
import CV from '../../assets/Updaet CV Abdallah Moharam-8.pdf 3.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
