"use client";

const STEPS = [
    {
        n: "01",
        title: "Fund Your Wallet",
        desc: "Create or import a Solana wallet right inside Telegram. Send SOL from Phantom or any exchange.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 10h20" /></svg>,
    },
    {
        n: "02",
        title: "Add a Twitter Target",
        desc: "Pick any Twitter/X account to monitor — influencers, alpha callers. The bot watches them 24/7.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    },
    {
        n: "03",
        title: "Bot Launches Token",
        desc: "The moment they tweet, ChronosDeck auto-creates a token on Pump.fun and buys it for you in < 5 seconds.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="1.5"><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
    },
    {
        n: "04",
        title: "Auto-Sell & Profit",
        desc: "Set sell delay and slippage. Auto-sell takes profit automatically, or Panic Sell to exit instantly.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" style={{ padding: "120px 24px", background: "#050505" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 80 }}>
                    <p className="section-label">How It Works</p>
                    <h2 className="section-title">
                        Start printing in <span className="text-gradient">4 simple steps</span>
                    </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 16, textAlign: "center" }}>
                    {STEPS.map((s) => (
                        <div key={s.n} style={{ background: "#0d0d0d", border: "1px solid #222", borderRadius: 20, padding: 28, position: "relative", overflow: "hidden" }}>
                            {/* Watermark */}
                            <span style={{ position: "absolute", top: 8, right: 16, fontSize: 48, fontWeight: 800, color: "rgba(255,255,255,0.04)", fontFamily: "monospace", pointerEvents: "none", userSelect: "none" }}>
                                {s.n}
                            </span>

                            <div style={{ width: 48, height: 48, borderRadius: 16, background: "#111", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                                {s.icon}
                            </div>

                            <h3 style={{ fontSize: 16, fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>{s.title}</h3>
                            <p style={{ fontSize: 13, color: "#999", lineHeight: 1.6 }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
