import React,{useState,useEffect} from 'react'
import Netflix from './netflixLogo.svg'
import './nav.css'
function Nav() {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`nav ${scrolled && "nav_black" }`}>
    <img src={Netflix} alt='netflixLogo'/>

    <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gdruy0cnkgnaadpxiadi' alt='user' />
    </div>
  )
}

export default Nav