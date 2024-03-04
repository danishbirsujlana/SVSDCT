import { useState } from "react";
import InputField from "../components/InputField";
import StringTransition from "../components/StringTransition";
import TextAreaField from "../components/TextAreaField";

function Contact() {
    const [data, setData] = useState({ senderName: "", email: "", msg: "" });

    const changeHandler = (key, val) => {
        setData({
            ...data,
            [key]: val
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div className='flex flex-col lg:flex-row items-center justify-evenly mt-44 mb-10'>
            <div className="w-full lg:px-6 mb-10 flex flex-col items-center">
                <h1 className="font-bold text-4xl text-orange-600">Connect with Us</h1>
                <StringTransition />
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="w-3/4 p-3 rounded-md shadow-custom">
                    <InputField htmlfor="name" label="Your Name" placeholder="Name" type="text" lightBg value={data?.senderName} setValue={(v) => changeHandler("senderName", v)} />
                    <InputField htmlfor="email" label="Your Email" placeholder="Email" type="email" lightBg value={data?.email} setValue={(v) => changeHandler("email", v)} />
                    <TextAreaField htmlfor="msg" label="Message" placeholder="Message" value={data?.msg} setValue={(v) => changeHandler("msg", v)} />
                    <button className="mx-5 mt-2 bg-orange-600 font-semibold text-white py-1 px-3 rounded-md" onClick={submitHandler}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;