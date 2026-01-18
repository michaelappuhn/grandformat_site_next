import { useEffect, useRef } from 'react';

export default function PhotocopyBackground() {
    const containerRef = useRef(null);
    const p5Ref = useRef(null);

    useEffect(() => {
        // Only run on client
        if (typeof window === 'undefined') return;

        let p5Instance = null;
        const initP5 = async () => {
            const p5 = (await import('p5')).default;
            if (!containerRef.current) return;

            const sketch = (p) => {
                const TILT = 40;

                const r = (a = 1) => p.random(a);

                function drawTexture() {
                    const W = p.width;
                    const H = p.height;

                    // ---- base gradient (top → bottom, multi-stop) ----
                    for (let y = 0; y < H; y++) {
                        const t = y / H;
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
                        const dy = y + r(TILT) - TILT / 2;
                        p.fill(shade, 0.12 * 255);
                        p.rect(0, dy, W, 1);
                    }

                    // ---- large uneven horizontal streaks (tilted) ----
                    for (let i = 0; i < 18; i++) {
                        const baseY = r(H);
                        const h = 9 + r(90);
                        const dy = baseY + r(TILT) - TILT / 2;
                        p.fill(0, r(0.3) * 255 * 0.08);
                        p.rect(0, dy, W, h);
                    }

                    // ---- horizontal scratch lines (tilted) ----
                    p.stroke(0, 0.52 * 255);
                    p.strokeWeight(0.2);
                    for (let i = 0; i < 30; i++) {
                        const baseY = r(H);
                        const dyStart = baseY + r(TILT) - TILT / 2;
                        const dyEnd = dyStart + (r(TILT) - TILT / 2);
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
                    const container = p.canvas ? p.canvas.parent() : containerRef.current;
                    const w = container.clientWidth;
                    const h = container.clientHeight;
                    const c = p.createCanvas(w, h);
                    c.style('width', '100%');
                    c.style('height', '100%');
                    p.noLoop();
                    drawTexture();
                };

                p.windowResized = function() {
                    const container = p.canvas ? p.canvas.parent() : containerRef.current;
                    const w = container.clientWidth;
                    const h = container.clientHeight;
                    p.resizeCanvas(w, h);
                    drawTexture();
                };
            };

            p5Instance = new p5(sketch, containerRef.current);
            p5Ref.current = p5Instance;
        };

        initP5();

        return () => {
            if (p5Ref.current) {
                p5Ref.current.remove();
                p5Ref.current = null;
            }
        };
    }, []);

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
            }}
        />
    );
}
