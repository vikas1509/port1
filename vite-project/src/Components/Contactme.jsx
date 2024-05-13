import React from 'react';

function ContactMe({ email, github, linkedin, phone }) {
  return (
    <div className="contact-me">
      <h3>Contact Me</h3>
      <p>Email: {email}</p>
      <p>Github: {github}</p>
      <p>LinkedIn: {linkedin}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default ContactMe;
