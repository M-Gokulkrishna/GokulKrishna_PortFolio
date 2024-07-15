import React from 'react';
import '../Stylesheets/NavBar.css';
import { FaBars, FaGraduationCap, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const NavCrendentials = [
        { id: 1, LinkValue: '#Home-Page', InnerText: 'Home' },
        { id: 2, LinkValue: '#About-Page', InnerText: 'About' },
        { id: 3, LinkValue: '#Skills-Page', InnerText: 'Skills' },
        { id: 4, LinkValue: '#Projects-Page', InnerText: 'Projects' },
        { id: 5, LinkValue: '#Contact-Page', InnerText: 'Contact Me' },
    ];
    const NavBtns = NavCrendentials.map(each =>
        <a key={each.id} href={each.LinkValue}>{each.InnerText}</a>
    );
    return (
        <header>
            <h2 className='Nav-Heading fw-bold'><span className='text-danger'>P</span>ortFolio</h2>
            <nav>
                <input type="checkbox" name='NavMenuIcon' id='NavMenuIcon' />
                <label htmlFor="NavMenuIcon" id='BarIcon-Label'>
                    <div className='Bar-NavIcon'>
                        <FaBars />
                    </div>
                </label>
                <div className='Nav-Contents'>
                    <div className='Inner-Header'>
                        <div className='GraduationCap-NavIcon'>
                            <FaGraduationCap />
                        </div>
                        <h2 className='fw-bold'><span className='text-danger'>P</span>ortfolio</h2>
                        <label htmlFor="NavMenuIcon" id='CloseIcon-Label'>
                            <div className='Close-NavIcon'>
                                <FaTimes />
                            </div>
                        </label>
                    </div>
                    {
                        NavBtns
                    }
                </div>
            </nav>
        </header>
    )
}

export default NavBar