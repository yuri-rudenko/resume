import React, { useEffect, useRef, useState } from 'react';

const Header = () => {

    const [speed, setSpeed] = useState(2);

    const ref = useRef();

    const handleClick = () => {
        setSpeed((prevSpeed) => Math.max(0.5, prevSpeed * 0.95));
    };

    useEffect(() => {
        const handleDocumentClick = (e) => {
            if (ref.current && e.target !== ref.current) {
                setSpeed(2);
            }
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <header>
            <div className="content">
                <div className="content-image">
                    <img ref={ref} className='profile-picture' style={{ animationDuration: `${speed}s` }} onClick={handleClick} src={require('../static/profilepicture.png')} alt='image' />
                    <div className="header-data">
                        <div className="name">
                            <b>Yuri</b>
                            <p>Rudenko</p>
                        </div>
                        <div className="speciallity">
                            FRONT END / FULL STACK DEVELOPER
                        </div>
                        <div className="links">
                            <a target='_blank' href="http://github.com/yuri-rudenko">
                                <div className="link">
                                    <img src={require('../static/links/github-mark.png')} alt="github" />
                                    <p>github.com/yuri-rudenko</p>
                                </div>
                            </a>
                            <a target='_blank' href="http://www.instagram.com/dm_dominaria">
                                <div className="link">
                                    <img src={require('../static/links/Instagram_logo_2022.svg.webp')} alt="insta" />
                                    <p>instagram.com/dm_dominaria</p>
                                </div>
                            </a>
                            <a target='_blank' href="http://www.t.me/yst4rk">
                                <div className="link">
                                    <img src={require('../static/links/Telegram_2019_Logo.svg.webp')} alt="" />
                                    <p>t.me/yst4rk</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo">
                <img src={require('../static/logo.png')} alt="logo" />
            </div>
        </header>
    );
}

export default Header;
