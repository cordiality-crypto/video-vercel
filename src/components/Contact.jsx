import Card from "./Card";

export default function Contact({ isDarkMode }) {
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
                    CONTACT.
                </span>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                    Reach out to any of us directly for inquiries.
                </p>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card isDarkMode={isDarkMode} name="Souharda Roy" email="b123134@iiit-bh.ac.in" />
                    <Card isDarkMode={isDarkMode} name="Abhijeet Raj" email="b123004@iiit-bh.ac.in" />
                    <Card isDarkMode={isDarkMode} name="Shatansh Gupta" email="b123119@iiit-bh.ac.in" />
                    <Card isDarkMode={isDarkMode} name="Ayush Kumar Jha" email="b423016@iiit-bh.ac.in" />
                </div>
            </div>
        </div>
    );
}
