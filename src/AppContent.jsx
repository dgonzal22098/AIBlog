import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './AppContent.css';
import styled from 'styled-components';
import Navbar from "./componentes/Navbar";
import Energy from "./componentes/Energy";
import Carbon from './componentes/Carbon';
import Water from './componentes/Water';
import Green from './componentes/Green';
import Home from './componentes/Home';
import References from './componentes/References';
import Waste from './componentes/Extra';
import ScrollToTop from './componentes/ScrollToTop';
import ScrollToTopButton from './componentes/ScrollToTopButton';


const AppContent = () => {

  const location = useLocation();
  const currentPath = location.pathname.slice(1) || 'home';


  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToTopButton />
      <div className={`mainer ${currentPath}`}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/energy" element={<Energy />} />
            <Route path="/carbon" element={<Carbon />} />
            <Route path="/water" element={<Water />} />
            <Route path="/green" element={<Green />} />
            <Route path="/waste" element={<Waste />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </Container>
      </div>
    </>
  );
};

export default AppContent

const Container = styled.div`
width: 100%;
height: 100dvh;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 6rem;
padding: 20px;
`

const Mainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100vw;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30%;
    z-index: -1;
    pointer-events: none;
  }
  
  `
