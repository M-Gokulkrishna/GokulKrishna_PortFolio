import AOS from 'aos';
import '../Stylesheets/HomePage.css';
import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import ProfilePic from '../assets/Profile_Pic.jpg';
import ResumePdf from '../assets/files/GokulKrishna_Resume.pdf';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const HomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900
    });
  }, [])
  return (
    <div id='Home-Page'>
      <NavBar />
      <main>
        <section className='fw-bolder mx-2 p-2' data-aos="fade-right">
          <h2>Hello, EveryOne!</h2>
          <div>
            <h1 className='Name-Tag'>I'm <span style={{color: 'var(--Color1)'}}>Gokul Krishna M</span>&ensp;</h1>
          </div>
          <p>This is My Official Portfolio Website to <br /> Showcase My Works Related to My Skills...</p>
          <br />
          <footer className='Home-Icons-Btn'>
            <span>
              <h6 className='m-auto fw-bold'>Resume</h6>
              <a href={ResumePdf} download={'Resume_GokulKrishnaM'}></a>
            </span>
            <div>
              <FaLinkedin />
              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div>
              <FaGithub />
              <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div>
              <FaEnvelope />
              <a href="#Contact-Page"></a>
            </div>
          </footer>
        </section>
        <figure className='mx-2' data-aos="fade-left">
          <img src={ProfilePic} alt="MyProfile Image" />
        </figure>
      </main>
    </div>
  )
}

export default HomeSection