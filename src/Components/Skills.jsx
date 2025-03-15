import React from 'react';

const Skills = () => {
    return (
        <div className="right-section skills">
            <b className='paragraph-title'>SKILLS</b>
            <div className="skills-list">
                <div className="skill">
                    <img src={require("../static/skills/js.png")} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/react.png")} alt="" />
                    <p>React</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/node.png")} alt="" />
                    <p>Node JS</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/rsuite.png")} alt="" />
                    <p>Rsuite</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/ant.png")} alt="" />
                    <p>Ant Design</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/mui.png")} alt="" />
                    <p>Material UI</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/socket.png")} alt="" />
                    <p>Socket.io</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/form.png")} alt="" />
                    <p>React Hook Form</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/mobx.png")} alt="" />
                    <p>MobX</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/redux.png")} alt="" />
                    <p>Redux Toolkit</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/mongo.png")} alt="" />
                    <p>Mongo DB</p>
                </div>
                <div className="skill">
                    <div className="images">
                        <img className='html' src={require("../static/skills/html.webp")} alt="" />
                        <img src={require("../static/skills/css.webp")} alt="" />
                    </div>
                    <p>HTML CSS</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/sass.png")} alt="" />
                    <p>Sass</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/requests.png")}alt="" />
                    <p>Python Requests</p>
                </div>
                <div className="skill">
                    <img src={require("../static/skills/c.png")} alt="" />
                    <p>C</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
