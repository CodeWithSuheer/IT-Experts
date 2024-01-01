import React,{ useState,useEffect} from 'react'
import './Scroll.css'
function Scroll() {
    const [showButton, setShowButton] = useState(false);


    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
  
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <button
    id="scrollToTopBtn"
    onClick={scrollToTop}
    style={{ display: showButton ? 'block' : 'none' }}
  >
    <i className="fa fa-arrow-up text-light fs-5" aria-hidden="true"></i>
  </button>
  )
}

export default Scroll