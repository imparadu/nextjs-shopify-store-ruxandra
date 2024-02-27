import { divide } from 'lodash';
import React, { useState, useEffect } from 'react';

export default function BackToTopButton() {
  function onClick() {
    window.scrollTo(0, 0);
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`right-5 bottom-0 place-self-end transition-all ease-in-out duration-300 ${isVisible ? 'sticky' : 'hidden'}`}>
      <button onClick={onClick} className='cursor-pointer bg-transparent leading-none'>
        <img className='w-20 h-10 opacity-80'
          alt="backToTopButton"
          src="Back_to_top_arrow-01.svg"
        />
      </button>
    </div>
  );
}


