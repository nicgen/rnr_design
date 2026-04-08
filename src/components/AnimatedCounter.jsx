import { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ value, prefix = "", suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer;
    if (window.IntersectionObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Animate only once when it enters screen
          }
        },
        { threshold: 0 } // changed threshold to 0 for immediate trigger
      );
      
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    } else {
      setIsVisible(true);
    }
    
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const finalValue = parseInt(value, 10);
    
    if (isNaN(finalValue)) {
      setCount(value);
      return;
    }

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing out function for smooth finish
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(finalValue * easeOutQuart));
      
      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(finalValue);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [value, duration, isVisible]);

  return <span className="inline-block" ref={elementRef}>{prefix}{count}{suffix}</span>;
}
