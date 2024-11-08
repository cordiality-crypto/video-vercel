export default function About({ isDarkMode }) {
    return (
        <div
            className={`w-full flex-col space-y-3 text-lg mt-12 text-center ${
                isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
        >
            <span className={`text-4xl ${isDarkMode ? "text-red-500" : "text-red-700"}`}>
                ABOUT.
            </span>
            <p>
                The AI Generated Tool to give your Videos' the ultimate thumbnail they deserve.
            </p>
            <span className={`text-3xl mt-5 ${isDarkMode ? "text-red-500" : "text-red-700"}`}>
                Usage.
            </span>
            <p>
                Just upload the file from your system and you are great to go. Simple!
            </p>
        </div>
    );
}
