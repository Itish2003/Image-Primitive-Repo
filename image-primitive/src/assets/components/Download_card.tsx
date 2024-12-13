import { useRef, useEffect, useState } from 'react';
import '../css/download_card.css';
import '../../index.css';
import '../css/landing_text.css';

interface DownloadCardProps {
    image: string | null;
}

function Download_card({ image }: DownloadCardProps) {
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (image) {
            const img = new Image();
            img.src = image;
            img.onload = () => {
                const { width, height } = img;
                const maxWidth = 60 * window.innerHeight / 100; // 60vh
                const maxHeight = 254; // Fixed max height

                // Calculate scaled dimensions
                const aspectRatio = width / height;
                if (width > maxWidth || height > maxHeight) {
                    if (aspectRatio > 1) {
                        // Landscape
                        setImageSize({ width: maxWidth, height: maxWidth / aspectRatio });
                    } else {
                        // Portrait
                        setImageSize({ width: maxHeight * aspectRatio, height: maxHeight });
                    }
                } else {
                    // Use actual dimensions if within max constraints
                    setImageSize({ width, height });
                }
            };
        } else {
            // Reset size if no image
            setImageSize({ width: 60 * window.innerHeight / 100, height: 254 });
        }
    }, [image]);

    const downloadImage = () => {
        if (image) {
            const link = document.createElement('a');
            link.href = image;
            link.download = 'processed_image.png';
            link.click();
        }
    };

    return (
        <div className="container-1">
            <div className="download-content">
                <p className="little-large center robo">Amazing!</p>
                <br />
                <p className="medium robo little-heavy">Your file is ready to be downloaded...</p>
            </div>
            <div className="download-pic">
                <div
                    className="card border"
                    style={{
                        width: `${imageSize.width}px`,
                        height: `${imageSize.height}px`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    ref={cardRef}
                >
                    {image ? (
                        <img
                            src={image}
                            alt="Processed"
                            className="card-image"
                        />
                    ) : (
                        <p className="no-image-text">No Image</p>
                    )}
                </div>
                <button className="download-btn robo" onClick={downloadImage}>
                    Download
                </button>
            </div>
            
        </div>
    );
}

export default Download_card;
