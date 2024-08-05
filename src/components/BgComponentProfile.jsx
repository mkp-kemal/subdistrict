  import { useState, useEffect } from 'react';
  import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
  import foto1 from './../assets/img1.jpg';
  import foto2 from './../assets/img2.jpg';
  import foto3 from './../assets/img3.jpg';
  import foto4 from './../assets/img4.jpg';

  const images = [
    foto2,
    foto1,
    foto4,
    foto3,
  ];

  const BgComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFade(true);
        }, 500); 
      }, 5000);

      return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setFade(true);
      }, 500); 
    };

    const handleNext = () => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 500); 
    };

    return (
      <div className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-3/5 bg-cover bg-center transition-opacity duration-500 ease-in-out rounded-3xl ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${image})`}}
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

        <div className="absolute bottom-72 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30rounded-xl">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-tosca' : 'bg-lime-950'}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    );
  };

  export default BgComponent;
