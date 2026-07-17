import React from 'react';

/**
 * Helper component to render glowing neon particles/stars
 */
export function FloatingParticles({ count = 10, color = '#a3ff12' }) {
  const particles = Array.from({ length: count });
  return (
    <svg className="absolute w-full h-full pointer-events-none" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {particles.map((_, i) => {
        const cx = Math.random() * 100;
        const cy = Math.random() * 100;
        const r = Math.random() * 3 + 1;
        const delay = Math.random() * 5;
        const duration = Math.random() * 6 + 4;
        return (
          <circle
            key={i}
            cx={`${cx}%`}
            cy={`${cy}%`}
            r={r}
            fill={color}
            opacity="0.6"
            style={{
              animation: `float-particle ${duration}s ease-in-out infinite alternate`,
              animationDelay: `${delay}s`,
              filter: `drop-shadow(0 0 6px ${color})`
            }}
          />
        );
      })}
      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.3); opacity: 0.8; }
          100% { transform: translateY(-40px) scale(0.8); opacity: 0.2; }
        }
      `}</style>
    </svg>
  );
}

/**
 * 1. HERO SCENE LAYERS
 */
export function HeroFar() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.5 }}>
      {/* Giant low-poly glowing moon */}
      <circle cx="400" cy="220" r="120" fill="url(#heroMoonGrad)" filter="url(#glowMoon)" />
      <defs>
        <radialGradient id="heroMoonGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 220) rotate(90) scale(120)">
          <stop offset="0%" stopColor="#a3ff12" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#ff8c00" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0a0e27" stopOpacity="0" />
        </radialGradient>
        <filter id="glowMoon" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="30" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export function HeroMid() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main floating voxel island */}
      <path d="M400 280 L650 380 L400 480 L150 380 Z" fill="url(#islandTopHero)" />
      <path d="M150 380 L400 480 L400 520 L150 420 Z" fill="url(#islandLeftHero)" />
      <path d="M400 480 L650 380 L650 420 L400 520 Z" fill="url(#islandRightHero)" />
      
      {/* Voxel Character Avatar standing on island */}
      {/* Head */}
      <rect x="385" y="200" width="30" height="30" rx="3" fill="#ff8c00" filter="url(#glowVoxel)" />
      <rect x="390" y="210" width="8" height="6" fill="#a3ff12" />
      <rect x="402" y="210" width="8" height="6" fill="#a3ff12" />
      {/* Body */}
      <rect x="375" y="235" width="50" height="45" rx="4" fill="#1b2244" stroke="#ff8c00" strokeWidth="2" />
      {/* Arms & Legs */}
      <rect x="360" y="238" width="12" height="30" rx="2" fill="#a3ff12" />
      <rect x="428" y="238" width="12" height="30" rx="2" fill="#a3ff12" />
      <rect x="382" y="280" width="14" height="20" rx="2" fill="#11173d" />
      <rect x="404" y="280" width="14" height="20" rx="2" fill="#11173d" />
      
      <defs>
        <linearGradient id="islandTopHero" x1="400" y1="280" x2="400" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e295d" />
          <stop offset="100%" stopColor="#11173d" />
        </linearGradient>
        <linearGradient id="islandLeftHero" x1="150" y1="380" x2="400" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d1230" />
          <stop offset="100%" stopColor="#05081b" />
        </linearGradient>
        <linearGradient id="islandRightHero" x1="400" y1="520" x2="650" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#141b3f" />
          <stop offset="100%" stopColor="#090d22" />
        </linearGradient>
        <filter id="glowVoxel" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export function HeroNear() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floating foreground crystals and neon rocks */}
      <polygon points="120,480 140,430 160,480" fill="#a3ff12" filter="url(#glowCrystal)" />
      <polygon points="135,490 150,450 165,490" fill="#ff8c00" filter="url(#glowCrystal)" />
      
      <polygon points="680,450 705,390 730,450" fill="#ff8c00" filter="url(#glowCrystal)" />
      <polygon points="660,470 680,410 700,470" fill="#a3ff12" filter="url(#glowCrystal)" />
      
      <defs>
        <filter id="glowCrystal" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}


/**
 * 2. ABOUT SCENE LAYERS
 */
export function AboutFar() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35 }}>
      {/* Mountain silhouettes */}
      <polygon points="100,500 250,320 400,500" fill="#11173d" />
      <polygon points="300,500 480,280 660,500" fill="#0c112e" />
      <polygon points="200,500 380,350 560,500" fill="#080c22" />
    </svg>
  );
}

export function AboutMid() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M400 290 L650 390 L400 490 L150 390 Z" fill="url(#islandTopAbout)" />
      <path d="M150 390 L400 490 L400 530 L150 430 Z" fill="url(#islandLeftAbout)" />
      <path d="M400 490 L650 390 L650 430 L400 530 Z" fill="url(#islandRightAbout)" />
      
      {/* Cozy voxel tree */}
      {/* Trunk */}
      <rect x="388" y="220" width="24" height="80" fill="#ff8c00" opacity="0.8" />
      {/* Voxel Leaves */}
      <rect x="350" y="160" width="100" height="70" rx="6" fill="#1e3f36" stroke="#a3ff12" strokeWidth="2" />
      <rect x="370" y="130" width="60" height="50" rx="4" fill="#2d5e50" stroke="#a3ff12" strokeWidth="2" />
      <rect x="360" y="180" width="20" height="20" fill="#a3ff12" />
      <rect x="420" y="190" width="20" height="20" fill="#ff8c00" />
      
      <defs>
        <linearGradient id="islandTopAbout" x1="400" y1="290" x2="400" y2="490" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1c2858" />
          <stop offset="100%" stopColor="#10163a" />
        </linearGradient>
        <linearGradient id="islandLeftAbout" x1="150" y1="390" x2="400" y2="530" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0b0f27" />
          <stop offset="100%" stopColor="#040615" />
        </linearGradient>
        <linearGradient id="islandRightAbout" x1="400" y1="530" x2="650" y2="390" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#12183b" />
          <stop offset="100%" stopColor="#080a1f" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AboutNear() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floating debris closer to camera */}
      <rect x="180" y="440" width="25" height="25" rx="3" fill="#ff8c00" transform="rotate(25 180 440)" filter="url(#glowAboutNear)" />
      <rect x="620" y="450" width="30" height="30" rx="4" fill="#a3ff12" transform="rotate(-15 620 450)" filter="url(#glowAboutNear)" />
      <defs>
        <filter id="glowAboutNear" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}


/**
 * 3. SKILLS SCENE LAYERS
 */
export function SkillsFar() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.4 }}>
      {/* Starburst constellation effect */}
      <line x1="200" y1="150" x2="350" y2="300" stroke="#ff8c00" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="600" y1="150" x2="450" y2="300" stroke="#a3ff12" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="400" y1="100" x2="400" y2="300" stroke="#a3ff12" strokeWidth="0.5" />
      <circle cx="200" cy="150" r="4" fill="#ff8c00" />
      <circle cx="600" cy="150" r="4" fill="#a3ff12" />
    </svg>
  );
}

export function SkillsMid() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M400 300 L650 400 L400 500 L150 400 Z" fill="url(#islandTopSkills)" />
      <path d="M150 400 L400 500 L400 540 L150 440 Z" fill="url(#islandLeftSkills)" />
      <path d="M400 500 L650 400 L650 440 L400 540 Z" fill="url(#islandRightSkills)" />
      
      {/* Voxel pillars of power (Skills indicators) */}
      {/* Left Pillar */}
      <rect x="260" y="180" width="35" height="150" fill="#1b2244" stroke="#ff8c00" strokeWidth="2" />
      <polygon points="260,180 277.5,150 295,180" fill="#ff8c00" />
      
      {/* Center Pillar */}
      <rect x="382" y="140" width="36" height="190" fill="#151b38" stroke="#a3ff12" strokeWidth="2" />
      <polygon points="382,140 400,100 418,140" fill="#a3ff12" />

      {/* Right Pillar */}
      <rect x="500" y="200" width="35" height="130" fill="#1b2244" stroke="#ff8c00" strokeWidth="2" />
      <polygon points="500,200 517.5,170 535,200" fill="#ff8c00" />

      <defs>
        <linearGradient id="islandTopSkills" x1="400" y1="300" x2="400" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e2c60" />
          <stop offset="100%" stopColor="#11193d" />
        </linearGradient>
        <linearGradient id="islandLeftSkills" x1="150" y1="400" x2="400" y2="540" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0b1029" />
          <stop offset="100%" stopColor="#040617" />
        </linearGradient>
        <linearGradient id="islandRightSkills" x1="400" y1="540" x2="650" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#131d47" />
          <stop offset="100%" stopColor="#090e25" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SkillsNear() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Glowing energy sparks float up from bottom */}
      <circle cx="280" cy="420" r="8" fill="#ff8c00" filter="url(#glowSkillsSpark)" />
      <circle cx="400" cy="380" r="10" fill="#a3ff12" filter="url(#glowSkillsSpark)" />
      <circle cx="520" cy="430" r="8" fill="#ff8c00" filter="url(#glowSkillsSpark)" />
      <defs>
        <filter id="glowSkillsSpark" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}


/**
 * 4. PROJECTS SCENE LAYERS
 */
export function ProjectsFar() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
      {/* Digital cyber grid overlay in the back */}
      <path d="M0,250 L800,250 M0,300 L800,300 M0,350 L800,350 M300,100 L300,500 M400,100 L400,500 M500,100 L500,500" stroke="rgba(163,255,18,0.2)" strokeWidth="1" />
    </svg>
  );
}

export function ProjectsMid() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M400 310 L650 410 L400 510 L150 410 Z" fill="url(#islandTopProjects)" />
      <path d="M150 410 L400 510 L400 550 L150 450 Z" fill="url(#islandLeftProjects)" />
      <path d="M400 510 L650 410 L650 450 L400 550 Z" fill="url(#islandRightProjects)" />
      
      {/* Neon Archway Portal (Voxel Project gate) */}
      <rect x="300" y="160" width="30" height="200" fill="#1b2244" stroke="#ff8c00" strokeWidth="2" />
      <rect x="470" y="160" width="30" height="200" fill="#1b2244" stroke="#ff8c00" strokeWidth="2" />
      <rect x="300" y="130" width="200" height="30" fill="#151b38" stroke="#a3ff12" strokeWidth="3" filter="url(#glowArch)" />
      
      <defs>
        <linearGradient id="islandTopProjects" x1="400" y1="310" x2="400" y2="510" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a275a" />
          <stop offset="100%" stopColor="#0f1638" />
        </linearGradient>
        <linearGradient id="islandLeftProjects" x1="150" y1="410" x2="400" y2="550" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#090c23" />
          <stop offset="100%" stopColor="#030412" />
        </linearGradient>
        <linearGradient id="islandRightProjects" x1="400" y1="550" x2="650" y2="410" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#11193d" />
          <stop offset="100%" stopColor="#070b1f" />
        </linearGradient>
        <filter id="glowArch" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export function ProjectsNear() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tech brackets framing the scene in foreground */}
      <path d="M 50,420 L 90,470 L 160,470" stroke="#a3ff12" strokeWidth="4" strokeLinecap="round" filter="url(#glowTechNear)" />
      <path d="M 750,420 L 710,470 L 640,470" stroke="#ff8c00" strokeWidth="4" strokeLinecap="round" filter="url(#glowTechNear)" />
      <defs>
        <filter id="glowTechNear" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}


/**
 * 5. EXPERIENCE SCENE LAYERS
 */
export function ExperienceFar() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35 }}>
      {/* Time track rings */}
      <circle cx="400" cy="300" r="220" stroke="rgba(255,140,0,0.15)" strokeWidth="2" strokeDasharray="10,15" />
      <circle cx="400" cy="300" r="150" stroke="rgba(163,255,18,0.1)" strokeWidth="1" />
    </svg>
  );
}

export function ExperienceMid() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M400 320 L650 420 L400 520 L150 420 Z" fill="url(#islandTopExp)" />
      <path d="M150 420 L400 520 L400 560 L150 460 Z" fill="url(#islandLeftExp)" />
      <path d="M400 520 L650 420 L650 460 L400 560 Z" fill="url(#islandRightExp)" />
      
      {/* Voxel winding timeline path (staircase up) */}
      <rect x="250" y="270" width="40" height="30" fill="#ff8c00" stroke="#000" strokeWidth="1" />
      <rect x="280" y="240" width="40" height="30" fill="#a3ff12" stroke="#000" strokeWidth="1" />
      <rect x="310" y="210" width="40" height="30" fill="#1b2244" stroke="#ff8c00" strokeWidth="1" />
      <rect x="340" y="180" width="40" height="30" fill="#ff8c00" stroke="#000" strokeWidth="1" />
      <rect x="370" y="150" width="40" height="30" fill="#a3ff12" stroke="#000" strokeWidth="1" />
      
      <defs>
        <linearGradient id="islandTopExp" x1="400" y1="320" x2="400" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#192556" />
          <stop offset="100%" stopColor="#0e1434" />
        </linearGradient>
        <linearGradient id="islandLeftExp" x1="150" y1="420" x2="400" y2="560" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#080a20" />
          <stop offset="100%" stopColor="#02030f" />
        </linearGradient>
        <linearGradient id="islandRightExp" x1="400" y1="560" x2="650" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f173b" />
          <stop offset="100%" stopColor="#06091d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ExperienceNear() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floating vintage clock parts or gears */}
      <circle cx="160" cy="460" r="18" stroke="#ff8c00" strokeWidth="3" strokeDasharray="4,2" filter="url(#glowExpNear)" />
      <circle cx="670" cy="450" r="22" stroke="#a3ff12" strokeWidth="4" strokeDasharray="6,4" filter="url(#glowExpNear)" />
      <defs>
        <filter id="glowExpNear" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}


/**
 * 6. BLOG SCENE LAYERS
 */
export function BlogFar() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35 }}>
      {/* Binary floating digital streams */}
      <text x="150" y="150" fill="rgba(163,255,18,0.25)" fontFamily="monospace" fontSize="16">01101001 01101110 01100110 01101111</text>
      <text x="500" y="200" fill="rgba(255,140,0,0.2)" fontFamily="monospace" fontSize="14">1000101 1001110 1000111 1001001</text>
      <text x="320" y="100" fill="rgba(163,255,18,0.15)" fontFamily="monospace" fontSize="12">01100011 01101111 01100100 01100101</text>
    </svg>
  );
}

export function BlogMid() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M400 330 L650 430 L400 530 L150 430 Z" fill="url(#islandTopBlog)" />
      <path d="M150 430 L400 530 L400 570 L150 470 Z" fill="url(#islandLeftBlog)" />
      <path d="M400 530 L650 430 L650 470 L400 570 Z" fill="url(#islandRightBlog)" />
      
      {/* Floating voxel book stacks or documents */}
      <rect x="290" y="220" width="70" height="15" rx="2" fill="#1b2244" stroke="#ff8c00" strokeWidth="2" />
      <rect x="300" y="205" width="55" height="15" rx="2" fill="#151b38" stroke="#a3ff12" strokeWidth="2" />
      
      <rect x="420" y="235" width="80" height="20" rx="3" fill="#ff8c00" opacity="0.8" />
      <rect x="430" y="215" width="65" height="20" rx="2" fill="#1b2244" stroke="#a3ff12" strokeWidth="2" />
      
      <defs>
        <linearGradient id="islandTopBlog" x1="400" y1="330" x2="400" y2="530" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#182352" />
          <stop offset="100%" stopColor="#0d1330" />
        </linearGradient>
        <linearGradient id="islandLeftBlog" x1="150" y1="430" x2="400" y2="570" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#07091e" />
          <stop offset="100%" stopColor="#01020d" />
        </linearGradient>
        <linearGradient id="islandRightBlog" x1="400" y1="570" x2="650" y2="430" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0d1538" />
          <stop offset="100%" stopColor="#05081b" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BlogNear() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Voxel pages flying past in foreground */}
      <polygon points="120,430 150,410 160,435 130,455" fill="#a3ff12" opacity="0.7" transform="rotate(-15 140 430)" filter="url(#glowBlogPage)" />
      <polygon points="650,440 680,420 690,445 660,465" fill="#ff8c00" opacity="0.8" transform="rotate(10 670 440)" filter="url(#glowBlogPage)" />
      <defs>
        <filter id="glowBlogPage" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}


/**
 * 7. CONTACT SCENE LAYERS
 */
export function ContactFar() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35 }}>
      {/* Giant radial glow (Beacon transmitter light field) */}
      <circle cx="400" cy="220" r="160" fill="url(#beaconGlow)" />
      <defs>
        <radialGradient id="beaconGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff8c00" stopOpacity="0.3" />
          <stop offset="70%" stopColor="#a3ff12" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0a0e27" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function ContactMid() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M400 340 L650 440 L400 540 L150 440 Z" fill="url(#islandTopContact)" />
      <path d="M150 440 L400 540 L400 580 L150 480 Z" fill="url(#islandLeftContact)" />
      <path d="M400 540 L650 440 L650 480 L400 580 Z" fill="url(#islandRightContact)" />
      
      {/* Voxel Signal Beacon (Transmitter tower) */}
      <rect x="388" y="160" width="24" height="180" fill="#1b2244" stroke="#ff8c00" strokeWidth="2" />
      <line x1="375" y1="200" x2="425" y2="200" stroke="#a3ff12" strokeWidth="2" />
      <line x1="380" y1="240" x2="420" y2="240" stroke="#a3ff12" strokeWidth="2" />
      <line x1="370" y1="280" x2="430" y2="280" stroke="#ff8c00" strokeWidth="2" />
      
      {/* Beacon Tip Light */}
      <circle cx="400" cy="145" r="12" fill="#a3ff12" filter="url(#glowBeaconTip)" />
      
      <defs>
        <linearGradient id="islandTopContact" x1="400" y1="340" x2="400" y2="540" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#151f4d" />
          <stop offset="100%" stopColor="#0b112c" />
        </linearGradient>
        <linearGradient id="islandLeftContact" x1="150" y1="440" x2="400" y2="580" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06081a" />
          <stop offset="100%" stopColor="#00010a" />
        </linearGradient>
        <linearGradient id="islandRightContact" x1="400" y1="580" x2="650" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0b1232" />
          <stop offset="100%" stopColor="#040718" />
        </linearGradient>
        <filter id="glowBeaconTip" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export function ContactNear() {
  return (
    <svg className="island-svg" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Foreground signal waves */}
      <path d="M 330,120 Q 400,60 470,120" stroke="#a3ff12" strokeWidth="3" fill="none" opacity="0.4" filter="url(#glowWaves)" />
      <path d="M 300,100 Q 400,20 500,100" stroke="#ff8c00" strokeWidth="2" fill="none" opacity="0.3" filter="url(#glowWaves)" />
      <defs>
        <filter id="glowWaves" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
