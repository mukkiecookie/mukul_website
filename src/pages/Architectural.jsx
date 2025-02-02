import { RiArrowUpDoubleFill } from "react-icons/ri";
import { React} from 'react';

import img1 from "../assets/architecture/img (1).jpg"
import img2 from "../assets/architecture/img (2).jpg"
import img3 from "../assets/architecture/img (3).jpg"
import img4 from "../assets/architecture/img (4).jpg"
import img5 from "../assets/architecture/img (5).jpg"
import img6 from "../assets/architecture/img (6).jpg"
import img7 from "../assets/architecture/img (7).jpg"
import img8 from "../assets/architecture/img (8).jpg"
import img9 from "../assets/architecture/img (9).jpg"
import img10 from "../assets/architecture/img (10).jpg"
import img11 from "../assets/architecture/img (11).jpg"
import img12 from "../assets/architecture/img (12).jpg"
import img13 from "../assets/architecture/img (13).jpg"
import img14 from "../assets/architecture/img (14).jpg"
import img15 from "../assets/architecture/img (15).jpg"
import img16 from "../assets/architecture/img (16).jpg"
import img17 from "../assets/architecture/img (17).jpg"


export const Architectural = () => {
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
        <img loading="lazy" src={img1}></img>
        <img loading="lazy" src={img6}></img>
        <img loading="lazy" src={img10}></img>
        <img loading="lazy" src={img14}></img>
        
        <img loading="lazy" src={img2}></img>
        <img loading="lazy" src={img7}></img>
        <img loading="lazy" src={img11}></img>
        <img loading="lazy" src={img15}></img>
        
        <img loading="lazy" src={img3}></img>
        <img loading="lazy" src={img8}></img>
        <img loading="lazy" src={img12}></img>
        <img loading="lazy" src={img16}></img>
        
        <img loading="lazy" src={img4}></img>
        <img loading="lazy" src={img9}></img>
        <img loading="lazy" src={img13}></img>
        <img loading="lazy" src={img17}></img>
        
        <img loading="lazy" src={img5}></img>
        
        {/* <img loading="lazy" src=''></img>
        <img loading="lazy" src=''></img> */}
      </div>
    </section>
  );
};
