import { React} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profile_photo from "../assets/aboutphoto.jpg";

import img1 from "../assets/img1.png"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"


gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Home = () => {

  useGSAP(() => {
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 100%', // Start animation when the element reaches 80% of the viewport height
          toggleActions: "play reverse play reverse", // Play once, no reverse
        }
      });
    });
  },[]);

  return (
    <main>
      <section id="introduction">
        <div className="home-text animate-on-scroll">
          <h1>memories never fade</h1>
        </div>

        <div className="slider animate-on-scroll" 
          style={{
          '--Width': '300px',
          '--Height': '400px',
          }}>

          <div className="semi-circle top"></div>
          <div className="semi-circle bottom"></div>

          <div className="carousel-list">
            <span className="carousel-items"><img src={img1} alt=""/></span>
            <span className="carousel-items"><img src={img2} alt=""/></span>
            <span className="carousel-items"><img src={img3} alt=""/></span>
            <span className="carousel-items"><img src={img4} alt=""/></span>
            <span className="carousel-items"><img src={img5} alt=""/></span>
            <span className="carousel-items"><img src={img6} alt=""/></span>
            <span className="carousel-items"><img src={img7} alt=""/></span>
            <span className="carousel-items"><img src={img8} alt=""/></span>
          </div>

          <div className="carousel-list">
            <span className="carousel-items"><img src={img1} alt=""/></span>
            <span className="carousel-items"><img src={img2} alt=""/></span>
            <span className="carousel-items"><img src={img3} alt=""/></span>
            <span className="carousel-items"><img src={img4} alt=""/></span>
            <span className="carousel-items"><img src={img5} alt=""/></span>
            <span className="carousel-items"><img src={img6} alt=""/></span>
            <span className="carousel-items"><img src={img7} alt=""/></span>
            <span className="carousel-items"><img src={img8} alt=""/></span>
          </div>
        </div>

        <div className="home-content animate-on-scroll">
          <div className="mukul">
            <p>©mukul</p>
          </div>

          <div className="bottomtext">
            <p>i'm a freelance photographer/designer based in India, providing creative solutions for brands and individuals.</p>
          </div>
        </div>
      </section>

      <div className="divider animate-on-scroll"></div>

      <section id="about">
        <div className="about-text animate-on-scroll">
          <div className="about-heading animate-on-scroll">
            <p>about me as a photographer</p>
          </div>

          <div className="about-main animate-on-scroll">
            <p>I’m a dedicated Photographer, channeling creativity and expertise into capturing stunning visuals that communicate a story with impact.</p>
          </div>
              
          <div className="about-bottom animate-on-scroll">
            <p>(enthusiast for graphic design)</p>
            <p>(enthusiast for vfx)</p>
            <p>(enthusiast for webdev)</p>
          </div>
          
        </div>
          
        <img src={profile_photo} alt="CEO's photo" className='animate-on-scroll'/>
      </section>
    </main>
    
  )
}
