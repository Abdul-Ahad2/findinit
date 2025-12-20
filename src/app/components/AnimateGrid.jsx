"use client";

export function AnimatedGrid({ children, className = "" }) {
  return (
    <div className={`relative w-full bg-black overflow-hidden ${className}`}>
      {/* Static Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(100, 100, 100, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 100, 100, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
