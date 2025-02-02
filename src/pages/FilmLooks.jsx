import { React, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

import { RiArrowUpDoubleFill } from "react-icons/ri";

export const FilmLooks = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useGSAP(() => {
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 100%', // Start animation when the element reaches 80% of the viewport height
          toggleActions: 'play none none none', // Play once, no reverse
        }
      });
    });
  });

  return (
    <section>
      <div className='scrolltotop' onClick={scrollToTop}><RiArrowUpDoubleFill /></div>
      <div className='film-list'>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\filmlooks\IMG_20241109_142609_1.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\filmlooks\IMG_20241109_232230.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\filmlooks\IMG_20241109_235606.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\filmlooks\IMG_20241110_000115.jpg'></img>

        <img className='animate-on-scroll' loading="lazy" src='src\assets\filmlooks\IMG_20241225_165756.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\filmlooks\IMG_20241226_165333.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\filmlooks\IMG_20250106_161548_1-4.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\filmlooks\IMG_20250107_202807.jpg'></img>

        {/* <img className='animate-on-scroll' loading="lazy" src=''></img>
        <img className='animate-on-scroll' loading="lazy" src=''></img>
        <img className='animate-on-scroll' loading="lazy" src=''></img>
        <img className='animate-on-scroll' loading="lazy" src=''></img> */}
      </div>
    </section>
  );
};