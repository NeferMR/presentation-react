import React, { useEffect, useRef, useState } from 'react';

function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  const getTransformClass = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClasses} translate-y-10 opacity-0`;
        case 'down':
          return `${baseClasses} -translate-y-10 opacity-0`;
        case 'left':
          return `${baseClasses} translate-x-10 opacity-0`;
        case 'right':
          return `${baseClasses} -translate-x-10 opacity-0`;
        case 'fade':
          return `${baseClasses} opacity-0`;
        case 'scale':
          return `${baseClasses} scale-95 opacity-0`;
        default:
          return `${baseClasses} translate-y-10 opacity-0`;
      }
    }
    
    return `${baseClasses} translate-y-0 translate-x-0 scale-100 opacity-100`;
  };

  return (
    <div ref={elementRef} className={`${getTransformClass()} ${className}`}>
      {children}
    </div>
  );
}

export default ScrollReveal;
