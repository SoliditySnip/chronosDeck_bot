"use client";

const TWEETS = [
    { text: "loaded up my chronos wallet and let it rip. woke up to 3 tokens launched from overnight tweets. money printer fr 💰", user: "SolDegen", handle: "@sol_degenape" },
    { text: "been using chronosdeck for a week. already up 12 SOL. the auto-sell feature alone saved me from so many dumps", user: "CryptoFrank", handle: "@frank_trades" },
    { text: "the speed is insane. tweet goes out, token is live before the quote tweets even start. actual edge 🚀", user: "AlphaSeeker", handle: "@alpha_seeker99" },
    { text: "set up chronosdeck with 3 accounts, went to sleep. woke up to an @elonmusk tweet token at launch price. unreal", user: "DeFiChad", handle: "@defi_chad_sol" },
    { text: "referral program is goated too. already got 2 extra monitoring slots from inviting my degen friends", user: "PumpMaster", handle: "@pumpmaster_xyz" },
    { text: "panic sell button literally saved me from a rug. one click, out with profit. trust the system 🛡️", user: "SafeTrader", handle: "@safetrader_sol" },
    { text: "every telegram trading bot I tried was trash until chronosdeck. it actually gives you a REAL edge", user: "BotReviewer", handle: "@bot_reviewer" },
    { text: "my biggest problem rn is deciding which influencers to add to my monitor list. chronos handles everything else ⚡", user: "MoonRunner", handle: "@moonrunner_sol" },
];

function TweetCard({ t }: { t: typeof TWEETS[0] }) {
    return (
        <div style={{ background: "#0d0d0d", border: "1px solid #222", borderRadius: 16, padding: 24, width: 340, flexShrink: 0, margin: "0 8px" }}>
            <p style={{ fontSize: 13, color: "#ccc", lineHeight: 1.6, marginBottom: 20 }}>&ldquo;{t.text}&rdquo;</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#00FF88" }}>{t.user[0]}</span>
                </div>
                <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: "#fff", lineHeight: 1 }}>{t.user}</p>
                    <p style={{ fontSize: 11, color: "#666", marginTop: 2 }}>{t.handle}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const row1 = [...TWEETS.slice(0, 4), ...TWEETS.slice(0, 4), ...TWEETS.slice(0, 4)];
    const row2 = [...TWEETS.slice(4), ...TWEETS.slice(4), ...TWEETS.slice(4)];

    return (
        <section style={{ padding: "120px 0", overflow: "hidden", background: "#000" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px", textAlign: "center", marginBottom: 64 }}>
                <p className="section-label">Community</p>
                <h2 className="section-title">Traders are <span className="text-gradient">printing</span></h2>
            </div>

            <div className="mask-fade" style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", width: "max-content", animation: "marquee-left 40s linear infinite" }}>
                    {row1.map((t, i) => <TweetCard key={`a${i}`} t={t} />)}
                </div>
            </div>

            <div className="mask-fade">
                <div style={{ display: "flex", width: "max-content", animation: "marquee-right 45s linear infinite" }}>
                    {row2.map((t, i) => <TweetCard key={`b${i}`} t={t} />)}
                </div>
            </div>
        </section>
    );
}
