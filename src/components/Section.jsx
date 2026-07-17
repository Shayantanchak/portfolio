import React from 'react';

/**
 * Section Component
 * Represents a single floating voxel island scene in our 3D parallax scroll journey.
 * Uses 3D CSS transforms to set layer depths, enabling automatic CSS-driven parallax
 * when the parent camera translates along the Z-axis.
 * 
 * @param {Object} props
 * @param {string} props.id Unique selector ID for GSAP pinning
 * @param {string} props.title Section title
 * @param {string} props.subtitle Section tag/category
 * @param {string} [props.accentColor='lime'] Accent theme ('lime' or 'orange')
 * @param {React.ReactNode} [props.farLayer] Content for the deepest background layer
 * @param {React.ReactNode} [props.midLayer] Content for the main island platform layer
 * @param {React.ReactNode} [props.nearLayer] Content for the foreground layer
 * @param {React.ReactNode} props.children The text and UI details displayed on the focal card
 */
export default function Section({
  id,
  title,
  subtitle,
  accentColor = 'lime',
  farLayer,
  midLayer,
  nearLayer,
  children
}) {
  const isLime = accentColor === 'lime';
  const accentClass = isLime ? 'text-lime' : 'text-orange';
  const glowClass = isLime ? 'glow-lime' : 'glow-orange';

  return (
    <section 
      id={id} 
      className="section-3d"
      data-accent={accentColor}
    >
      {/* 1. FAR LAYER (Distant skies, stars, background elements. Moves slowest.) */}
      {farLayer && (
        <div className="layer layer-far" data-depth="-400">
          {farLayer}
        </div>
      )}

      {/* 2. MID LAYER (Main floating island/platform with flat/voxel elements) */}
      {midLayer && (
        <div className="layer layer-mid" data-depth="0">
          {midLayer}
        </div>
      )}

      {/* 3. NEAR LAYER (Foreground elements like floating rocks, foliage, glowing nodes. Moves fastest.) */}
      {nearLayer && (
        <div className="layer layer-near" data-depth="300">
          {nearLayer}
        </div>
      )}

      {/* 4. CONTENT LAYER (Glassmorphism overlay containing details, text, and active widgets) */}
      <div className="layer layer-content" data-depth="100">
        <div className={`glass-card ${glowClass}`}>
          <span className={`title-small ${accentClass}`}>{subtitle}</span>
          <h2 className="title-medium">{title}</h2>
          <div className="section-content-body">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
