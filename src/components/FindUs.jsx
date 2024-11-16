import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold"> Find Us</h2>

            <div className="join flex space-y-2 join-vertical">
                <button className="btn join-item justify-start  bg-base-200"><FaFacebook />Facebook</button>
                <button className="btn join-item justify-start bg-base-200"><FaInstagram />Instagram</button>
                <button className="btn join-item justify-start bg-base-200"><FaTwitter />Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;