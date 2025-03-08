import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';

function Camera({ layout, onImagesCaptured }) {
    const webcamRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isCapturing, setIsCapturing] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const imagesCountRef = useRef(0);

    useEffect(() => {
        let countdownInterval;
        if (countdown > 0) {
            countdownInterval = setTimeout(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else if (countdown === 0 && isCapturing) {
            startCapturing();
        }
        return () => clearTimeout(countdownInterval);
    }, [countdown, isCapturing]);

    useEffect(() => {
        if (!isCapturing && images.length > 0) {
            onImagesCaptured(images);
        }
    }, [images, isCapturing, onImagesCaptured]);

    const startCapture = () => {
        console.log("starting...");
        setImages([]);
        imagesCountRef.current = 0;
        setIsCapturing(true);
        setCountdown(3);
    };

    const startCapturing = () => {
        const captureInterval = setInterval(() => {
            capture();
            console.log(imagesCountRef.current);
            if (imagesCountRef.current + 1 === layout) {
                clearInterval(captureInterval);
                setIsCapturing(false);
                setIsCameraOn(false);
            }
        }, 3000);
    };

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImages(prevImages => {
            const newImages = [...prevImages, imageSrc];
            imagesCountRef.current = newImages.length;
            return newImages;
        });
    };

    const toggleCamera = () => {
        setIsCameraOn(prev => !prev);
    };

    return (
        <div>
            {isCameraOn && (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/png"
                />
            )}
            <button onClick={toggleCamera}>
                {isCameraOn ? 'Close' : 'Start Camera'}
            </button>
            {isCameraOn && (
                <>
                    <button onClick={startCapture} disabled={isCapturing}>Start</button>
                </>
            )}
        </div>
    );
}

export default Camera;