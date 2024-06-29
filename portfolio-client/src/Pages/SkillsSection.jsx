import AOS from 'aos';
import '../Stylesheets/SkillsPage.css';
import React, { useEffect, useRef, useState } from 'react';

const SkillsSection = ({ScrollValues}) => {
    useEffect(() => {
        AOS.init({
            duration: 900
        });
    }, []);
    return (
        <div id='Skills-Page'>
            <header data-aos="zoom-out">
                <h1 className='fw-bold my-auto'>Skills</h1>
            </header>
            <main className='m-auto'>
                <div className="Skill-Body" data-aos="fade-right">
                    <svg width="130" height="130">
                        <circle cx={65} cy={65} r={50} stroke='orangered' style={(ScrollValues>= window.innerHeight*2) ? { animation: "Progress-Animation 2s 1s ease-in-out", strokeDashoffset: 'calc(314.160 - (314.160 * 88) / 100)' } : { animation: "none", strokeDashoffset: 'calc(314.160 - (314.160 * 88) / 100)' }} className='Progress-Circle'></circle>
                    </svg>
                    <h6>HTML</h6>
                </div>
                <div className="Skill-Body" data-aos="fade-left">
                    <svg width="130" height="130">
                        <circle cx={65} cy={65} r={50} stroke='#0af' style={(ScrollValues>= window.innerHeight*2) ? { animation: "Progress-Animation 2s 1s ease-in-out", strokeDashoffset: 'calc(314.160 - (314.160 * 82) / 100)' } : { animation: "none", strokeDashoffset: 'calc(314.160 - (314.160 * 82) / 100)' }} className='Progress-Circle'></circle>
                    </svg>
                    <h6>CSS</h6>
                </div>
                <div className="Skill-Body" data-aos="fade-right">
                    <svg width="130" height="130">
                        <circle cx={65} cy={65} r={50} stroke='springgreen' style={(ScrollValues>= window.innerHeight*2) ? { animation: "Progress-Animation 2s 1s ease-in-out", strokeDashoffset: 'calc(314.160 - (314.160 * 75) / 100)' } : { animation: "none", strokeDashoffset: 'calc(314.160 - (314.160 * 75) / 100)' }} className='Progress-Circle'></circle>
                    </svg>
                    <h6>BOOTSTRAP</h6>
                </div>
                <div className="Skill-Body" data-aos="fade-left">
                    <svg width="130" height="130">
                        <circle cx={65} cy={65} r={50} stroke='#df0' style={(ScrollValues>= window.innerHeight*2) ? { animation: "Progress-Animation 2s 1s ease-in-out", strokeDashoffset: 'calc(314.160 - (314.160 * 80) / 100)' } : { animation: "none", strokeDashoffset: 'calc(314.160 - (314.160 * 80) / 100)' }} className='Progress-Circle'></circle>
                    </svg>
                    <h6>REACT JS</h6>
                </div>
                <div className="Skill-Body" data-aos="fade-right">
                    <svg width="130" height="130">
                        <circle cx={65} cy={65} r={50} stroke='#0ef' style={(ScrollValues>= window.innerHeight*2) ? { animation: "Progress-Animation 2s 1s ease-in-out", strokeDashoffset: 'calc(314.160 - (314.160 * 70) / 100)' } : { animation: "none", strokeDashoffset: 'calc(314.160 - (314.160 * 70) / 100)' }} className='Progress-Circle'></circle>
                    </svg>
                    <h6>MySQL</h6>
                </div>
                <div className="Skill-Body" data-aos="fade-left">
                    <svg width="130" height="130">
                        <circle cx={65} cy={65} r={50} stroke='#d0d' style={(ScrollValues>= window.innerHeight*2) ? { animation: "Progress-Animation 2s 1s ease-in-out", strokeDashoffset: 'calc(314.160 - (314.160 * 55) / 100)' } : { animation: "none", strokeDashoffset: 'calc(314.160 - (314.160 * 55) / 100)' }} className='Progress-Circle'></circle>
                    </svg>
                    <h6>MONGO DB</h6>
                </div>
                <div className="Skill-Body" data-aos="fade-right">
                    <svg width="130" height="130">
                        <circle cx={65} cy={65} r={50} stroke='chartreuse' style={(ScrollValues>= window.innerHeight*2) ? { animation: "Progress-Animation 2s 1s ease-in-out", strokeDashoffset: 'calc(314.160 - (314.160 * 70) / 100)' } : { animation: "none", strokeDashoffset: 'calc(314.160 - (314.160 * 70) / 100)' }} className='Progress-Circle'></circle>
                    </svg>
                    <h6>NODE JS</h6>
                </div>
                <div className="Skill-Body" data-aos="fade-left">
                    <svg width="130" height="130">
                        <circle cx={65} cy={65} r={50} stroke='#ff3366' style={(ScrollValues>= window.innerHeight*2) ? { animation: "Progress-Animation 2s 1s ease-in-out", strokeDashoffset: 'calc(314.160 - (314.160 * 65) / 100)' } : { animation: "none", strokeDashoffset: 'calc(314.160 - (314.160 * 65) / 100)' }} className='Progress-Circle'></circle>
                    </svg>
                    <h6>EXPRESS JS</h6>
                </div>
            </main>
        </div>
    )
}

export default SkillsSection