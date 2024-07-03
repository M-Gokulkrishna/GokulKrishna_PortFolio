import AOS from 'aos';
import '../Stylesheets/ProjectPage.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';
import CarouselPic1 from '../assets/College_Project_Pic1.png';
import CarouselPic2 from '../assets/Ludo_Game_Pic2.png';
import CarouselPic3 from '../assets/Weather_App_Pic3.png';

let ImageArray = [CarouselPic1, CarouselPic2, CarouselPic3];
const ProjectSection = () => {
  const CarouselRef = useRef(null);
  const [CarouselCount, setCarouselCount] = useState(0);
  const [AnimationFlag, setAnimationFlag] = useState(true);
  const [RefElementWidth, setRefElementWidth] = useState(0);
  const [RefElementHeight, setRefElementHeight] = useState(0);
  const CarouselContent =
    [
      { id: 0, Heading: 'Attendance WebApp', anchorLink: '/', Description: 'A MERN stack web app, a sleek design to replace the traditional paper - based student attendance system with a modern digital solution for students who use the college Bus service.' },
      { id: 1, Heading: 'Ludo Game', anchorLink: 'https://github.com/M-Gokulkrishna/Ludo-Game-JS', Description: 'Developed a Visually Appealing Ludo Game Using HTML, CSS, JavaScript. Interactive Elements, Logics & Animations Provides a wonderful Gaming Experience.' },
      { id: 2, Heading: 'Weather WebApp', anchorLink: 'https://github.com/M-Gokulkrishna/Weather_App_ReactJS', Description: 'A Good Looking Weather App, Which provides current Weather Conditions of the given City using Open weather map api service and We can pin our favourite city in drafts.' },
    ];

  useEffect(() => {
    AOS.init({
      duration: 900
    });

  }, [])

  function handleNextClick() {
    setAnimationFlag(false);
    setCarouselCount(PrevCount => PrevCount + 1);
  }
  function handlePrevClick() {
    setAnimationFlag(false);
    setCarouselCount(PrevCount => PrevCount - 1);
  }
  const DescriptionElements = CarouselContent.map(eachContent => (
    (CarouselCount === eachContent.id) &&
    <aside key={eachContent.id}>
      <div className="Description-Header">
        <h4 className='fw-bold text-danger' style={{ color: 'var(--Color3)' }}>{eachContent.Heading}</h4>
        <a href={eachContent.anchorLink} target="_blank" rel="noopener noreferrer">GitHub link</a>
      </div>
      <p className='fw-bold'>{eachContent.Description}</p>
      <div className='ArrowIcon-L fs-1' onClick={() => handlePrevClick()}>
        <FaAngleLeft />
      </div>
      <div className='ArrowIcon-R fs-1' onClick={() => handleNextClick()}>
        <FaAngleRight />
      </div>
    </aside>
  ));

  useEffect(() => {
    setRefElementWidth(CarouselRef.current.offsetWidth);
    setRefElementHeight(CarouselRef.current.offsetHeight);
    window.addEventListener('resize', () => {
      setRefElementWidth(CarouselRef.current.offsetWidth);
      setRefElementHeight(CarouselRef.current.offsetHeight);
    });
  }, [CarouselCount]);

  const Other_Images_Style = {
    opacity: '0.4',
    transform: 'scale(0.8)'
  }

  const Translation_Standard = RefElementWidth + 20;
  // 
  const ImageElement = ImageArray.map((each, index) => (
    <img key={index} src={each} alt="" width={`${RefElementWidth}px`} height={`${RefElementHeight}px`} style={(CarouselCount === ImageArray.indexOf(each)) ? {
      opacity: '1', transform: 'scale(1)',
      boxShadow: '0 0 40px var(--Color1)'
    } : Other_Images_Style} />
  ));

  if (CarouselCount > (ImageArray.length - 1)) {
    setCarouselCount(0);

  }
  else if (CarouselCount < 0) {
    setCarouselCount(ImageArray.length - 1);
  }

  useEffect(() => {
    if(AnimationFlag){
      const Timer = setInterval(() => {
        setCarouselCount(c => c + 1);
      }, 2400);
      return () => {
        clearInterval(Timer);
      }
    }
  }, [AnimationFlag])

  return (
    <div id='Projects-Page'>
      <header data-aos="fade-down">
        <h1 className='fw-bold my-auto'>My Projects</h1>
      </header>
      <div className='Carousel-Card' data-aos="zoom-in">
        {
          DescriptionElements
        }
        <div className='Carousel-Container'>
          <div className='Carousel-Main-Container' ref={CarouselRef}>
            <div className='Carousel-Slider' style={{ transform: `translateX(-${CarouselCount * Translation_Standard}px)` }}>
              {ImageElement}
            </div>
          </div>
        </div>
      </div>
      <a href="http://github.com/M-Gokulkrishna/" target="_blank" rel="noopener noreferrer" className='GitHub-Btn'>Visit GitHub</a>
    </div>
  )
}

export default ProjectSection