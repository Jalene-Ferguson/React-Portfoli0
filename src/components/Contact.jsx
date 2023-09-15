import React, { useState } from "react";

export default function Contact() {
    const [inputData, setInputData ] = useState({
        name: "",
        email: "",
        message: "",
    });


const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
        ...inputData,
        [name]: value
    });
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
};

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input 
            type="text" id="name"
             name="name" value={inputData.name} onChange={handleInputChange}/>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input 
            type="text" id="email"
             name="email" value={inputData.email} onChange={handleInputChange}/>
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea 
            type="text" id="message"
             name="message" value={inputData.message} onChange={handleInputChange}/>
        </div>
        <button type="submit">Submit</button>
    </form>
);
}