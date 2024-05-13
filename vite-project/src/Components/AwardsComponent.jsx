import React from 'react';

function AwardsComponent({ heading, photo }) {
  return (
    <div className="award">
      <h3>{heading}</h3>
      {photo && <img src={photo} alt={`Certificate`} />}
    </div>
  );
}

export default AwardsComponent;
