"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BOT_URL = "https://t.me/ChronosDeck_bot";

const NAV_LINKS = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
                background: scrolled ? "rgba(0,0,0,0.9)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
                transition: "all 0.3s ease",
            }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                        <div style={{ width: 28, height: 28, borderRadius: 6, background: "#00FF88", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                        </div>
                        <span style={{ fontWeight: 800, fontSize: 18, color: "#fff", letterSpacing: "-0.02em" }}>
                            Chronos<span style={{ color: "#00FF88" }}>Deck</span>
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>
                        {NAV_LINKS.map(l => (
                            <Link key={l.label} href={l.href} style={{ fontSize: 13, fontWeight: 500, color: "#999", textDecoration: "none" }}>{l.label}</Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="nav-desktop">
                        <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 12, padding: "10px 22px" }}>
                            Start Trading
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button className="nav-mobile-only" onClick={() => setMobileOpen(!mobileOpen)}
                        style={{ color: "#fff", padding: 4, background: "none", border: "none", cursor: "pointer" }} aria-label="Menu">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            {mobileOpen ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></>}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div className="nav-mobile-only" style={{ position: "fixed", inset: 0, zIndex: 40, background: "rgba(0,0,0,0.97)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
                    {NAV_LINKS.map(l => (
                        <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                            style={{ fontSize: 24, fontWeight: 700, color: "#fff", textDecoration: "none" }}>{l.label}</Link>
                    ))}
                    <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setMobileOpen(false)}>Start Trading</a>
                </div>
            )}
        </>
    );
}
