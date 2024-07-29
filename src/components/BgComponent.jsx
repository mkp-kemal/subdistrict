import { useState, useEffect } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const images = [
  'https://i.ibb.co.com/NYPHw1D/20240728-083711.jpg',
  'https://i.ibb.co.com/XySXFyN/IMG-5338.jpg',
  'https://picsum.photos/1200/800?random=3',
  'https://picsum.photos/1200/800?random=4',
  'https://picsum.photos/1200/800?random=5'
];

const BgComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30"
      >
        <HiArrowNarrowLeft size={24} />
        <span className="sr-only">Previous</span>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 z-30"
      >
        <HiArrowNarrowRight size={24} />
        <span className="sr-only">Next</span>
      </button>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BgComponent;
