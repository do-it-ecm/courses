import React from 'react';

const IconTitle = ({ icon, alt, title}) => {
  return (
    <div className="icon-title" style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem',
    }}>
      <img src={icon} alt={alt} class='img-big-icon'/>
      <h1>{title}</h1>
    </div>
  );
}

export default IconTitle;
