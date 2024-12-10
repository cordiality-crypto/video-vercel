import { useState } from "react";

export default function Upload() {
    const [videoFile, setVideoFile] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [thumbnailCount, setThumbnailCount] = useState(1);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("video/")) {
            setVideoFile(file);
            setVideoPreview(URL.createObjectURL(file));
            setErrorMessage(null);
            setDownloadUrl(null);
        } else {
            alert("Please upload a valid video file.");
        }
    };

    const handleDownload = () => {
        if (downloadUrl) {
            // Create full URL by combining backend base URL with the download path
            const fullUrl = `http://localhost:8000${downloadUrl}`;
            window.location.href = fullUrl;
        }
    };

    const handleUpload = () => {
        if (!videoFile || thumbnailCount < 1) {
            setErrorMessage("Please upload a video and set a valid thumbnail count.");
            return;
        }

        setIsLoading(true);
        setErrorMessage(null);
        setDownloadUrl(null);

        const formData = new FormData();
        formData.append("video", videoFile);
        formData.append("thumbnailCount", thumbnailCount.toString());

        fetch("http://localhost:8000/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                if (data.downloadUrl) {
                    setDownloadUrl(data.downloadUrl);
                } else {
                    setErrorMessage("Upload failed: No download URL returned.");
                }
            })
            .catch((error) => {
                setIsLoading(false);
                setErrorMessage(`Error uploading video: ${error.message}`);
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
                className="px-6 py-3 my-3 font-semibold text-white bg-[#D83F87] border-4 border-[#2A1B3D] rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#44318D]"
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

            <label className="mt-4 text-[#44318D] font-semibold flex flex-col items-center">
                Number of Thumbnails:
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={thumbnailCount}
                    onChange={(e) => setThumbnailCount(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-16 p-2 mt-2 text-center text-white bg-[#2A1B3D] border-2 border-[#D83F87] rounded-full focus:outline-none focus:ring-2 focus:ring-[#44318D]"
                />
            </label>

            <button
                onClick={handleUpload}
                className="mt-4 px-6 py-3 font-semibold text-white bg-[#44318D] rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#D83F87]"
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

            {downloadUrl && (
                <button
                    onClick={handleDownload}
                    className="mt-4 px-6 py-3 font-semibold text-white bg-[#44318D] rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#D83F87]"
                    aria-label="Download thumbnails"
                >
                    Download Thumbnails
                </button>
            )}
        </div>
    );
}