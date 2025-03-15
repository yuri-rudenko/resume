import React from 'react';

const Certificates = () => {
    return (
        <div className="right-section certificates">
            <b className='paragraph-title'>CERTIFICATES</b>
            <div className="certificates-list">
                <div className="certificate">
                    <img src={require("../static/certificates/cyber.jpg")} alt="cyber" />
                    <p>Frontend Delevoper (React) CyberBionic Systematics</p>
                </div>
                <div className="certificate">
                    <img src={require("../static/certificates/step.png")} alt="step" />
                    <p>Small Computer Academy Graduate</p>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
