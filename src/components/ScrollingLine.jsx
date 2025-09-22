import React, { useEffect, useState } from 'react';

const ScrollingLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate progress to reach 100% at the start of the contact section
      const contactSection = document.querySelector('section:last-of-type');
      
      if (contactSection) {
        const contactSectionTop = contactSection.offsetTop;
        const progress = Math.min((window.scrollY / contactSectionTop) * 100, 100);
        setScrollProgress(progress);
      } else {
        // Fallback to original calculation if contact section not found
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min((window.scrollY / totalHeight) * 100, 100);
        setScrollProgress(progress);
      }
    };

    // Set initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed left-1/2 z-50 pointer-events-none transform -translate-x-[500px]"
      style={{ 
        top: 0,
        left: '50%',
        height: '100vh',
        width: '48px'
      }}
    >
      <svg
  className="w-full h-full"
  viewBox="0 0 48 400"
  preserveAspectRatio="xMidYStretch"
>
  {/* Curved path spelling out your name - extending from top to bottom */}
  <path
    d="M24 0 Q30 40 18 80 Q30 120 18 160 Q30 200 18 240 Q30 280 18 320 Q30 360 24 400"
    stroke="#3b82f6"
    strokeWidth="3"
    fill="none"
    strokeLinecap="round"
    strokeDasharray="600"
    strokeDashoffset={600 - (scrollProgress * 6)}
    style={{
      transition: 'stroke-dashoffset 0.2s ease-out',
    }}
  />
  
  {/* Your name following the curved path */}
  <text
    fontSize="12"
    fill="#1e40af"
    fontFamily="Arial, sans-serif"
    fontWeight="bold"
  >
    <textPath
      href="#curvePath"
      startOffset={`${Math.min(scrollProgress * 1.2, 100)}%`}
      style={{
        transition: 'startOffset 0.2s ease-out',
      }}
    >
      FELIX PANGESTU
    </textPath>
  </text>
  
  <path
    id="curvePath"
    d="M24 0 Q30 40 18 80 Q30 120 18 160 Q30 200 18 240 Q30 280 18 320 Q30 360 24 400"
    stroke="none"
    fill="none"
  />
</svg>




    </div>
  );
};

export default ScrollingLine;