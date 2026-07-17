import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ScrollController from './components/ScrollController';
import Section from './components/Section';
import {
  FloatingParticles,
  HeroFar,
  HeroMid,
  HeroNear,
  AboutFar,
  AboutMid,
  AboutNear,
  SkillsFar,
  SkillsMid,
  SkillsNear,
  ProjectsFar,
  ProjectsMid,
  ProjectsNear,
  ExperienceFar,
  ExperienceMid,
  ExperienceNear,
  BlogFar,
  BlogMid,
  BlogNear,
  ContactFar,
  ContactMid,
  ContactNear
} from './components/IslandLayer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleScrollDown = () => {
    // Scrolls to the next section (About)
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleScrollToContact = () => {
    // Scrolls to the last section (Contact)
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: docHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <ScrollController>
          
          {/* 1. HERO SECTION */}
          <Section
            id="hero"
            title="ALEX RIVERS"
            subtitle="Creative Technologist"
            accentColor="lime"
            farLayer={
              <>
                <HeroFar />
                <FloatingParticles count={15} color="#a3ff12" />
              </>
            }
            midLayer={<HeroMid />}
            nearLayer={<HeroNear />}
          >
            <p className="paragraph" style={{ marginBottom: '2rem' }}>
              Crafting immersive 2.5D web environments, performance-oriented motion design, and high-fidelity digital systems.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={handleScrollDown} className="btn btn-lime">
                Explore Journey
              </button>
              <button onClick={handleScrollToContact} className="btn btn-outline">
                Establish Orbit
              </button>
            </div>
          </Section>

          {/* 2. ABOUT SECTION */}
          <Section
            id="about"
            title="Designing Depth"
            subtitle="The Journey"
            accentColor="orange"
            farLayer={
              <>
                <AboutFar />
                <FloatingParticles count={10} color="#ff8c00" />
              </>
            }
            midLayer={<AboutMid />}
            nearLayer={<AboutNear />}
          >
            <p className="paragraph" style={{ marginBottom: '1.5rem' }}>
              I bridge the gap between imagination and browser rendering engines. Specialized in hardware-accelerated CSS, high-precision motion systems, and clean UI engineering.
            </p>
            <div className="grid-3col">
              <div className="glass-card" style={{ padding: '1rem', textAlign: 'left' }}>
                <div className="text-orange" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Role</div>
                <div style={{ fontSize: '0.9rem', marginTop: '0.25rem', color: '#9ca3af' }}>Senior Dev</div>
              </div>
              <div className="glass-card" style={{ padding: '1rem', textAlign: 'left' }}>
                <div className="text-orange" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Focus</div>
                <div style={{ fontSize: '0.9rem', marginTop: '0.25rem', color: '#9ca3af' }}>Immersive UI</div>
              </div>
              <div className="glass-card" style={{ padding: '1rem', textAlign: 'left' }}>
                <div className="text-orange" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Philosophy</div>
                <div style={{ fontSize: '0.9rem', marginTop: '0.25rem', color: '#9ca3af' }}>Form & Physics</div>
              </div>
            </div>
          </Section>

          {/* 3. SKILLS SECTION */}
          <Section
            id="skills"
            title="Engine Power"
            subtitle="The Grid"
            accentColor="lime"
            farLayer={
              <>
                <SkillsFar />
                <FloatingParticles count={12} color="#a3ff12" />
              </>
            }
            midLayer={<SkillsMid />}
            nearLayer={<SkillsNear />}
          >
            <p className="paragraph" style={{ marginBottom: '1.5rem' }}>
              A telemetry visualizer of my technical capabilities. Focused on scalability, pixel-perfection, and fast loads.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  <span>Frontend Architecture (React / Next.js / Vite)</span>
                  <span className="text-lime">95%</span>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '95%', height: '100%', background: 'var(--accent-lime)', boxShadow: '0 0 8px var(--accent-lime)' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  <span>Motion Design & Parallax (GSAP / CSS 3D / ScrollTrigger)</span>
                  <span className="text-lime">90%</span>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '90%', height: '100%', background: 'var(--accent-lime)', boxShadow: '0 0 8px var(--accent-lime)' }} />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                  <span>Performance Optimization & Core Web Vitals</span>
                  <span className="text-lime">85%</span>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', background: 'var(--accent-lime)', boxShadow: '0 0 8px var(--accent-lime)' }} />
                </div>
              </div>
            </div>
          </Section>

          {/* 4. PROJECTS SECTION */}
          <Section
            id="projects"
            title="Neo Dimensions"
            subtitle="Selected Works"
            accentColor="orange"
            farLayer={
              <>
                <ProjectsFar />
                <FloatingParticles count={10} color="#ff8c00" />
              </>
            }
            midLayer={<ProjectsMid />}
            nearLayer={<ProjectsNear />}
          >
            <p className="paragraph" style={{ marginBottom: '1rem' }}>
              Explorations in three-dimensional coordinates and web physics.
            </p>
            
            <div className="grid-2col">
              <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'left', border: '1px solid rgba(255, 140, 0, 0.15)' }}>
                <span className="text-orange" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>01 / INTERACTIVE CANVAS</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Neon Forge</h3>
                <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '1rem' }}>
                  A lightweight tool for mapping vector models into glowing 2.5D CSS environments dynamically.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href="#demo" className="text-orange" style={{ fontSize: '0.85rem', textDecoration: 'none', fontWeight: 'bold' }}>[ Live Demo ]</a>
                  <a href="#code" style={{ fontSize: '0.85rem', color: '#f3f4f6', textDecoration: 'none' }}>[ GitHub ]</a>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'left', border: '1px solid rgba(255, 140, 0, 0.15)' }}>
                <span className="text-orange" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>02 / TIMELINE ENGINE</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Chronos</h3>
                <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '1rem' }}>
                  High-frequency physics animator for orchestrating synchronized complex screen scroll-triggers.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href="#demo" className="text-orange" style={{ fontSize: '0.85rem', textDecoration: 'none', fontWeight: 'bold' }}>[ Live Demo ]</a>
                  <a href="#code" style={{ fontSize: '0.85rem', color: '#f3f4f6', textDecoration: 'none' }}>[ GitHub ]</a>
                </div>
              </div>
            </div>
          </Section>

          {/* 5. EXPERIENCE SECTION */}
          <Section
            id="experience"
            title="Space & Time"
            subtitle="Chronology"
            accentColor="lime"
            farLayer={
              <>
                <ExperienceFar />
                <FloatingParticles count={10} color="#a3ff12" />
              </>
            }
            midLayer={<ExperienceMid />}
            nearLayer={<ExperienceNear />}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1rem', borderLeft: '2px solid var(--accent-lime)', paddingLeft: '1rem' }}>
                <div style={{ minWidth: '100px', fontWeight: 'bold' }} className="text-lime">2024 - PRES</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Lead Interaction Developer</h4>
                  <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Orbit Lab Studio • Immersive Systems</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', borderLeft: '2px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1rem' }}>
                <div style={{ minWidth: '100px', fontWeight: 'bold', color: '#9ca3af' }}>2022 - 2024</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Senior Frontend Engineer</h4>
                  <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>CyberCraft Corp • Interactive Visuals</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', borderLeft: '2px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1rem' }}>
                <div style={{ minWidth: '100px', fontWeight: 'bold', color: '#9ca3af' }}>2020 - 2022</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Creative Technologist</h4>
                  <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>PixelVoid agency • Motion Systems</div>
                </div>
              </div>
            </div>
          </Section>

          {/* 6. BLOG SECTION */}
          <Section
            id="blog"
            title="Deep Dev Log"
            subtitle="Transmissions"
            accentColor="orange"
            farLayer={
              <>
                <BlogFar />
                <FloatingParticles count={10} color="#ff8c00" />
              </>
            }
            midLayer={<BlogMid />}
            nearLayer={<BlogNear />}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
              <a href="#blog-post" className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', textDecoration: 'none', color: 'inherit', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', margin: 0 }}>Mastering CSS 3D Perspective and Camera Rigs</h4>
                  <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>July 2026 • 8 min read</span>
                </div>
                <span className="text-orange" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>→</span>
              </a>

              <a href="#blog-post" className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', textDecoration: 'none', color: 'inherit', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', margin: 0 }}>GSAP ScrollTrigger Performance Optimizations</h4>
                  <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>May 2026 • 6 min read</span>
                </div>
                <span className="text-orange" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>→</span>
              </a>

              <a href="#blog-post" className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', textDecoration: 'none', color: 'inherit', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', margin: 0 }}>Why WebGL Isn't Always the Answer: The Case for 2.5D</h4>
                  <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>March 2026 • 5 min read</span>
                </div>
                <span className="text-orange" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>→</span>
              </a>
            </div>
          </Section>

          {/* 7. CONTACT SECTION */}
          <Section
            id="contact"
            title="Join Orbit"
            subtitle="Establish Connect"
            accentColor="lime"
            farLayer={
              <>
                <ContactFar />
                <FloatingParticles count={15} color="#a3ff12" />
              </>
            }
            midLayer={<ContactMid />}
            nearLayer={<ContactNear />}
          >
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    flex: 1,
                    background: 'rgba(6, 9, 25, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    flex: 1,
                    background: 'rgba(6, 9, 25, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
              <textarea
                placeholder="Message details"
                rows="3"
                style={{
                  background: 'rgba(6, 9, 25, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '0.9rem',
                  resize: 'none'
                }}
              />
              <button type="submit" className="btn btn-lime" style={{ width: '100%' }}>
                Transmit Message
              </button>
            </form>
          </Section>

        </ScrollController>
      )}
    </>
  );
}
