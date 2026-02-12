"use client";

const FEATURES = [
    {
        badge: "24/7 Scanning",
        title: "Real-Time Twitter Monitoring",
        desc: "ChronosDeck watches your target accounts around the clock. The instant a tweet drops, our system detects it and triggers the launch pipeline — all in under 2 seconds.",
        stats: [
            { label: "Detection Speed", value: "< 2s" },
            { label: "Uptime", value: "99.9%" },
        ],
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="1.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>,
    },
    {
        badge: "< 5 Seconds",
        title: "Instant Token Launch",
        desc: "From tweet to tradeable token in under 5 seconds. ChronosDeck deploys on Pump.fun, buys your initial position, and sends you the sell button — all fully automated.",
        stats: [
            { label: "Launch Time", value: "< 5s" },
            { label: "Success Rate", value: "98%" },
        ],
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    },
];

export default function Features() {
    return (
        <section id="features" style={{ padding: "120px 24px", background: "#000" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 80 }}>
                    <p className="section-label">Features</p>
                    <h2 className="section-title">
                        Your unfair <span className="text-gradient">advantage</span>
                    </h2>
                    <p style={{ color: "#888", marginTop: 16, maxWidth: 480, margin: "16px auto 0", fontSize: 16, lineHeight: 1.7 }}>
                        Speed and intelligence combined. ChronosDeck gives you the edge to trade before anyone else.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 20 }}>
                    {FEATURES.map((f) => (
                        <div key={f.title} style={{ background: "#0d0d0d", border: "1px solid #222", borderRadius: 20, padding: 40, position: "relative", overflow: "hidden" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                                <div style={{ width: 44, height: 44, borderRadius: 12, background: "#111", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {f.icon}
                                </div>
                                <span style={{ fontSize: 10, fontWeight: 700, color: "#00FF88", textTransform: "uppercase" as const, letterSpacing: "0.15em", padding: "4px 12px", borderRadius: 999, background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)" }}>
                                    {f.badge}
                                </span>
                            </div>

                            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#ffffff", marginBottom: 12 }}>{f.title}</h3>
                            <p style={{ fontSize: 14, color: "#999", lineHeight: 1.7, marginBottom: 32 }}>{f.desc}</p>

                            <div style={{ display: "flex", gap: 48 }}>
                                {f.stats.map(s => (
                                    <div key={s.label}>
                                        <div style={{ fontSize: 24, fontWeight: 800, color: "#ffffff", fontFamily: "monospace" }}>{s.value}</div>
                                        <div style={{ fontSize: 10, color: "#666", textTransform: "uppercase" as const, letterSpacing: "0.15em", marginTop: 4 }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
