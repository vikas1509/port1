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
  const {email,github,linkedin,phone, name, video, skills, projects, awards, contact,roleDescription,resume } = location.state.formData;
console.log(name,email,github,linkedin,phone,video,skills,projects);

  return (
    <div className="portfolio-container">
     
        <HeroSection name={name} videoLink={video} />
        <About roledescription={roleDescription}/>
        
<Skills skills={skills}/>

<Project projects={projects}/>
<AwardsComponent name={awards.name} photo={awards.photo}/>
<ContactMe email={email}  github={github} linkedin={linkedin} 
phone={phone}/>
     
<Footer resume={resume}/>
  
    </div>
  );
}

export default PortfolioPage;
