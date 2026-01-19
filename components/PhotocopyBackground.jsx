"use client";

import { useEffect, useRef } from 'react';

export default function PhotocopyBackground() {
    const containerRef = useRef(null);
    const p5Ref = useRef(null);
    const mousePosRef = useRef({ x: 0.5, y: 0.5 });
    const rafId = useRef(null);

    useEffect(() => {
        // Only run on client
        if (typeof window === 'undefined') return;

        let mounted = true;
        let idleId;
        let p5Instance = null;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = Math.max(0, Math.min(1, clientX / innerWidth));
            const y = Math.max(0, Math.min(1, clientY / innerHeight));
            mousePosRef.current = { x, y };
            if (rafId.current === null && p5Ref.current && typeof p5Ref.current.redraw === 'function') {
                rafId.current = requestAnimationFrame(() => {
                    p5Ref.current.redraw();
                    rafId.current = null;
                });
            }
        };

        const initP5 = async () => {
            const p5 = (await import('p5')).default;
            p5.disableFriendlyErrors = true;
            if (!containerRef.current || !mounted) return;

            const sketch = function(p) {
                const TILT = 40;

                const r = (a = 1) => p.random(a);

                function drawTexture() {
                    const W = p.width;
                    const H = p.height;

                    const mx = mousePosRef.current.x;
                    const my = mousePosRef.current.y;
                    const offsetY = (my - 0.5) * 0.2;
                    const tiltBase = 40;
                    const tilt = tiltBase + (mx - 0.5) * 80;

                    // ---- base gradient (top → bottom, multi-stop) ----
                    for (let y = 0; y < H; y++) {
                        let t = y / H + offsetY;
                        if (t < 0) t = 0;
                        if (t > 1) t = 1;
                        let col;

                        if (t < 0.1)
                            col = p.lerpColor(p.color("#000814"), p.color("#00010C"), t / 0.1);
                        else if (t < 0.3)
                            col = p.lerpColor(p.color("#00010C"), p.color("#0C2B2F"), (t - 0.1) / 0.2);
                        else if (t < 0.6)
                            col = p.lerpColor(p.color("#0C2B2F"), p.color("#2F564B"), (t - 0.3) / 0.3);
                        else if (t < 0.8)
                            col = p.lerpColor(p.color("#2F564B"), p.color("#5F996F"), (t - 0.6) / 0.2);
                        else if (t < 0.9)
                            col = p.lerpColor(p.color("#5F996F"), p.color("#7AC381"), (t - 0.8) / 0.1);
                        else if (t < 0.98)
                            col = p.lerpColor(p.color("#7AC381"), p.color("#68AF6E"), (t - 0.9) / 0.08);
                        else
                            col = p.lerpColor(p.color("#68AF6E"), p.color("#9FE083"), (t - 0.98) / 0.02);

                        p.stroke(col);
                        p.line(0, y, W, y);
                    }

                    // ---- subtle horizontal banding (tilted) ----
                    p.noStroke();
                    for (let y = 0; y < H; y += 1) {
                        const shade = 200 + r(40);
                        const dy = y + r(tilt) - tilt / 2;
                        p.fill(shade, 0.12 * 255);
                        p.rect(0, dy, W, 1);
                    }

                    // ---- large uneven horizontal streaks (tilted) ----
                    for (let i = 0; i < 18; i++) {
                        const baseY = r(H);
                        const h = 9 + r(90);
                        const dy = baseY + r(tilt) - tilt / 2;
                        p.fill(0, r(0.3) * 255 * 0.08);
                        p.rect(0, dy, W, h);
                    }

                    // ---- horizontal scratch lines (tilted) ----
                    p.stroke(0, 0.52 * 255);
                    p.strokeWeight(0.2);
                    for (let i = 0; i < 30; i++) {
                        const baseY = r(H);
                        const dyStart = baseY + r(tilt) - tilt / 2;
                        const dyEnd = dyStart + (r(tilt) - tilt / 2);
                        p.line(0, dyStart, W, dyEnd);
                    }

                    // ---- subtle density haze (no blobs) ----
                    p.loadPixels();
                    p.noiseSeed(3);
                    for (let y = 0; y < H; y++) {
                        for (let x = 0; x < W; x++) {
                            const i = 4 * (y * W + x);
                            const n = p.noise(x * 0.002, y * 0.002);
                            const d = p.map(n, 0, 1, -6, 6);
                            p.pixels[i]     += d;
                            p.pixels[i + 1] += d;
                            p.pixels[i + 2] += d;
                        }
                    }
                    p.updatePixels();

                    // ---- grain / speckle ----
                    p.loadPixels();
                    for (let i = 0; i < p.pixels.length; i += 4) {
                        const n = r(50) - 25;
                        p.pixels[i]     = p.constrain(p.pixels[i]     + n, 0, 255);
                        p.pixels[i + 1] = p.constrain(p.pixels[i + 1] + n, 0, 255);
                        p.pixels[i + 2] = p.constrain(p.pixels[i + 2] + n, 0, 255);
                    }
                    p.updatePixels();
                }

                p.setup = function() {
                    const container = containerRef.current;
                    if (!container) return;
                    let w = container.clientWidth;
                    let h = container.clientHeight;
                    if (w <= 0) w = 1;
                    if (h <= 0) h = 1;
                    p.createCanvas(w, h);
                    p.pixelDensity(1);
                    p.noLoop();
                    drawTexture();
                };

                p.windowResized = function() {
                    const container = containerRef.current;
                    if (!container) return;
                    let w = container.clientWidth;
                    let h = container.clientHeight;
                    if (w <= 0) w = 1;
                    if (h <= 0) h = 1;
                    p.resizeCanvas(w, h);
                    p.pixelDensity(1);
                    drawTexture();
                };
            };

            p5Instance = new p5(sketch, containerRef.current);
            p5Ref.current = p5Instance;
        };

        const scheduleP5 = () => {
            if (window.requestIdleCallback) {
                idleId = window.requestIdleCallback(() => initP5(), { timeout: 2000 });
            } else {
                // fallback for browsers that don't support requestIdleCallback
                setTimeout(() => initP5(), 1);
            }
        };

        scheduleP5();
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            mounted = false;
            if (idleId && window.cancelIdleCallback) {
                window.cancelIdleCallback(idleId);
            }
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
                rafId.current = null;
            }
            if (p5Ref.current) {
                p5Ref.current.remove();
                p5Ref.current = null;
            }
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const backgroundGradient = 'linear-gradient(to bottom, #000814 0%, #00010C 10%, #0C2B2F 30%, #2F564B 60%, #5F996F 80%, #7AC381 90%, #68AF6E 98%, #9FE083 100%)';

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden',
                backgroundImage: backgroundGradient,
                backgroundSize: '100% 100%',
            }}
        />
    );
}
