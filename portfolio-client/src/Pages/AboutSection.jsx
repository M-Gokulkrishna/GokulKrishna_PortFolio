import AOS from 'aos';
import '../Stylesheets/AboutPage.css';
import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
    const AboutContentBox1Ref = useRef(null);
    const AboutContentBox2Ref = useRef(null);
    const [LableClick, setLabelClick] = useState(false);
    const [AboutContentBox1Height, setAboutContentBox1Height] = useState('');
    const [AboutContentBox2Height, setAboutContentBox2Height] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 900
        });
    }, [])

    useEffect(() => {
        setAboutContentBox1Height(AboutContentBox1Ref.current.offsetHeight);
        setAboutContentBox2Height(AboutContentBox2Ref.current.offsetHeight);
        window.addEventListener('resize', () => {
            setAboutContentBox1Height(AboutContentBox1Ref.current.offsetHeight);
            setAboutContentBox2Height(AboutContentBox2Ref.current.offsetHeight);
        });
    }, [AboutContentBox1Height, AboutContentBox2Height])

    return (
        <div id='About-Page'>
            <header className='About-Header' data-aos="fade-down">
                <h2 className='fw-bold my-auto'>About Me</h2>
            </header>
            <main className='About-Main m-auto' data-aos="fade-up">
                <div className='About-Headings'>
                    <h3 className={`Description ${(!LableClick) ? 'active' : ''} position-relative py-2`} onClick={() => setLabelClick(false)}>Description</h3>
                    <h3 className={`Education ${(LableClick) ? 'active' : ''} position-relative py-2`} onClick={() => setLabelClick(true)}>Education</h3>
                </div>
                <div className="Contents-Container" style={(AboutContentBox1Height>AboutContentBox2Height)?{minHeight: `${AboutContentBox1Height}px`}:{minHeight: `${AboutContentBox2Height}px`}}>
                    <div className='About-Content1' ref={AboutContentBox1Ref} style={(!LableClick) ? { transform: "translateY(0%)" } : { transform: "translateY(180%)" }}>
                        <h5>Passionate front end developer have expertise in React js. Specialize in building and designing a Responsive and visually appealing Websites. I have competence in various technologies such as HTML, CSS, JavaScript, Python, React.js, Git, MySQL, Mongo DB, Node.js & Express.js. <hr /> I'm a Enthusiastic individual to learn new technologies and enhancing My skiils. I ensure that I will provide a successful outcomes in my work and contribute to the success of the Organization.</h5>
                    </div>
                    <div className='About-Content2' ref={AboutContentBox2Ref} style={(LableClick) ? { transform: "translateY(0%)" } : { transform: "translateY(180%)" }}>
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