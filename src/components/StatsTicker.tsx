"use client";

import { useEffect, useState } from "react";

function Counter({ target, prefix, suffix, label }: {
    target: number; prefix?: string; suffix: string; label: string;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Start counting immediately on mount
        const dur = 2000;
        const start = Date.now();
        const tick = setInterval(() => {
            const p = Math.min((Date.now() - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(eased * target));
            if (p >= 1) clearInterval(tick);
        }, 16);
        return () => clearInterval(tick);
    }, [target]);

    const fmt = (n: number) => {
        if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
        if (n >= 1_000) return Math.round(n / 1_000) + "K";
        return n.toLocaleString();
    };

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", fontFamily: "monospace", fontStyle: "normal" }}>
                {prefix}{fmt(count)}{suffix}
            </div>
            <div style={{ fontSize: 11, color: "#888", textTransform: "uppercase" as const, letterSpacing: "0.2em", marginTop: 8, fontWeight: 600 }}>
                {label}
            </div>
        </div>
    );
}

export default function Stats() {
    return (
        <section style={{ padding: "100px 24px", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a", background: "#000" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
                <Counter target={2400000} suffix="+" label="Trades" />
                <Counter target={450} prefix="$" suffix="M" label="Volume Processed" />
                <Counter target={85000} suffix="+" label="Active Users" />
            </div>
        </section>
    );
}
