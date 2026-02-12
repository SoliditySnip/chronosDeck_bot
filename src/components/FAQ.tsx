"use client";

import { useState } from "react";

const ITEMS = [
    { q: "What is ChronosDeck?", a: "ChronosDeck is the fastest Telegram-based trading bot on Solana. It monitors Twitter/X accounts in real-time and automatically launches tokens on Pump.fun the moment a target account tweets, allowing you to buy before anyone else." },
    { q: "How does ChronosDeck work?", a: "Fund your wallet → Add a Twitter target → When they tweet, ChronosDeck creates a token and buys your position in < 5 seconds → Auto-sell takes profit." },
    { q: "Is ChronosDeck secure?", a: "Yes — all private keys are encrypted with AES-256. Transactions are signed locally and ChronosDeck never accesses your keys. Export your private key anytime." },
    { q: "What are the fees?", a: "A small fee per transaction. Configure your own priority fee and slippage via /settings. No subscription fees." },
    { q: "How do I get started?", a: "Open ChronosDeck on Telegram → /start → /wallet → send SOL → /monitor to add a target. Setup takes under 2 minutes." },
    { q: "Can I earn rewards by inviting friends?", a: "Yes! Every 3 friends who join earns you +1 monitoring slot. More slots = more accounts tracked." },
    { q: "How fast is the token launch?", a: "Under 5 seconds from tweet to live token including deployment, liquidity, and your buy." },
    { q: "Can I customize my trading strategy?", a: "Full control via /settings — buy amount, auto-sell delay, slippage, priority fee, and more." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    function handleClick(i: number) {
        setOpenIndex(openIndex === i ? -1 : i);
    }

    return (
        <section id="faq" style={{ padding: "120px 24px", background: "#050505" }}>
            <div style={{ maxWidth: 640, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <p className="section-label">FAQ</p>
                    <h2 className="section-title">Questions?</h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                    {ITEMS.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #222", borderRadius: 16, overflow: "hidden" }}>
                                <div
                                    onClick={() => handleClick(i)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === "Enter") handleClick(i); }}
                                    style={{
                                        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                                        padding: "20px 24px", textAlign: "left", background: "none", border: "none", cursor: "pointer",
                                        userSelect: "none",
                                    }}
                                >
                                    <span style={{ fontSize: 14, fontWeight: 600, color: isOpen ? "#00FF88" : "#ffffff", transition: "color 0.2s", paddingRight: 16 }}>
                                        {item.q}
                                    </span>
                                    <span style={{ fontSize: 20, fontWeight: 300, color: "#666", transition: "transform 0.3s", transform: isOpen ? "rotate(45deg)" : "none", flexShrink: 0 }}>+</span>
                                </div>
                                {isOpen && (
                                    <div style={{ padding: "0 24px 20px", borderTop: "1px solid #1a1a1a" }}>
                                        <p style={{ fontSize: 13, color: "#999", lineHeight: 1.7, paddingTop: 16 }}>{item.a}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
