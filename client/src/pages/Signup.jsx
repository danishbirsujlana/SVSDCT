import React from 'react'
import InputField from '../components/InputField';

function Signup() {

    return (
        <div className="relative h-screen bg-white flex justify-center items-center">
            <div className="absolute top-14 rounded-full right-24 h-52 w-52 bg-blue-700"></div>
            <div className="absolute top-10 rounded-full left-44 h-72 w-72 bg-green-700"></div>
            <div className="absolute bottom-4 rounded-full right-64 h-60 w-60 bg-yellow-400"></div>
            <div className="absolute bottom-14 rounded-full left-24 h-32 w-32 bg-amber-600"></div>
            <div className="absolute bottom-14 rounded-full left-96 h-96 w-96 bg-red-600"></div>
            <div className="absolute top-14 rounded-full right-96 h-48 w-48 bg-fuchsia-700"></div>

            <div className="absolute bg-black opacity-90 w-2/3">
                <button className="text-white p-3">{"<- Back to Login Page"}</button>
                <p className="text-white font-semibold text-center text-2xl">Sign Up</p>
                <InputField htmlfor="username" label="Username" type="text" placeholder="Enter your Username" isRequired />
                <InputField htmlfor="phnum" label="Phone Number" type="tel" placeholder="Enter your Phone Number" isRequired />
                <InputField htmlfor="password" label="Password" type="password" placeholder="Enter your Password" isRequired />
                <InputField htmlfor="cnfpassword" label="Confirm Password" type="password" placeholder="Renter your Password" isRequired />

                <div className="mx-5 mt-4">
                    <label htmlFor="otp" className="block text-white text-sm font-bold mb-2">Enter 6 Digit OTP:</label>
                    <input
                        type="number"
                        id="otp"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none"
                        placeholder="OTP"
                        maxLength="6"
                        inputMode="numeric"
                        pattern="[0-9]*"
                    />
                </div>

                <button className="bg-white text-black mx-5 px-3 py-1 mt-6 font-semibold text-lg rounded-md">Enter</button>
                <p className="text-white mx-5 mt-3 cursor-pointer mb-4">Don't have an account? <span className='font-bold'>Signup now</span></p>
            </div>

        </div>
    )
}

export default Signup;