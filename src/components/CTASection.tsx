"use client";

const BOT_URL = "https://t.me/ChronosDeck_bot";

export default function CTA() {
    return (
        <section style={{ position: "relative", padding: "140px 24px", overflow: "hidden", background: "#000" }}>
            {/* Glow */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 400, borderRadius: "50%", filter: "blur(140px)", opacity: 0.08, background: "#00FF88", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 10, maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
                <p className="section-label">Still here?</p>
                <h2 className="section-title" style={{ marginBottom: 24 }}>
                    Ready to start <span className="text-gradient">printing?</span>
                </h2>
                <p style={{ color: "#999", fontSize: 18, maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7 }}>
                    Join thousands of Solana traders using ChronosDeck to turn tweets into profits.
                    Set up in under 2 minutes.
                </p>

                <a href={BOT_URL} target="_blank" rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ fontSize: 16, padding: "16px 40px", animation: "glow-breathe 3s ease-in-out infinite" }}
                >
                    Start Trading Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </a>

                <p style={{ fontSize: 12, color: "#555", marginTop: 32 }}>
                    Don&apos;t have Telegram?{" "}
                    <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#00FF88", textDecoration: "none" }}>Install here →</a>
                </p>
            </div>
        </section>
    );
}
