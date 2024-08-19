import { useState, useEffect } from 'react';
import foto1 from './../assets/img13.jpg';
import foto2 from './../assets/img15.jpg';
import foto3 from './../assets/img14.jpg';
import foto4 from './../assets/img16.jpg';

const images = [
  foto2,
  foto1,
  foto4,
  foto3,
];

const BgSlideComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='mt-40' style={{ marginBottom: '40%' }}>
      <section id="slider">
        {images.map((image, index) => (
          <input
            key={index}
            type="radio"
            name="sliderImg"
            id={`s${index + 1}`}
            checked={currentIndex === index}
            onChange={() => handleSlideChange(index)}
          />
        ))}
        {images.map((image, index) => (
          <label
            key={index}
            htmlFor={`s${index + 1}`}
            id={`slide${index + 1}`}
            onClick={() => handleSlideChange(index)}
          >
            <img
            className='rounded-3xl'
              src={image}
              alt={`Slide ${index + 1}`}
              height="100%"
              width="150%"
            />
          </label>
        ))}
      </section>
    </div>
  );
};

export default BgSlideComponent;
