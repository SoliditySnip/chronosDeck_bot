import Link from "next/link";

export default function Footer() {
    return (
        <footer style={{ borderTop: "1px solid #111", padding: "40px 24px", background: "#000" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexWrap: "wrap" as const, alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                    <div style={{ width: 24, height: 24, borderRadius: 6, background: "#00FF88", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Chronos<span style={{ color: "#00FF88" }}>Deck</span></span>
                </Link>
                <div style={{ display: "flex", gap: 32, fontSize: 12, fontWeight: 500 }}>
                    <Link href="/terms" style={{ color: "#555", textDecoration: "none" }}>Terms</Link>
                    <Link href="/privacy" style={{ color: "#555", textDecoration: "none" }}>Privacy</Link>
                    <a href="https://t.me/ChronosDeck_bot" target="_blank" rel="noopener noreferrer" style={{ color: "#555", textDecoration: "none" }}>Telegram Bot</a>
                </div>
                <span style={{ fontSize: 11, color: "#333" }}>© {new Date().getFullYear()} ChronosDeck</span>
            </div>
        </footer>
    );
}
