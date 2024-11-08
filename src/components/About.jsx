export default function About({ isDarkMode }) {
    return (
        <div className="relative w-full flex flex-col items-center space-y-4 px-4 md:px-8 lg:px-16 mt-40">
            {/* Less Blurry Background Layer */}
            <div
                className={`absolute ${
                    isDarkMode ? "bg-black/50" : "bg-white/50"
                } rounded-lg`}
                style={{
                    filter: 'blur(5px)',
                    zIndex: -1,
                }}
            />

            {/* Main Content */}
            <div
                className={`relative text-center text-lg p-4 rounded-lg ${
                    isDarkMode ? "text-white" : "text-black"
                }`}
                style={{
                    backdropFilter: 'blur(0px)', // Keep text layer sharp
                    border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                }}
            >
                <span
                    className={`text-4xl md:text-5xl lg:text-6xl ${
                        isDarkMode ? "text-red-500" : "text-red-700"
                    }`}
                >
                    ABOUT.
                </span>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                    The AI Generated Tool to give your Videos' the ultimate thumbnail they deserve.
                </p>
                <span
                    className={`text-3xl md:text-4xl lg:text-5xl mt-5 ${
                        isDarkMode ? "text-red-500" : "text-red-700"
                    }`}
                >
                    Usage.
                </span>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                    Just upload the file from your system and you are great to go. Simple!
                </p>
            </div>
        </div>
    );
}
