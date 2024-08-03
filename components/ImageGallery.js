import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageModal = ({ isOpen, onClose, imageSrc, onPrev, onNext }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            } else if (event.key === "ArrowLeft") {
                onPrev();
            } else if (event.key === "ArrowRight") {
                onNext();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose, onPrev, onNext]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative max-w-full max-h-[90vh]">
                <button onClick={onClose} className="absolute -top-10 -right-3 text-white hover:text-gray-300 p-2">
                    <X size={24} />
                </button>
                <button
                    onClick={onPrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={onNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2"
                >
                    <ChevronRight size={24} />
                </button>
                <Image
                    src={imageSrc}
                    alt="Enlarged project image"
                    width={800}
                    height={800}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    onError={(e) => {
                        console.error("Error loading image:", imageSrc);
                        e.target.src = "/placeholder.png";
                    }}
                />
            </div>
        </div>
    );
};

const ImageGallery = ({ images }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const goToPrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const goToNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <>
            <div className="Image self-stretch flex flex-wrap sm:flex-nowrap justify-start items-center gap-2">
                {images.map((src, index) => (
                    <div key={index} className="relative w-16 h-16 rounded overflow-hidden">
                        <Image
                            src={src}
                            alt={`Project image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => openModal(index)}
                            onError={(e) => {
                                console.error("Error loading image:", src);
                                e.target.src = "/placeholder.png";
                            }}
                        />
                    </div>
                ))}
            </div>
            <ImageModal
                isOpen={modalOpen}
                onClose={closeModal}
                imageSrc={images[selectedImageIndex]}
                onPrev={goToPrevImage}
                onNext={goToNextImage}
            />
        </>
    );
};

export default ImageGallery;
