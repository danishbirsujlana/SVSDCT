import React from 'react'
import InputField from '../components/InputField';

function Login() {

    return (
        <div className="relative h-screen bg-white flex justify-center items-center">
            <div className="absolute top-14 rounded-full right-24 h-52 w-52 bg-blue-700"></div>
            <div className="absolute top-10 rounded-full left-44 h-72 w-72 bg-green-700"></div>
            <div className="absolute bottom-4 rounded-full right-64 h-60 w-60 bg-yellow-400"></div>
            <div className="absolute bottom-14 rounded-full left-24 h-32 w-32 bg-amber-600"></div>
            <div className="absolute bottom-14 rounded-full left-96 h-96 w-96 bg-red-600"></div>
            <div className="absolute top-14 rounded-full right-96 h-48 w-48 bg-fuchsia-700"></div>

            <div className="absolute bg-black opacity-90 w-2/3 pb-4">
                <button className="text-white p-3">{"<- Back to Home"}</button>
                <p className="text-white font-semibold text-center text-2xl">Login</p>
                <InputField htmlfor="username" label="Username" type="text" placeholder="Enter your Username" isRequired />
                <InputField htmlfor="password" label="Password" type="password" placeholder="Enter your Password" isRequired />

                <div className="my-6 mx-5">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox mr-2" />
                        <span className="text-sm text-white">Remember Me</span>
                    </label>
                </div>
                <button className="bg-white text-black mx-5 px-3 py-1 font-semibold text-lg rounded-md">Enter</button>
            </div>

        </div>
    )
}

export default Login;