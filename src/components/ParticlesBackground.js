import React, { useState, useEffect, useRef } from 'react';
import './ParticlesBackground.css';

function ParticlesBackground() {
    const canvasRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState([]);
    const animationRef = useRef(null);

    // Canvas setup 
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        // Set canvas size to viewport (not scroll area)
        const updateCanvasSize = () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            // Initialize particles
            initParticles();
        };

        window.addEventListener('resize', updateCanvasSize);
        updateCanvasSize();

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    // Initialize particles - only within viewport
    const initParticles = () => {
        const particleCount = 100;
        const newParticles = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 3 + 1,
                // Match your site's theme - adjust these colors
                color: `hsla(${Math.random() * 60 + 210}, 70%, 60%, 0.7)`, // Blue range
                vx: Math.random() * 1 - 0.5,
                vy: Math.random() * 1 - 0.5,
                attracted: false,
            });
        }

        setParticles(newParticles);
    };

    // Track mouse position with scroll adjustment
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY + window.scrollY // Add scroll offset
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Animation logic
    useEffect(() => {
        if (!particles.length) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const updatedParticles = particles.map(particle => {
                let { x, y, size, color, vx, vy, attracted } = particle;

                // Calculate distance to mouse (adjust for viewport only)
                // Only track mouse if it's in the visible viewport
                if (
                    mousePosition.y >= window.scrollY &&
                    mousePosition.y <= window.scrollY + window.innerHeight
                ) {
                    const dx = mousePosition.x - x;
                    const dy = (mousePosition.y - window.scrollY) - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Particles attracted to mouse within a radius
                    if (distance < 200) {
                        const force = 0.5 / (distance * 0.1);
                        vx += dx * force * 0.02;
                        vy += dy * force * 0.02;
                        attracted = true;
                    } else if (attracted) {
                        // Gradually return to original movement
                        vx *= 0.98;
                        vy *= 0.98;
                        if (Math.abs(vx) < 0.1 && Math.abs(vy) < 0.1) {
                            attracted = false;
                            vx = Math.random() * 1 - 0.5;
                            vy = Math.random() * 1 - 0.5;
                        }
                    }
                }

                // Apply velocity
                x += vx;
                y += vy;

                // Boundary check
                if (x < 0 || x > window.innerWidth) {
                    vx = -vx;
                    x = x < 0 ? 0 : window.innerWidth;
                }
                if (y < 0 || y > window.innerHeight) {
                    vy = -vy;
                    y = y < 0 ? 0 : window.innerHeight;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();

                // Connect nearby particles
                particles.forEach(otherParticle => {
                    const dx2 = otherParticle.x - x;
                    const dy2 = otherParticle.y - y;
                    const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    if (distance2 < 100) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance2 / 500})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });

                return { x, y, size, color, vx, vy, attracted };
            });

            setParticles(updatedParticles);
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, [particles, mousePosition]);

    return (
        <div className="particles-container">
            <canvas
                ref={canvasRef}
                className="particles-canvas"
            />
        </div>
    );
}

export default ParticlesBackground;