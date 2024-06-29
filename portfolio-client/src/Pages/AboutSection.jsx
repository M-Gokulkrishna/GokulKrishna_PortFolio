import AOS from 'aos';
import '../Stylesheets/AboutPage.css';
import React, { useEffect, useState } from 'react';

const AboutSection = () => {
    const [LableClick, setLabelClick] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 900
        });
    }, [])

    return (
        <div id='About-Page'>
            <header className='About-Header' data-aos="fade-down">
                <h1 className='fw-bold'>About Me</h1>
            </header>
            <main className='About-Main m-auto' data-aos="fade-up">
                <div className='About-Headings'>
                    <h3 className={`Description ${(!LableClick) ? 'active' : ''} position-relative py-2`} onClick={() => setLabelClick(false)}>Description</h3>
                    <h3 className={`Education ${(LableClick) ? 'active' : ''} position-relative py-2`} onClick={() => setLabelClick(true)}>Education</h3>
                </div>
                <div className="Contents-Container">
                    <div className='About-Content1' style={(!LableClick) ? { transform: "translateY(0%)" } : { transform: "translateY(180%)" }}>
                        <h5>Passionate front end developer have expertise in React js. Specialize in building and designing a Responsive and visually appealing Websites. I have competence in various tools such as HTML, CSS, JavaScript, React.js, Git, MySQL, Mongo DB, Node.js & Express.js. <hr /> I'm a Enthusiastic individual to learn new technologies and enhancing My skiils. I ensure that I will provide a successful outcomes in my work and contribute to the success of the Organization.</h5>
                    </div>
                    <div className='About-Content2' style={(LableClick) ? { transform: "translateY(0%)" } : { transform: "translateY(180%)" }}>
                        <div>
                            <h3>Full Stack Development</h3>
                            <h4>NxtWave</h4>
                            <h4>2023 - Present</h4>
                        </div>
                        <div>
                            <h3>BE MECHATRONICS</h3>
                            <h4>Mahendra Engineering College</h4>
                            <h4>Namakkal, Tamil Nadu</h4>
                            <h4>2020 - 2024</h4>
                        </div>
                    </div>
                </div>
                <span></span>
            </main>
        </div>
    )
}

export default AboutSection