import React, { useState } from 'react'

export default function AddContact({ addContactHandler }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === "" || formData.email === "") {
            alert("Please fill required fields");
            return;
        }
        addContactHandler(formData);
        setFormData({ name: "", email: "" });
        console.log("click", formData);
    };

    return (
    
        <div className="flex justify-center items-center bg-gradient-to-br from-indigo-300 via-pink-300 to-yellow-300 p-6 bg-pattern-1 animate-fade-in" style={{height: '40rem'}}>
        <h2 className='absolute text-3xl font-bold text-pink-700' style={{top: '11%'}}> Contact Manager</h2>
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-purple-400 transform transition-all hover:scale-105 hover:shadow-2xl duration-500 ease-in-out">
                <h2 className="text-3xl font-extrabold mb-8 text-center text-purple-700">Add a New Contact</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-all duration-300 hover:border-purple-500 shadow-md hover:shadow-lg"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-2 border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-all duration-300 hover:border-purple-500 shadow-md hover:shadow-lg"
                        />
                        <p className="text-xs text-gray-500 mt-1">We'll never share your email.</p>
                    </div>
                    <div className="relative">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white py-3 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-30"
                        >
                            Submit
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}
