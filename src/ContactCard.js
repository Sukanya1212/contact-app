import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ContactCard = ({ contact, clickHander }) => {
    const { id, name, email } = contact;

    return (
        <div style={{width: '86%'}} className="relative flex items-center justify-between p-6 rounded-2xl shadow-lg bg-white/30 backdrop-blur-md border border-white/40 transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">

            {/* Left: Avatar and Info */}
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500 shadow-md">
                    <img
                        className="w-full h-full object-cover"
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="user"
                    />
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                    <p className="text-sm text-gray-600">{email}</p>
                </div>
            </div>

            {/* Right: Delete Button */}
            <button
                className=" mx-4 bg-gradient-to-r bg-red-400 text-white border-red-100 py-2 px-4 rounded-xl shadow-md hover:scale-105 transition-all duration-300 flex items-center gap-2"
                onClick={() => clickHander(id)}
            >
                <FaTrashAlt className="text-sm" />
                Delete
            </button>
        </div>
    );
};

export default ContactCard;
