import React from 'react';
import './Icon.css';

interface Marker {
  icon? : string;
  alt?: string;
}

function Icon({ icon, alt } : Marker) {
  return (
    <div className="icn__details-icon">
      <img src={icon} alt={alt} />
    </div>
  );
}

export default Icon;
