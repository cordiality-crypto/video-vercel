import Card from "./Card";

export default function Contact() {
    return (
        <div className="relative w-full flex flex-col items-center space-y-4 px-4 md:px-8 lg:px-16 mt-40">
            <div
                className="absolute rounded-lg"
                style={{
                    backgroundColor: "#A4B3B6",
                    filter: "blur(5px)",
                    zIndex: -1,
                }}
            />
            <div
                className="relative text-center text-lg p-7 rounded-lg"
                style={{
                    backgroundColor: "#2A1B3D",
                    color: "#E98074",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(0px)",
                }}
            >
                <span
                    className="text-4xl md:text-5xl lg:text-6xl mb-4"
                    style={{ color: "#D83F87" }}
                >
                    CONTACT.
                </span>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-4">
                    Reach out to any of us directly for inquiries.
                </p>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card name="Souharda Roy" email="b123134@iiit-bh.ac.in" />
                    <Card name="Abhijeet Raj" email="b123004@iiit-bh.ac.in" />
                    <Card name="Shatansh Gupta" email="b123119@iiit-bh.ac.in" />
                    <Card name="Ayush Kumar Jha" email="b423016@iiit-bh.ac.in" />
                </div>
            </div>
        </div>
    );
}
