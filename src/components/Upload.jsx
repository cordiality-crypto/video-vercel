import { useState } from "react";

export default function Upload() {
    // State variables for managing video file, preview, loading status, errors, and response
    const [videoFile, setVideoFile] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [imageResponse, setImageResponse] = useState(null);

    // Handle file input and create a video preview
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("video/")) {
            setVideoFile(file);
            setVideoPreview(URL.createObjectURL(file)); // Create preview URL
            setErrorMessage(null); // Reset error messages
            setImageResponse(null); // Reset image response
        } else {
            alert("Please upload a valid video file.");
        }
    };

    // Handle file upload to the backend
    const handleUpload = () => {
        if (!videoFile) return;
        setIsLoading(true);
        setErrorMessage(null);

        const formData = new FormData();
        formData.append("video", videoFile); // Append video file to form data

        // Make POST request to backend upload route
        fetch("http://localhost:5000/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                if (data.imageUrl) {
                    setImageResponse(data.imageUrl); // Set the response image URL
                } else {
                    setErrorMessage("Upload failed: No image returned.");
                }
            })
            .catch((error) => {
                setIsLoading(false);
                setErrorMessage("Error uploading video. Please try again.");
                console.error("Error uploading:", error);
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
                className="px-6 py-3 my-3 font-semibold text-white bg-[#D83F87] border-4 border-[#2A1B3D] rounded-full shadow-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#44318D]"
                aria-label="Browse to upload a video file"
            >
                Browse...
            </label>
            <span className="ml-4 text-white">
                {videoFile ? videoFile.name : "No file selected"}
            </span>

            {videoPreview && (
                <div className="flex flex-col items-center mt-4">
                    <h4 className="text-lg mb-2 text-[#44318D]">Video Preview:</h4>
                    <video
                        src={videoPreview}
                        controls
                        width="400"
                        className="mb-4 rounded-lg shadow-lg border-2 border-[#E98074]"
                        aria-label="Video preview"
                    />
                </div>
            )}

            <button
                onClick={handleUpload}
                className="mt-4 px-6 py-3 font-semibold text-white bg-[#44318D] rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#D83F87]"
                aria-label="Upload selected video file"
            >
                Upload Video
            </button>

            {isLoading && (
                <div className="mt-4 text-[#D83F87]">Uploading, please wait...</div>
            )}

            {errorMessage && (
                <div className="mt-4 text-red-500">{errorMessage}</div>
            )}

            {imageResponse && (
                <div className="flex flex-col items-center mt-4">
                    <h4 className="text-lg mb-2 text-[#44318D]">Generated Thumbnail:</h4>
                    <img
                        src={imageResponse}
                        alt="Generated Thumbnail"
                        width="400"
                        className="rounded-lg shadow-lg border-2 border-[#E98074]"
                    />
                </div>
            )}
        </div>
    );
}
