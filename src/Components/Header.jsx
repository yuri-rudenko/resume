import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="content">
                <div className="content-image">
                    <img src={require('../static/profilepicture.png')} alt='image'/>
                    <div className="header-data">
                        <div className="name">
                            <b>Yuri</b>
                            <p>Rudenko</p>
                        </div>
                        <div className="speciallity">
                            FRONT END / FULL STACK DEVELOPER
                        </div>
                        <div className="links">
                            <div className="link">
                                <img src={require('../static/links/github-mark.png')} alt="github"/>
                                <p>github.com/yuri-rudenko</p>
                            </div>
                            <div className="link">
                                <img src={require('../static/links/Instagram_logo_2022.svg.webp')} alt="insta"/>
                                <p>instagram.com/dm_dominaria</p>
                            </div>
                            <div className="link">
                                <img src={require('../static/links/Telegram_2019_Logo.svg.webp')} alt=""/>
                                <p>t.me/yst4rk</p>
                            </div>
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
