import React from 'react'
import "./About.css";

function About({roledescription}) {
  return (
 <section className='About-section'>
       <h2 className='About'>About<span className='out'></span></h2>
    <div>{roledescription}</div>
 </section>

  )
}

export default About;