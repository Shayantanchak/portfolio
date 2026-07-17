import { useEffect, useState } from 'react';

/**
 * LoadingScreen Component
 * Displays a premium loading bar and simulates asset loading for a polished intro feel.
 * 
 * @param {Object} props
 * @param {Function} props.onComplete Callback triggered when the loading finishes and loading screen fades out.
 */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Parallax Engine...');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Array of loading messages for retro-cyberpunk aesthetic
    const messages = [
      'Initializing Parallax Engine...',
      'Mapping 3D Perspective Coordinates...',
      'Sculpting Voxel Islands...',
      'Forging Lime & Orange Glowing Accents...',
      'Creating Starfields & Nebulae...',
      'Synchronizing GSAP ScrollTriggers...',
      'Rendering Journey Elements...',
      'Ready for Takeoff.'
    ];

    // Progressive loading simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        
        // Update loading text based on progress thresholds
        const textIndex = Math.min(
          Math.floor((next / 100) * messages.length),
          messages.length - 1
        );
        setLoadingText(messages[textIndex]);

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              onComplete();
            }, 800); // Matches the css transition duration for opacity
          }, 500); // Stay at 100% for a brief moment
          return 100;
        }
        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className="loader-container"
      style={{
        opacity: isFadingOut ? 0 : 1,
        visibility: isFadingOut ? 'hidden' : 'visible',
      }}
    >
      <div className="loader-logo">
        <span className="text-orange">2.5D</span>
        <span className="text-lime">JOURNEY</span>
      </div>
      
      <div className="loader-track">
        <div 
          className="loader-bar" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="loader-text">
        {loadingText} <span className="text-lime">{progress}%</span>
      </div>
    </div>
  );
}
