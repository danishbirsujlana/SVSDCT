import React from 'react';
import orgLogo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <div className='bg-slate-900 mt-10 py-6'>
            <div className='px-5 flex flex-col justify-evenly items-center lg:px-32 lg:flex-row'>
                <div>
                    <img src={orgLogo} className='h-36' alt="..." />
                </div>
                <div className='mx-0'>
                    <p className='text-2xl font-semibold text-orange-600'>We are...</p>
                    <p className='text-md text-white'>non-profit organisation that operates independently of any government. Mainly we aim to educate underprivileged students and help them in the pursuit of their dreams.</p>
                    <p className='text-sm text-center font-semibold text-orange-600 my-6'>Swami Vivekananda Social Development and Charitable Trust &copy; 2024</p>
                </div>
                <div>
                    <button className="bg-orange-600 text-white text-sm font-semibold py-3 rounded-xl m-2 transition duration-200 ease-in-out hover:bg-orange-700" onClick={() => navigate("/connect")}>Connect with us</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;