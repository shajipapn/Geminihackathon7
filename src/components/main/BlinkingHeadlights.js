import React, { useEffect, useRef } from "react";

// This overlays blinking white ellipses on the car image for headlights
const BlinkingHeadlights = ({ style }) => {
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    let on = true;
    const interval = setInterval(() => {
      if (leftRef.current && rightRef.current) {
        leftRef.current.style.opacity = on ? 1 : 0.2;
        rightRef.current.style.opacity = on ? 1 : 0.2;
      }
      on = !on;
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Positioning is based on the car image aspect ratio and headlight location
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '120px', pointerEvents: 'none', ...style }}>
      <svg width="100%" height="120" style={{ position: 'absolute', left: 0, top: 0 }}>
        <ellipse ref={leftRef} cx="22" cy="38" rx="13" ry="13" fill="#fff" opacity="0.8" />
        <ellipse ref={rightRef} cx="78" cy="38" rx="13" ry="13" fill="#fff" opacity="0.8" />
      </svg>
    </div>
  );
};

export default BlinkingHeadlights;
