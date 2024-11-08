import { useState } from "react";

export default function Navbar({ onToggle }) {
    const [isLightMode, setIsLightMode] = useState(true); // Start with light mode

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
        if (onToggle) onToggle(isLightMode); // Pass the correct mode to parent
    };

    return (
        <nav className={`w-full px-4 py-3 shadow-md ${isLightMode ? "bg-white text-black" : "bg-black text-white"}`}>
            <div className="flex justify-end items-center">
                {/* Right-aligned theme toggle button */}
                <button onClick={toggleTheme} aria-label="Toggle theme" className="focus:outline-none">
                    {isLightMode ? (
                        <div className="flex items-center justify-center bg-gray-200 rounded-full h-8 w-8 shadow-md transition duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 110-16 8 8 0 010 16zm0-14a6 6 0 100 12 6 6 0 000-12z" clipRule="evenodd" />
                            </svg>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center bg-yellow-300 rounded-full h-8 w-8 shadow-md transition duration-500 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a1 1 0 100 2 6 6 0 010 12 1 1 0 100 2 8 8 0 100-16z" />
                            </svg>
                        </div>
                    )}
                </button>
            </div>
        </nav>
    );
}
