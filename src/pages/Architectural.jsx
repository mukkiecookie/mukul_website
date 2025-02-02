import { RiArrowUpDoubleFill } from "react-icons/ri";

import { React, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Architectural = () => {
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
      

      <div className='list'>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\1702979668866.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\1702979669151.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\1702979669170.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\1702979669608.jpg'></img>
        
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\1702979669624.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src/assets/architecture/1710828353683.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\1713543136835.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\IMG_20231206_153613_1.jpg'></img>
        
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\IMG_20231219_131126.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\IMG_20240920_145647_1.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\IMG_20240920_155743_1.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\IMG_20241105_150859_1.jpg'></img>
        
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\IMG_20241105_151653.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\IMG_20241105_152245.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\IMG_20241108_153005.jpg'></img>
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\IMG_20241109_135046.jpg'></img>
        
        <img className='animate-on-scroll' loading="lazy" src='src\assets\architecture\IMG_20241109_140236.jpg'></img>
        
        {/* <img className='animate-on-scroll' loading="lazy" src=''></img>
        <img className='animate-on-scroll' loading="lazy" src=''></img> */}
      </div>
    </section>
  );
};
