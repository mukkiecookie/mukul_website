import { React, useRef } from 'react';
import { RiArrowUpDoubleFill } from "react-icons/ri";

import img1 from '../assets/filmlooks/img (1).jpg'
import img2 from '../assets/filmlooks/img (2).jpg'
import img3 from '../assets/filmlooks/img (3).jpg'
import img4 from '../assets/filmlooks/img (4).jpg'
import img5 from '../assets/filmlooks/img (5).jpg'
import img6 from '../assets/filmlooks/img (6).jpg'
import img7 from '../assets/filmlooks/img (7).jpg'
import img8 from '../assets/filmlooks/img (8).jpg'

export const FilmLooks = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      <div className='scrolltotop' onClick={scrollToTop}><RiArrowUpDoubleFill /></div>
      <div className='film-list'>
        <img loading="lazy" src={img1}></img>
        <img loading="lazy" src={img2}></img>
        <img loading="lazy" src={img3}></img>
        <img loading="lazy" src={img4}></img>

        <img loading="lazy" src={img5}></img>
        <img loading="lazy" src={img6}></img>
        <img loading="lazy" src={img7}></img>
        <img loading="lazy" src={img8}></img>

        {/* <img loading="lazy" src=''></img>
        <img loading="lazy" src=''></img>
        <img loading="lazy" src=''></img>
        <img loading="lazy" src=''></img> */}
      </div>
    </section>
  );
};