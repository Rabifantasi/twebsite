import React from 'react';
import Image from 'next/image';


const About = () => {
  return (
    <div>
      <Image 
      className="lg:w-5/6 md:w-4/5 w-full mb-10 object-cover object-center rounded flex justify-center items-center"
      src="/3.JPG"
      alt="Profile Picture"
      height={800}
      width={800}
      priority
      
  />

    </div>
  );
};

export default About;