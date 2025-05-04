import './Navbar.css'; 
import { Link, useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Navbar = () => {

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const currentPath = location.pathname.slice(1) || 'home';
  

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${currentPath}`}>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/energy">Energy Consumption of AI</Link></li>
        <li><Link to="/carbon">Carbon Footprint</Link></li>
        <li><Link to="/water">Water Usage</Link></li>
        <li><Link to="/green">Green AI</Link></li>
        <li><Link to="/extra">Extra</Link></li>
        <li><Link to="/references">References</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
