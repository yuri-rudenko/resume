import React from 'react';

const Left = () => {
    return (
        <div className="body-left">

            <div className="profile left-section">
                <b className='paragraph-title'>PROFILE</b>
                <div className="profile-content">
                    A Frontend & Full-Stack Developer based in Kyiv, Ukraine, with 1.5 years of hands-on experience building real-world projects. Studied Front-End Development at ITVDN University and specialize in React, Node.js, and modern web technologies.

                    Built a live chat app, sales tracking system, and e-commerce store, focusing on scalability, performance, and user experience. Passionate about UI/UX and building high-quality, efficient applications.

                    Eager to contribute to real-world projects and grow as a developer.
                </div>
                <div className="contacts">
                    <div className='contacts-list-item'>
                        <img src={require('../static/contacts/phone.png')} alt="phone" />
                        <div className="contact">+38 0680664400</div>
                    </div>
                    <div className='contacts-list-item'>
                        <img src={require('../static/contacts/mail.png')} alt="email" />
                        <div className="contact">yurii.rudenko26@gmail.com</div>
                    </div>
                    <div className='contacts-list-item'>
                        <img src={require('../static/contacts/location.png')} alt="location" />
                        <div className="contact">Kyiv, Uktaine</div>
                    </div>
                </div>
            </div>
            <div className="education left-section">
                <b className='paragraph-title'>EDUCATION</b>
                <div className="education-list">
                    <div className="education-list-item">
                        <div className="education-date">2015-2020</div>
                        <div className="education-name">Small computer academy</div>
                        <div className="education-location">IT STEP academy</div>
                    </div>
                    <div className="education-list-item">
                        <div className="education-date">2022-now</div>
                        <div className="education-name">Artificial intelligence systems and methods</div>
                        <div className="education-location">Kyiv Polytechnic Institute</div>
                    </div>
                    <div className="education-list-item">
                        <div className="education-date">2023</div>
                        <div className="education-name">Frontend developer</div>
                        <div className="education-location">ITVDN</div>
                    </div>
                </div>
            </div>
            <div className="languages left-section">
                <b className='paragraph-title'>LANGUAGES</b>
                <div className="languages-list">
                    <div className="language">English</div>
                    <div className="language">Ukrainian</div>
                    <div className="language">Russian</div>
                </div>
            </div>
            <div className="hobbies left-section">
                <b className='paragraph-title'>HOBBIES</b>
                <div className="hobbies-list">
                    <div className="hobby">
                        <img src={require('../static/hobbies/headphones.png')} alt="hobby" className="hobby-image" />
                        <div className="hobby-name">Listening to Music</div>
                    </div>
                    <div className="hobby">
                        <img src={require('../static/hobbies/electric-guitar.png')} alt="hobby" className="hobby-image" />
                        <div className="hobby-name">Guitar</div>
                    </div>
                    <div className="hobby">
                        <img src={require('../static/hobbies/popcorn.png')} alt="hobby" className="hobby-image" />
                        <div className="hobby-name">Cinema</div>
                    </div>
                    <div className="hobby">
                        <img src={require('../static/hobbies/football.png')} alt="hobby" className="hobby-image" />
                        <div className="hobby-name">Football</div>
                    </div>
                    <div className="hobby">
                        <img src={require('../static/hobbies/tennis.png')} alt="hobby" className="hobby-image" />
                        <div className="hobby-name">Tennis</div>
                    </div>
                    <div className="hobby">
                        <img src={require('../static/hobbies/board-game.png')} alt="hobby" className="hobby-image" />
                        <div className="hobby-name">Tabletop games</div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Left;
