import { React, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

import { RiArrowUpDoubleFill } from "react-icons/ri";

export const Cultural = () => {
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
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\1699810096174.jpg'></img> 
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_202431_123233_1.png'></img> 
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20231111_230140_1.jpg'></img> 
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20231125_144811_1.jpg'></img> 

        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20240920_151048.jpg'></img> 
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20240920_152733_1.jpg'></img> 
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20241012_184437_1.jpg'></img> 
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20241108_153326_1.jpg'></img> 

        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20241124_231651.jpg'></img> 
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20241124_231720.jpg'></img> 
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20241127_171237.jpg'></img> 
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20241225_153430.jpg'></img> 
        
        <img className='animate-on-scroll' loading="lazy" src='src\assets\cultural\IMG_20241225_165556_1.jpg'></img> 
        {/* <img className='animate-on-scroll' loading="lazy" src=''></img> 
        <img className='animate-on-scroll' loading="lazy" src=''></img> 
        <img className='animate-on-scroll' loading="lazy" src=''></img>  */}

      </div>
    </section>
  );
};