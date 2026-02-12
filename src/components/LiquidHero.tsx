"use client";

const BOT_URL = "https://t.me/ChronosDeck_bot";

export default function Hero() {
    return (
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#000" }}>
            {/* Background glow */}
            <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: 1000, height: 700, borderRadius: "50%", opacity: 0.12, background: "radial-gradient(ellipse, #00FF88, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -100, left: -200, width: 600, height: 600, borderRadius: "50%", opacity: 0.06, background: "radial-gradient(circle, #00FF88, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

            <div style={{ position: "relative", zIndex: 10, maxWidth: 900, margin: "0 auto", padding: "160px 24px 120px", textAlign: "center", width: "100%" }}>
                {/* Badge */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", borderRadius: 999, border: "1px solid rgba(0,255,136,0.2)", background: "rgba(0,255,136,0.05)", marginBottom: 40 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00FF88", display: "inline-block" }} />
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#00FF88", textTransform: "uppercase" as const, letterSpacing: "0.15em" }}>Live on Solana</span>
                </div>

                {/* Headline */}
                <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 28, color: "#ffffff" }}>
                    Turn Tweets Into<br />
                    Tokens <span className="text-gradient">on Solana.</span>
                </h1>

                {/* Sub */}
                <p style={{ color: "#999", fontSize: "clamp(16px, 2.5vw, 20px)", maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.7 }}>
                    Monitor Twitter 24/7. Auto-launch tokens on Pump.fun in seconds.
                    Buy before the market reacts. <span style={{ color: "#fff", fontWeight: 600 }}>No compromises.</span>
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", flexWrap: "wrap" as const, alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 60 }}>
                    <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Start Trading
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </a>
                    <a href="#how-it-works" className="btn-ghost">How It Works</a>
                </div>

                {/* Trust */}
                <div style={{ display: "flex", flexWrap: "wrap" as const, alignItems: "center", justifyContent: "center", gap: 32, fontSize: 12, color: "#888" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        AES-256 Encrypted
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                        &lt; 5s Launch Time
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        24/7 Monitoring
                    </span>
                </div>
            </div>
        </section>
    );
}
