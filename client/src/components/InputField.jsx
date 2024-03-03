import React from 'react'

function InputField({ htmlfor, label, type, placeholder, isRequired }) {
    return (
        <div className="mx-5 mt-4">
            <div className="flex items-center justify-start">
                <label htmlFor={htmlfor} className="block text-white text-sm font-bold mb-2">{label}:</label>
                {isRequired ? <span className="text-red-600 ms-2">*</span> : null}
            </div>
            <input
                type={type}
                id={htmlfor}
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                placeholder={placeholder}
                disabled={false}
                required={isRequired}
            />
        </div>
    )
}

export default InputField;