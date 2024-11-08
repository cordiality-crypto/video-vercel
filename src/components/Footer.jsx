export default function Footer({ isDarkMode }) {
    return (
        <footer className={`relative py-4 w-full text-center ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <p className="text-lg font-semibold">Video Vercel</p>
            <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Video Vercel. All rights reserved.</p>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-red-700 to-red-500"></div>
        </footer>
    );
}
