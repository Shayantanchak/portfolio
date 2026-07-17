import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollController Component
 * Coordinates the GSAP ScrollTrigger timeline, pinning the viewport and translating
 * the camera along the Z-axis to create the 2.5D flythrough effect. It also manages
 * the mouse look-around tilt and floating idle animations.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children Section elements
 */
export default function ScrollController({ children }) {
  const scrollContainerRef = useRef(null);
  const viewportRef = useRef(null);
  const sceneRef = useRef(null);
  const zoomRigRef = useRef(null);
  const tiltRigRef = useRef(null);
  
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 7;
  const Z_STEP = 2000; // Z-axis distance between sections

  // Section details for navigation labels
  const sectionLabels = [
    'Hero',
    'About Me',
    'Skills',
    'Projects',
    'Experience',
    'Blog',
    'Contact'
  ];

  useEffect(() => {
    const sections = gsap.utils.toArray('.section-3d');
    if (!sections.length) return;

    // --- 1. Set Initial States ---
    // Make only the first section visible initially
    gsap.set(sections, { opacity: 0, visibility: 'hidden' });
    gsap.set(sections[0], { opacity: 1, visibility: 'visible' });
    sections[0].classList.add('visible', 'active');

    // --- 2. Master ScrollTrigger Timeline ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2, // Smooth scrubbing
        pin: viewportRef.current,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Dynamic camera tilt based on scroll velocity (pitch)
          const velocity = self.getVelocity();
          // Scale down velocity to a small degree range (-5 to 5 degrees)
          const scrollPitch = Math.max(-5, Math.min(5, -velocity * 0.003));
          
          gsap.to(sceneRef.current, {
            rotateX: scrollPitch,
            duration: 0.5,
            ease: 'power1.out',
            overwrite: 'auto'
          });

          // Calculate current active section based on progress
          const progress = self.progress;
          const sectionIndex = Math.min(
            Math.floor(progress * totalSections),
            totalSections - 1
          );
          setActiveSection(sectionIndex);
        }
      }
    });

    // --- 3. Build Timeline Zoom Transitions ---
    // For each section, hold it in place then zoom to the next
    for (let i = 0; i < sections.length; i++) {
      const currentSection = sections[i];
      const nextSection = sections[i + 1];
      const nextZ = (i + 1) * Z_STEP;

      // a) Hold section in focal plane (allows reading)
      tl.to({}, { duration: 0.8 }); 

      // b) Zoom to next section (if there is one)
      if (nextSection) {
        tl.to(zoomRigRef.current, {
          z: nextZ,
          ease: 'power2.inOut',
          duration: 1.0,
          onStart: () => {
            // Make next section visible as camera zooms in
            gsap.set(nextSection, { visibility: 'visible' });
            nextSection.classList.add('visible');
          }
        }, '>'); // Run sequentially after hold

        // Fade current section out during zoom
        tl.to(currentSection, {
          opacity: 0,
          ease: 'power2.inOut',
          duration: 0.6,
          onComplete: () => {
            currentSection.classList.remove('active');
          }
        }, '<'); // Run in parallel with zoom

        // Fade next section in during zoom
        tl.to(nextSection, {
          opacity: 1,
          ease: 'power2.inOut',
          duration: 0.8,
          onComplete: () => {
            // Enable pointer events on active card
            nextSection.classList.add('active');
          }
        }, '<'); // Run in parallel with zoom
      }
    }

    // --- 4. Interactive Mouse Look-Around Tilt ---
    const handleMouseMove = (e) => {
      if (!tiltRigRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalized coordinates from -0.5 to 0.5
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;

      // Rotate: X-axis rotation is driven by mouse Y, Y-axis rotation by mouse X
      // Max rotation: 7 degrees for subtle effect
      gsap.to(tiltRigRef.current, {
        rotateX: -y * 10,
        rotateY: x * 10,
        duration: 0.8,
        ease: 'power1.out',
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- 5. Idle Bobbing Animations ---
    const midBob = gsap.to('.layer-mid', {
      y: '+=12',
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.3,
        from: 'random'
      }
    });

    const nearBob = gsap.to('.layer-near', {
      y: '-=18',
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.4,
        from: 'random'
      }
    });

    // Cleanup animations and events on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(t => t.kill());
      midBob.kill();
      nearBob.kill();
    };
  }, []);

  // Handle dot clicks for smooth scroll navigation
  const handleNavClick = (index) => {
    const scrollHeight = scrollContainerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = (index / (totalSections - 1)) * scrollHeight;
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="scroll-container" 
      ref={scrollContainerRef}
      style={{ height: `${totalSections * 100}vh` }}
    >
      {/* Viewport pins to the top of screen */}
      <div className="viewport" ref={viewportRef}>
        <div className="stars-bg" />
        
        {/* Dynamic nebulas changing colors based on active section */}
        <div 
          className="nebula-glow lime"
          style={{
            transform: `scale(${1 + activeSection * 0.1})`,
            opacity: activeSection % 2 === 0 ? 0.18 : 0.05
          }}
        />
        <div 
          className="nebula-glow orange"
          style={{
            transform: `scale(${1 - activeSection * 0.1})`,
            opacity: activeSection % 2 !== 0 ? 0.18 : 0.05
          }}
        />

        {/* 3D Scene Wrapper (handles scroll-velocity pitch tilt) */}
        <div className="scene-3d" ref={sceneRef}>
          {/* Zoom rig (handles Z-axis scroll zoom) */}
          <div 
            className="camera-rig-zoom" 
            ref={zoomRigRef}
            style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', position: 'absolute' }}
          >
            {/* Tilt rig (handles mouse look-around) */}
            <div 
              className="camera-rig-tilt" 
              ref={tiltRigRef}
              style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', position: 'absolute' }}
            >
              {children}
            </div>
          </div>
        </div>

        {/* Floating Cyberpunk Nav Dots */}
        <div className="nav-indicators">
          {sectionLabels.map((label, idx) => {
            const isOrangeDot = idx % 2 !== 0;
            return (
              <div
                key={idx}
                className={`nav-dot ${activeSection === idx ? `active ${isOrangeDot ? 'orange' : ''}` : ''}`}
                onClick={() => handleNavClick(idx)}
              >
                <div className="nav-label">{label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
