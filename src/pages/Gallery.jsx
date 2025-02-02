import { React} from 'react';

import { IoIosArrowDropright } from "react-icons/io";

import FilmLooks from '../assets/film-looks.jpg'
import Cultural from '../assets/cultural.jpg'
import Architecture from '../assets/architecture.jpg'
import { NavLink } from 'react-router-dom';


export const Gallery = () => {

  return (
    <section>
      <div className='cover'>
        <div className="cover-items">
          <img src={Architecture} alt="Architecture" />

          <div className="cover-titles">
            <h2>ARCHITECTURE</h2>
          </div>

          <NavLink to='/architectural'>
            <div className="arrow-container">
              <IoIosArrowDropright className='arrow'/>
              <span className="see-more">See More</span>
            </div>
          </NavLink>
        </div>

        <div className="cover-items">
          <img src={Cultural} alt="Cultural" />

          <div className="cover-titles">
            <h2>CULTURAL</h2>
          </div>

          <NavLink to='/cultural'>
            <div className="arrow-container">
              <IoIosArrowDropright className='arrow'/>
              <span className="see-more">See More</span>
            </div>
          </NavLink>
          

        </div>
        
        <div className="cover-items">
          <img src={FilmLooks} alt="Film Looks" />

          <div className="cover-titles">
            <h2>FILM LOOKS</h2>
          </div>

          <NavLink to='/filmlooks'>
            <div className="arrow-container">
              <IoIosArrowDropright className='arrow'/>
              <span className="see-more">See More</span>
            </div>
          </NavLink>
        </div>
        
      </div>
      
    </section>

  )
}
