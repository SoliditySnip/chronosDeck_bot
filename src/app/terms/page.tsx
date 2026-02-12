import Link from "next/link";

export const metadata = {
    title: "Terms of Service — ChronosDeck",
    description: "Terms of Service for the ChronosDeck Telegram trading bot on Solana.",
};

export default function TermsPage() {
    return (
        <main style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
            <div style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px 80px" }}>
                <Link href="/" style={{ color: "#00FF88", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "inline-block", marginBottom: 40 }}>
                    ← Back to Home
                </Link>

                <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.03em" }}>Terms of Service</h1>
                <p style={{ color: "#555", fontSize: 13, marginBottom: 48 }}>Last updated: February 13, 2026</p>

                <div style={{ display: "flex", flexDirection: "column" as const, gap: 40 }}>
                    <Section title="1. Acceptance of Terms">
                        By accessing and using ChronosDeck (&ldquo;the Service&rdquo;), including our Telegram bot (@ChronosDeck_bot) and associated website, you agree to be bound by these Terms of Service. If you do not agree to these Terms, you must not use the Service. The Service is intended for users who are at least 18 years of age. By using ChronosDeck, you represent and warrant that you meet this age requirement. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any changes constitutes your acceptance of the revised Terms.
                    </Section>

                    <Section title="2. Description of Service">
                        ChronosDeck is a Telegram-based automated trading bot operating on the Solana blockchain. The Service monitors specified Twitter/X accounts in real-time and, upon detecting new tweets, automatically creates and deploys tokens on the Pump.fun platform. The Service includes wallet creation and management within Telegram, automated token creation on Pump.fun triggered by Twitter activity, automated buying of tokens at the time of creation, configurable auto-sell functionality with adjustable delay and slippage parameters, a referral program for additional monitoring slots, and configurable trading parameters including buy amount, slippage tolerance, and priority fees.
                    </Section>

                    <Section title="3. User Accounts and Wallets">
                        When you create a wallet through ChronosDeck, a Solana wallet is generated for you within the Telegram interface. You are solely responsible for maintaining the security of your wallet and private keys. ChronosDeck encrypts your private keys using AES-256 encryption. You may export your private key at any time using the /export command. ChronosDeck will never ask for your private key or seed phrase outside of the bot interface. You are responsible for keeping your Telegram account secure, as it provides access to your ChronosDeck wallet. If you suspect unauthorized access to your account, you should immediately export your private key and transfer your funds to a new wallet.
                    </Section>

                    <Section title="4. Trading and Financial Risks">
                        <strong style={{ color: "#ff4444" }}>IMPORTANT: Trading cryptocurrencies involves substantial risk of loss and is not suitable for every investor.</strong> ChronosDeck does not guarantee any profits or returns. The value of tokens created through the Service can fluctuate significantly, and you may lose some or all of your invested capital. Past performance is not indicative of future results. Automated trading carries additional risks including, but not limited to: slippage — the difference between expected and actual execution prices; transaction failures due to network congestion or insufficient gas fees; rapid price movements that occur between tweet detection and trade execution; smart contract risks associated with Pump.fun and the Solana blockchain; and liquidity risks that may prevent selling tokens at desired prices. You acknowledge that you are using the Service at your own risk and that ChronosDeck is not a financial advisor. Nothing in the Service constitutes financial, investment, legal, or tax advice.
                    </Section>

                    <Section title="5. Fees and Payments">
                        ChronosDeck charges a small transaction fee on each trade executed through the bot. These fees are used to maintain infrastructure, cover operational costs, and improve the Service. Users are also responsible for Solana network transaction fees (gas fees) and any priority fees they configure via /settings. All fees are non-refundable. Fee structures may be updated from time to time, and continued use of the Service constitutes acceptance of any updated fee structures. You are responsible for understanding the full cost of each trade before executing it.
                    </Section>

                    <Section title="6. Prohibited Activities">
                        You agree not to use ChronosDeck for any unlawful purpose or in violation of any applicable laws or regulations. Prohibited activities include: market manipulation, wash trading, or any fraudulent trading activity; using the Service to launder money or finance illegal activities; attempting to exploit, hack, or reverse-engineer the Service; interfering with other users&apos; use of the Service; creating multiple accounts to abuse the referral system; using automated tools or scripts to interact with the bot beyond its intended interface; distributing malware, viruses, or any harmful code through the Service; and impersonating ChronosDeck or its representatives. Violation of these terms may result in immediate termination of your access to the Service.
                    </Section>

                    <Section title="7. Intellectual Property">
                        All content, features, and functionality of ChronosDeck, including but not limited to the bot software, website, documentation, graphics, logos, and trademarks, are owned by ChronosDeck and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any ChronosDeck intellectual property without our prior written consent.
                    </Section>

                    <Section title="8. Limitation of Liability">
                        To the maximum extent permitted by applicable law, ChronosDeck and its operators, developers, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, resulting from your use or inability to use the Service; any unauthorized access to or alteration of your data or transactions; any bugs, viruses, or other harmful code transmitted through the Service; any errors, inaccuracies, or omissions in the Service; any trading losses or missed opportunities; network downtime or Solana blockchain issues; or actions of third-party platforms including Pump.fun and Twitter/X.
                    </Section>

                    <Section title="9. Disclaimer of Warranties">
                        ChronosDeck is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without any warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, timely, secure, or error-free. We do not warrant the accuracy, reliability, or completeness of any information provided through the Service. We make no guarantees about the speed of tweet detection, token creation, or trade execution. Network conditions, third-party platform availability, and other factors outside our control may affect Service performance.
                    </Section>

                    <Section title="10. Termination">
                        We reserve the right to suspend or terminate your access to ChronosDeck at any time, with or without cause, with or without notice. Upon termination, your right to use the Service will immediately cease. You may export your private key and withdraw your funds at any time. Any provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
                    </Section>

                    <Section title="11. Governing Law">
                        These Terms shall be governed by and construed in accordance with applicable international law. Any disputes arising from or relating to these Terms or the Service shall first be attempted to be resolved through good-faith negotiation between the parties. If a resolution cannot be reached, the dispute shall be submitted to binding arbitration. You agree to waive any right to participate in a class action lawsuit or class-wide arbitration against ChronosDeck.
                    </Section>

                    <Section title="12. Contact">
                        If you have any questions about these Terms, please contact us through our Telegram bot <a href="https://t.me/ChronosDeck_bot" style={{ color: "#00FF88" }}>@ChronosDeck_bot</a> or through the channels listed on our website.
                    </Section>
                </div>
            </div>
        </main>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 12 }}>{title}</h2>
            <p style={{ fontSize: 14, color: "#999", lineHeight: 1.8 }}>{children}</p>
        </div>
    );
}
