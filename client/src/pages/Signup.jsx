import React, { useState } from 'react'
import TogglePill from '../components/Toggle'
import InputField from '../components/InputField';

function Signup() {
    const [st, setSt] = useState(1);

    return (
        <div className="relative h-screen bg-white flex justify-center items-center">
            <div className="absolute top-14 rounded-full right-24 h-52 w-52 bg-blue-700"></div>
            <div className="absolute top-10 rounded-full left-44 h-72 w-72 bg-green-700"></div>
            <div className="absolute bottom-4 rounded-full right-64 h-60 w-60 bg-yellow-400"></div>
            <div className="absolute bottom-14 rounded-full left-24 h-32 w-32 bg-amber-600"></div>
            <div className="absolute bottom-14 rounded-full left-96 h-96 w-96 bg-red-600"></div>
            <div className="absolute top-14 rounded-full right-96 h-48 w-48 bg-fuchsia-700"></div>

            <div className="absolute bg-black opacity-90 w-2/3 h-2/3">
                <button className="text-white p-3">{"<- Back to Login Page"}</button>
                <p className="text-white font-semibold text-center text-2xl">Sign Up</p>
                <div className="flex justify-center items-center mt-4">
                    <TogglePill activeOption={st} setActiveOption={setSt} />
                </div>
                {st === 2 ? (
                    <InputField htmlfor="email" label="Email" type="email" placeholder="Enter your Email" />
                ) : (
                    <InputField htmlfor="phnum" label="Phone Number" type="tel" placeholder="Enter your Phone Number" />
                )}
                <InputField htmlfor="password" label="Password" type="password" placeholder="Enter your Password" />
                <InputField htmlfor="cnfpassword" label="Confirm Password" type="password" placeholder="Renter your Password" />
                <button className="bg-white text-black mx-5 px-3 py-1 mt-6 font-semibold text-lg rounded-md">Enter</button>
            </div>

        </div>
    )
}

export default Signup;