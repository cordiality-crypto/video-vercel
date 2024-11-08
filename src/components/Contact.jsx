import Card from "./Card";

export default function Contact({ isDarkMode }) {
    return (
        <div className={`p-4 mt-40 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} text-center`}>
            <span className={` text-4xl lg:text-6xl ${isDarkMode ? "text-red-500" : "text-red-700"}`}>
                CONTACT.
            </span>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card isDarkMode={isDarkMode} name="Souharda Roy" email="b123134@iiit-bh.ac.in" />
                <Card isDarkMode={isDarkMode} name="Abhijeet Raj" email="b123004@iiit-bh.ac.in" />
                <Card isDarkMode={isDarkMode} name="Shatansh Gupta" email="b123119@iiit-bh.ac.in" />
                <Card isDarkMode={isDarkMode} name="Ayush Kumar Jha" email="b423016@iiit-bh.ac.in" />
            </div>
        </div>
    );
}
