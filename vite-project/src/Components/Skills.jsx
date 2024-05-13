import React from 'react';

function Skills({ skills }) {
  return (
    <div>
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skillString, index) => (
          <li key={index}>
            <h3>Skill {index + 1}</h3>
            <ul>
              {skillString.split(',').map((skill, skillIndex) => (
                <li key={skillIndex}>{skill.trim()}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
