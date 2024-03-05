import { useState } from "react";
import InputField from "../components/InputField";
import StringTransition from "../components/StringTransition";
import TextAreaField from "../components/TextAreaField";
import { doPOST } from "../store/httpUtil/httpUtils";
import { ENDPOINTS } from "../common";
import toast from "react-hot-toast";

function Contact() {
    const [data, setData] = useState({ subject: "", email: "", msg: "" });

    const changeHandler = (key, val) => {
        setData({
            ...data,
            [key]: val
        })
    }

    const submitHandler = async (e) => {
        console.log("ok");
        e.preventDefault();
        const res = await doPOST(ENDPOINTS.sendMail, data);
        if (res.status === 200) {
            toast.success(res.data?.message);
            setData({ subject: "", email: "", msg: "" });
        }
        else {
            toast.error(res.data?.message);
        }
    }

    return (
        <div className='flex flex-col lg:flex-row items-center justify-evenly mt-44 mb-10'>
            <div className="w-full lg:px-6 mb-10 flex flex-col items-center">
                <h1 className="font-bold text-4xl text-orange-600">Connect with Us</h1>
                <StringTransition />
            </div>

            <div className="w-full flex justify-center items-center">
                <div className="w-3/4 p-3 rounded-md shadow-custom">
                    <InputField htmlfor="email" label="Your Email" placeholder="Email ID" type="email" lightBg value={data?.email} setValue={(v) => changeHandler("email", v)} />
                    <InputField htmlfor="subject" label="Subject" placeholder="Subject" type="text" lightBg value={data?.subject} setValue={(v) => changeHandler("subject", v)} />
                    <TextAreaField htmlfor="msg" label="Message" placeholder="Message" value={data?.msg} setValue={(v) => changeHandler("msg", v)} />
                    <button className="mx-5 mt-2 bg-orange-600 font-semibold text-white py-1 px-3 rounded-md" onClick={submitHandler}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;