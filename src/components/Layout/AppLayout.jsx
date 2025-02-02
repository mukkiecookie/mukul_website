import { React, useRef, useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom'
import {Headers} from '../UI/Headers'
import {Footers} from '../UI/Footers'


import Lenis from "@studio-freight/lenis";

export const AppLayout = () => {

  useEffect(() => {
      const lenis = new Lenis({
        smooth: true,
        lerp: 0.1, // Adjust smoothness (lower is smoother)
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
  
      return () => lenis.destroy(); // Cleanup
    }, []);
    
  return (
  <>
    <Headers />
    <Outlet />
    <ScrollRestoration />
    <Footers />
  </>
  )
}
