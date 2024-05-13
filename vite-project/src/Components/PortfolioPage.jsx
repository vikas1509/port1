import React from 'react';
import { useLocation } from 'react-router-dom';
import './PortfolioPage.css'; // Import CSS file for styling
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Footer from './Footer';
import AwardsComponent from './AwardsComponent';
import ContactMe from './Contactme';

function PortfolioPage() {
  const location = useLocation();
  const { email, github, linkedin, phone, name, video, skills, projects, awards, contact, roleDescription, resume } = location.state.formData;
  console.log(name, email, github, linkedin, phone, video, skills, projects, awards);

  // Function to convert Base64 photos to URL arrays
  const convertPhotosToUrlArray = (photos) => {
    return photos.map((photo) => {
      // Convert the photo string to a Blob object
      const blob = new Blob([photo], { type: 'image/jpeg' }); // Adjust the MIME type as per your requirement
      return URL.createObjectURL(blob);
    });
  };

  return (
    <div className="portfolio-container">
      <HeroSection name={name} videoLink={video} />
      <About roledescription={roleDescription} />
      <Skills skills={skills} />
      <Project projects={projects} />
      {awards.map((aw, index) => ( // Added index parameter for unique key
        <div key={index}>
          {aw.photos && (
            <AwardsComponent key={index} name={aw.name} photos={convertPhotosToUrlArray(aw.photos)} />
          )}
        </div>
      ))}
      <ContactMe email={email} github={github} linkedin={linkedin} phone={phone} />
      <Footer resume={resume} />
    </div>
  );
}

export default PortfolioPage;
