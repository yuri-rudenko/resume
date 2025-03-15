import React from 'react';

const MyProjects = () => {
    return (
        <div className="right-section my-projects">
            <b className='paragraph-title'>MY PROJECTS</b>
            <table>
                <tr>
                    <td className="project-table-left">
                        <img src={require('../static/projects/messaging.png')} alt="project-image" />
                        <p>Messaging App</p>
                    </td>
                    <td className="project-table-right">
                        <div className="project-table-right-top">
                            <div className="project-name">Real time messaging app</div>
                            <div className="project-date">2024</div>
                        </div>
                        <div className="project-description">
                            Real time messaging app, using MERN stack and web sockets. App allows users to log in, create chats, groups and chat with each other real time, uploading files and images.
                        </div>
                        <div className="project-table-right-top">
                            <div className="project-status">LIVE</div>
                            <div className="project-link">github.com/yuri-rudenko/mern-messaging-app</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="project-table-left">
                        <img src={require('../static/projects/sale.png')} alt="project-image" />
                        <p>Sale Tracker</p>
                    </td>
                    <td className="project-table-right">
                        <div className="project-table-right-top">
                            <div className="project-name">Online Sale Tracker</div>
                            <div className="project-date">2025</div>
                        </div>
                        <div className="project-description">
                            Sale Tracker is an app I created to track sales and stock of my side hustle of selling guitar pedals. It allows me to add new items, add sale and buy orders, and look at the statistic
                        </div>
                        <div className="project-table-right-top">
                            <div className="project-status">LIVE</div>
                            <div className="project-link">github.com/yuri-rudenko/saleTracker</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="project-table-left">
                        <img src={require('../static/projects/mtg.png')} alt="project-image" />
                        <p>MTG Market</p>
                    </td>
                    <td className="project-table-right">
                        <div className="project-table-right-top">
                            <div className="project-name">E-commerce store</div>
                            <div className="project-date">2023</div>
                        </div>
                        <div className="project-description">
                            MTG Market is an e-commerce website, where you can buy cards to trading card game Magic: The Gathering. It uses public API and allows for advanced search of needed cards
                        </div>
                        <div className="project-table-right-top">
                            <div className="project-status">FINISHED</div>
                            <div className="project-link">github.com/yuri-rudenko/mtg-market-react</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="project-table-left">
                        <img src={require('../static/projects/todo.png')} alt="project-image" />
                        <p>Todo List</p>
                    </td>
                    <td className="project-table-right">
                        <div className="project-table-right-top">
                            <div className="project-name">Todo List</div>
                            <div className="project-date">2023</div>
                        </div>
                        <div className="project-description">
                            Todo list is simple project, created using pure JavaScript. Despite this, it has quite complex state system, and responsive design
                        </div>
                        <div className="project-table-right-top">
                            <div className="project-status">FINISHED</div>
                            <div className="project-link">github.com/yuri-rudenko/todo-list</div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default MyProjects;
