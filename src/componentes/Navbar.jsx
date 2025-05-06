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

  const links = [

    { path: '/', label: 'Home', key: 'home' },
    { path: '/energy', label: 'Energy Consumption of AI', key: 'energy' },
    { path: '/carbon', label: 'Carbon Footprint', key: 'carbon' },
    { path: '/water', label: 'Water Usage', key: 'water' },
    { path: '/green', label: 'Green AI', key: 'green' },
    { path: '/waste', label: 'E-Waste', key: 'waste' },
    { path: '/references', label: 'References', key: 'references' },
    
  ];
  

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${currentPath}`}>
      <ul className="nav-links">
        {links.map(({ path, label, key }) => (
          <li key={key}>
            <Link to={path} className={currentPath === key ? 'active' : ''}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
