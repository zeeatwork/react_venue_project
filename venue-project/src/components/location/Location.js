/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      // eslint-disable-next-line jsx-a11y/iframe-has-title
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.9994227796633!2d-75.15090928409131!3d39.941402579423176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c8994cac29d7%3A0x876f4d423f4d5a62!2sTheatre%20of%20The%20Living%20Arts!5e0!3m2!1sen!2sus!4v1616936901292!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;