import React from 'react';
import { useLocation } from 'react-router-dom';
import './PortfolioPage.css'; // Import CSS file for styling
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Footer from './Footer ';

function PortfolioPage() {
  const location = useLocation();
  const { name, video, skills, projects, awards, contact,roleDescription } = location.state.formData;
console.log(skills);

  return (
    <div className="portfolio-container">
     
        <HeroSection name={name} videoLink={video} />
        <About roledescription={roleDescription}/>
<Skills skills={skills}/>

<Project projects={projects}/>
     <Footer/>

  
    </div>
  );
}

export default PortfolioPage;
