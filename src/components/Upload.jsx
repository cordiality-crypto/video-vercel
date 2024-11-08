import { useState } from "react";

export default function Upload({ darkMode }) {
    const [videoFile, setVideoFile] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("video/")) {
            setVideoFile(file);
            setVideoPreview(URL.createObjectURL(file));
        } else {
            alert("Please upload a video file.");
        }
    };

    const handleUpload = () => {
        if (!videoFile) return;
        const formData = new FormData();
        formData.append("video", videoFile);
        fetch("http://localhost:5000/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((d) => {
                console.log("Upload successful", d);
            })
            .catch((e) => {
                console.error("Error uploading", e);
            });
    };

    return (
        <div className="flex flex-col items-center text-center w-full mt-40">
            <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                id="file-upload"
                className="hidden"
            />
            <label
                htmlFor="file-upload"
                className="px-6 py-3 my-3 font-semibold text-black bg-white border-4 border-black rounded-full shadow-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none"
            >
                Browse...
            </label>
            <span className="ml-4 text-gray-700">{videoFile ? videoFile.name : "No file selected"}</span>
            {videoPreview && (
                <div className="flex flex-col items-center mt-4">
                    <h4 className="text-lg mb-2">Video Preview:</h4>
                    <video src={videoPreview} controls width="400" className="mb-4 rounded-lg shadow-lg" />
                </div>
            )}
            <button
                onClick={handleUpload}
                className="mt-4 px-6 py-3 font-semibold text-white bg-red-600 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none"
            >
                Upload Video
            </button>
        </div>
    );
}
