export default function About() {
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
                    className="text-4xl md:text-5xl lg:text-6xl mb-3"
                    style={{ color: "#D83F87" }}
                >
                    ABOUT.
                </span>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-4 mb-4">
                    The AI Generated Tool to give your Videos' the ultimate thumbnail they deserve.
                </p>
                <span
                    className="text-3xl md:text-4xl lg:text-5xl mt-5"
                    style={{ color: "#44318D" }}
                >
                    Usage.
                </span>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-4 mb-4">
                    Just upload the file from your system and you are great to go. Simple!
                </p>
            </div>
        </div>
    );
}
