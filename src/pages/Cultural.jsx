import { React, useRef } from 'react';
import { RiArrowUpDoubleFill } from "react-icons/ri";

import img1 from '../assets/cultural/img (1).jpg'
import img2 from '../assets/cultural/img (2).jpg'
import img3 from '../assets/cultural/img (3).jpg'
import img4 from '../assets/cultural/img (4).jpg'
import img5 from '../assets/cultural/img (5).jpg'
import img6 from '../assets/cultural/img (6).jpg'
import img7 from '../assets/cultural/img (7).jpg'
import img8 from '../assets/cultural/img (8).jpg'
import img9 from '../assets/cultural/img (9).jpg'
import img10 from '../assets/cultural/img (10).jpg'
import img11 from '../assets/cultural/img (11).jpg'
import img12 from '../assets/cultural/img (12).jpg'
import img13 from '../assets/cultural/img (13).jpg'

export const Cultural = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      <div className='scrolltotop' onClick={scrollToTop}><RiArrowUpDoubleFill /></div>

      <div className='list'>
        <img className='animate-on-scroll' loading="lazy" src={img1}></img> 
        <img className='animate-on-scroll' loading="lazy" src={img5}></img> 
        <img className='animate-on-scroll' loading="lazy" src={img8}></img> 
        <img className='animate-on-scroll' loading="lazy" src={img12}></img> 

        <img className='animate-on-scroll' loading="lazy" src={img2}></img> 
        <img className='animate-on-scroll' loading="lazy" src={img6}></img> 
        <img className='animate-on-scroll' loading="lazy" src={img9}></img> 
        <img className='animate-on-scroll' loading="lazy" src={img13}></img> 

        <img className='animate-on-scroll' loading="lazy" src={img3}></img> 
        <img className='animate-on-scroll' loading="lazy" src={img7}></img> 
        <img className='animate-on-scroll' loading="lazy" src={img10}></img> 
        <img className='animate-on-scroll' loading="lazy" src={img11}></img> 
        
        <img className='animate-on-scroll' loading="lazy" src={img4}></img> 
        {/* <img className='animate-on-scroll' loading="lazy" src=''></img> 
        <img className='animate-on-scroll' loading="lazy" src=''></img> 
        <img className='animate-on-scroll' loading="lazy" src=''></img>  */}

      </div>
    </section>
  );
};