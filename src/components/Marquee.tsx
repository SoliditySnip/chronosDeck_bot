"use client";

const ITEMS = [
    "Ultra Fast Launches", "24/7 Twitter Monitoring", "Auto-Buy on Tweet",
    "Auto-Sell & Take Profit", "MEV Protection", "Pump.fun Native",
    "Real-Time Alerts", "Smart Execution", "Referral Rewards", "IT JUST WORKS.",
];

export default function Marquee() {
    return (
        <div style={{ padding: "20px 0", overflow: "hidden", borderBottom: "1px solid #111" }} className="mask-fade">
            <div style={{ display: "flex", width: "max-content", animation: "marquee-left 40s linear infinite" }}>
                {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
                    <span key={i} style={{ display: "flex", alignItems: "center", gap: 24, margin: "0 24px", whiteSpace: "nowrap" }}>
                        <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: item === "IT JUST WORKS." ? "#00FF88" : "#333" }}>
                            {item}
                        </span>
                        <span style={{ color: "rgba(0,255,136,0.25)", fontSize: 6 }}>◆</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
