import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";

const Header = () => {
    const NavListItems =
        [
            { id: 1, Value: "#Home-Page", Text: "Home" },
            { id: 2, Value: "#About-Page", Text: "About" },
            { id: 3, Value: "#Skills-Page", Text: "Skills" },
            { id: 4, Value: "#Projects-Page", Text: "Project" },
            { id: 5, Value: "#Contact-Page", Text: "Contact Me" },
        ]
    const [NavIconFlag, setNavIconFlag] = useState(false);
    const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
        });
        (ScreenWidth > 880) ? setNavIconFlag(true) : setNavIconFlag(false);
    }, [ScreenWidth])
    return (
        <header style={(ScreenWidth > 880) ? { justifyContent: "space-between" } : null}>
            {
                ScreenWidth <= 880 &&
                <div className='fs-1 my-3 d-flex position-absolute Home-Icons' style={{ alignSelf: "flex-start" }} onClick={() => setNavIconFlag(true)}>
                    <FaBars />
                </div>
            }
            <h1 className='fs-1 fw-bold my-3'>Portfolio</h1>
            <nav style={(NavIconFlag) ? { transform: "translateY(0%)" } : { transform: "translateY(-108%)" }}>
                {
                    ScreenWidth <= 880 &&
                    <div className='Nav-Head'>
                        <div className='fs-1 d-flex Home-Icons' >
                            <FaGraduationCap />
                        </div>
                        <h1 className='fs-1 fw-bold my-3'>Portfolio</h1>
                        <div className='fs-1 d-flex Home-Icons' onClick={() => setNavIconFlag(false)}>
                            <FaTimes />
                        </div>
                    </div>
                }
                <ol>
                    {
                        NavListItems.map(EachList => (
                            <li key={EachList.id} className='fs-4 fw-bold'>
                                {EachList.Text}
                                <a href={EachList.Value} onClick={()=>{(ScreenWidth>880)?setNavIconFlag(true):setNavIconFlag(false)}}></a>
                            </li>
                        ))
                    }
                </ol>
            </nav>
        </header>
    )
}

export default Header