import '../Stylesheets/SkillsPage.css';
import { FaTimes } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

const SkillsSection = ({ ScrollValues }) => {
    const [MenuClick, setMenuClick] = useState(false);
    const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        setScreenWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });
    }, [ScreenWidth])
    useEffect(()=>{
        (ScrollValues >= (window.innerHeight * 2) - 170) ? setMenuClick(true) : null;
    }, [ScrollValues])
    return (
        <div className='Skills-Page' id='Skills-Page'>
            <h1 className='fw-bold'>SKILLS</h1>
            <main>
                <section>
                    <div className="Outer-Menu-Container">
                        <div className={`Menu-Plus-Icon ${(MenuClick) ? 'active' : ''}`} onClick={() => setMenuClick(!MenuClick)}>
                            <FaTimes />
                        </div>
                        <div className="Inner-Menu-Container">
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 88) / 100)' } : {}} stroke='#ff3366'></circle>
                                </svg>
                                <h6>HTML</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 82) / 100)' } : {}} stroke='chartreuse'></circle>
                                </svg>
                                <h6>VANILLA JS</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 30) / 100)' } : {}} stroke='#d0d'></circle>
                                </svg>
                                <h6>GSAP</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 75) / 100)' } : {}} stroke='orange'></circle>
                                </svg>
                                <h6>REACT JS</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 84) / 100)' } : {}} stroke='#0ef'></circle>
                                </svg>
                                <h6>CSS</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 50) / 100)' } : {}} stroke='yellow'></circle>
                                </svg>
                                <h6>REDUX</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 70) / 100)' } : {}} stroke='hotpink'></circle>
                                </svg>
                                <h6>NPM</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 70) / 100)' } : {}} stroke='#0af'></circle>
                                </svg>
                                <h6>BOOTSTRAP</h6>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="Outer-Menu-Container">
                        <div className={`Menu-Plus-Icon ${(MenuClick) ? 'active' : ''}`} onClick={() => setMenuClick(!MenuClick)}>
                            <FaTimes />
                        </div>
                        <div className="Inner-Menu-Container">
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 75) / 100)' } : {}} stroke='#0af'></circle>
                                </svg>
                                <h6>MYSQL</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 70) / 100)' } : {}} stroke='chartreuse'></circle>
                                </svg>
                                <h6>NODE JS</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 70) / 100)' } : {}} stroke='yellow'></circle>
                                </svg>
                                <h6>EXPRESS JS</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 60) / 100)' } : {}} stroke='springgreen'></circle>
                                </svg>
                                <h6>MONGO DB</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 100) / 100)' } : {}} stroke='#0ef'></circle>
                                </svg>
                                <h6>#</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 100) / 100)' } : {}} stroke='hotpink'></circle>
                                </svg>
                                <h6>#</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 100) / 100)' } : {}} stroke='slateblue'></circle>
                                </svg>
                                <h6>#</h6>
                            </div>
                            <div className="Svg-Container">
                                <svg width={100} height={100}>
                                    <circle cx={50} cy={50} r={(ScreenWidth < 500) ? 35 : 45} strokeWidth={(ScreenWidth < 500) ? 6 : 8} style={(MenuClick) ? { strokeDashoffset: 'calc(var(--CirCumference) - (var(--CirCumference) * 100) / 100)' } : {}} stroke='salmon'></circle>
                                </svg>
                                <h6>#</h6>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SkillsSection