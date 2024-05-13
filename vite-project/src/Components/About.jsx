import React from 'react'

function About({roledescription}) {
  return (
 <section className='About-section'>
       <h2>About</h2>
    <div>{roledescription}</div>
 </section>

  )
}

export default About