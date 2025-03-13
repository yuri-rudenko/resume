import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="content">
                <div className="content-image">
                    <img src='image' alt='image'></img>
                    <div className="header-data">
                        <div className="name">
                            <b>Yuri</b>
                            <p>Rudenko</p>
                        </div>
                        <div className="speciallity">
                            FRONT END / FULL STACK DEVELOPER
                        </div>
                        <div className="links">
                            links
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo">
                <img src="logo" alt="logo" />
            </div>
        </header>
    );
}

export default Header;
