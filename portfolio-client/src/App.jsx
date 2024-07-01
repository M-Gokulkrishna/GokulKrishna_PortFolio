import './index.css';
import AOS from 'aos';
import { useEffect, useRef, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import HomeSection from './Pages/HomeSection.jsx';
import AboutSection from './Pages/AboutSection.jsx';
import SkillsSection from './Pages/SkillsSection.jsx';
import ProjectSection from './Pages/ProjectSection.jsx';
import ContactSection from './Pages/ContactSection.jsx';

function App() {
  const ScrollValueRef = useRef(null);
  const [ScrollValues, setScrollValues] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 900
    });
    window.addEventListener('scroll', () => {
      setScrollValues(ScrollValueRef.current.getBoundingClientRect().top * (-1));
    });
  }, [])
  // useEffect(()=>{
  //   window.addEventListener('contextmenu', (event)=>{
  //     event.preventDefault();
  //   })
  // }, [])
  return (
    <div className='App-Layout-Page' ref={ScrollValueRef}>
      <div
        data-aos='zoom-in'
        className='Scroll-to-Top-Icon'
        style={(ScrollValues >= (window.innerHeight / 1.5)) ?
          { visibility: 'visible', animation: 'Scroll-to-top-Btn-Animation 0.8s linear infinite' } :
          { animation: 'none' }}>
        <FaArrowCircleUp />
        <a href="#Home-Page"></a>
      </div>
      <HomeSection />
      <AboutSection />
      <SkillsSection ScrollValues={ScrollValues} />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default App
