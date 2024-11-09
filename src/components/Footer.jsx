export default function Footer() {
    return (
        <footer
            className="relative py-4 w-full text-center mt-20"
            style={{
                backgroundColor: "#2A1B3D",
                color: "#E98074",
            }}
        >
            <p className="text-lg font-semibold">Video Vercel</p>
            <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Video Vercel. All rights reserved.</p>
            <div
                className="absolute bottom-0 left-0 w-full h-4"
                style={{
                    background: "linear-gradient(to top, #44318D, #2A1B3D)",
                }}
            ></div>
        </footer>
    );
}
