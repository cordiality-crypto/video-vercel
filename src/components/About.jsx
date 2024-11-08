export default function About({ isDarkMode }) {
    return (
        <div
            className={`w-full flex flex-col space-y-4 px-4 md:px-8 lg:px-16 text-lg mt-56 text-center ${
                isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
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
    );
}
