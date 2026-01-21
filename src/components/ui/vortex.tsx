"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
    children?: any;
    className?: string;
    containerClassName?: string;
    particleCount?: number;
    rangeY?: number;
    baseHue?: number;
    rangeHue?: number;
    baseSaturation?: number;
    baseLightness?: number;
    baseSpeed?: number;
    rangeSpeed?: number;
    baseRadius?: number;
    rangeRadius?: number;
    backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef(null);
    const particleCount = props.particleCount || 700;
    const particlePropCount = 10; // Increased to 10 for saturation and lightness
    const particlePropsLength = particleCount * particlePropCount;
    const rangeY = props.rangeY || 100;
    const baseHue = props.baseHue || 220;
    const rangeHue = props.rangeHue || 30; // Default to smaller range to avoid color bleed
    const baseSaturation = props.baseSaturation || 70; // Softer saturation for lavender
    const rangeSaturation = 20;
    const baseLightness = props.baseLightness || 70; // Lighter default
    const rangeLightness = 15;
    const baseSpeed = props.baseSpeed || 0.0;
    const rangeSpeed = props.rangeSpeed || 1.5;
    const baseRadius = props.baseRadius || 1;
    const rangeRadius = props.rangeRadius || 2;
    const backgroundColor = props.backgroundColor || "#000000";
    const tick = useRef(0);
    const noise3D = createNoise3D();
    const mouseRef = useRef({ x: 0, y: 0 });
    let particleProps = new Float32Array(particlePropsLength);
    let center: [number, number] = [0, 0];

    const HALF_PI: number = 0.5 * Math.PI;
    const TAU: number = 2 * Math.PI;
    const TO_RAD: number = Math.PI / 180;
    const rand = (n: number): number => n * Math.random();
    const fadeInOut = (t: number, m: number): number => {
        let hm = 0.5 * m;
        return Math.abs(((t + hm) % m) - hm) / hm;
    };
    const lerp = (n1: number, n2: number, speed: number): number =>
        (1 - speed) * n1 + speed * n2;

    const setup = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        resize(canvas, ctx);
        initParticles();
        draw(canvas, ctx);
    };

    const initParticles = () => {
        tick.current = 0;
        particleProps = new Float32Array(particlePropsLength);

        for (let i = 0; i < particlePropsLength; i += particlePropCount) {
            initParticle(i);
        }
    };

    const initParticle = (i: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let x, y, vx, vy, life, ttl, speed, radius, hue, sat;

        x = rand(canvas.width);
        y = center[1] + rand(rangeY) - rangeY * 0.5;
        vx = 0;
        vy = 0;
        life = 0;
        ttl = 10 + rand(100);
        speed = baseSpeed + rand(rangeSpeed);
        radius = baseRadius + rand(rangeRadius);
        hue = baseHue + rand(rangeHue);
        // 30% chance for white sparkle
        // Lavender saturation: baseSaturation + small random variation
        sat = Math.random() > 0.3 ? (baseSaturation + rand(rangeSaturation)) : 0;

        particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue, sat], i);
    };

    const drawParticle = (
        i: number,
        ctx: CanvasRenderingContext2D
    ) => {
        let x, y, vx, vy, life, ttl, speed, radius, hue, sat, theta, force, canvas;
        canvas = canvasRef.current;
        if (!canvas) return;

        x = particleProps[i];
        y = particleProps[i + 1];
        vx = particleProps[i + 2];
        vy = particleProps[i + 3];
        life = particleProps[i + 4];
        ttl = particleProps[i + 5];
        speed = particleProps[i + 6];
        radius = particleProps[i + 7];
        hue = particleProps[i + 8];
        sat = particleProps[i + 9];

        theta = noise3D(x * 0.001, y * 0.001, tick.current * 0.0005) * TAU;
        force = lerp(speed, 0.5, 0.1);

        // Interaction logic
        const dx = mouseRef.current.x - x;
        const dy = mouseRef.current.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 200;

        if (dist < interactionRadius) {
            const angle = Math.atan2(dy, dx);
            const influence = (1 - dist / interactionRadius) * 0.1;
            vx += Math.cos(angle) * influence;
            vy += Math.sin(angle) * influence;
        }

        vx = lerp(vx, Math.cos(theta) * force, 0.1);
        vy = lerp(vy, Math.sin(theta) * force, 0.1);

        x += vx;
        y += vy;
        life++;

        if (checkBounds(x, y, canvas) || life > ttl) {
            initParticle(i);
        } else {
            particleProps[i] = x;
            particleProps[i + 1] = y;
            particleProps[i + 2] = vx;
            particleProps[i + 3] = vy;
            particleProps[i + 4] = life;

            ctx.save();
            ctx.lineCap = "round";
            ctx.lineWidth = radius;
            // White sparkles are brighter (lighter)
            const lightness = sat === 0 ? 100 : 70;
            ctx.strokeStyle = `hsla(${hue},${sat}%,${lightness}%,${fadeInOut(life, ttl)})`;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - vx, y - vy);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }
    };

    const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) => {
        return x > canvas.width || x < 0 || y > canvas.height || y < 0;
    };

    const resize = (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D
    ) => {
        const { innerWidth, innerHeight } = window;

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        center[0] = 0.5 * canvas.width;
        center[1] = 0.5 * canvas.height;
    };

    const renderGlow = (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D
    ) => {
        ctx.save();
        ctx.filter = "blur(8px) brightness(200%)";
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();

        ctx.save();
        ctx.filter = "blur(4px) brightness(200%)";
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };

    const renderToCanvas = (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D
    ) => {
        ctx.save();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        for (let i = 0; i < particlePropsLength; i += particlePropCount) {
            drawParticle(i, ctx);
        }

        renderGlow(canvas, ctx);
    };

    const draw = (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D
    ) => {
        tick.current++;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        renderToCanvas(canvas, ctx);

        window.requestAnimationFrame(() => draw(canvas, ctx));
    };

    useEffect(() => {
        setup();
        const handleResize = () => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            if (canvas && ctx) {
                resize(canvas, ctx);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className={cn("relative h-full w-full", props.containerClassName)}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                ref={containerRef}
                className="absolute inset-0 z-0 h-full w-full flex items-center justify-center"
            >
                <canvas ref={canvasRef}></canvas>
            </motion.div>

            <div className={cn("relative z-10", props.className)}>{props.children}</div>
        </div>
    );
};
