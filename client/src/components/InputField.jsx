import React from 'react'

function InputField({ htmlfor, label, type, placeholder }) {
    return (
        <div className="mx-5 mt-4">
            <label htmlFor={htmlfor} className="block text-white text-sm font-bold mb-2">{label}:</label>
            <input
                type={type}
                id={htmlfor}
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputField;