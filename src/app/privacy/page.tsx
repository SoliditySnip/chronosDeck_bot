import Link from "next/link";

export const metadata = {
    title: "Privacy Policy — ChronosDeck",
    description: "Privacy Policy for the ChronosDeck Telegram trading bot on Solana.",
};

export default function PrivacyPage() {
    return (
        <main style={{ background: "#000", minHeight: "100vh", color: "#fff" }}>
            <div style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px 80px" }}>
                <Link href="/" style={{ color: "#00FF88", fontSize: 13, fontWeight: 600, textDecoration: "none", display: "inline-block", marginBottom: 40 }}>
                    ← Back to Home
                </Link>

                <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12, letterSpacing: "-0.03em" }}>Privacy Policy</h1>
                <p style={{ color: "#555", fontSize: 13, marginBottom: 48 }}>Last updated: February 13, 2026</p>

                <div style={{ display: "flex", flexDirection: "column" as const, gap: 40 }}>
                    <Section title="1. Introduction">
                        ChronosDeck (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Telegram bot (@ChronosDeck_bot) and associated website (collectively, the &ldquo;Service&rdquo;). By using ChronosDeck, you consent to the data practices described in this policy. We encourage you to read this Privacy Policy carefully and contact us if you have any questions.
                    </Section>

                    <Section title="2. Information We Collect">
                        We collect the following types of information:
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Telegram Account Data:</strong> Your Telegram user ID, username, and display name as provided by the Telegram Bot API when you interact with our bot. We do not access your phone number, contacts, or messages outside of our bot conversation.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Wallet Information:</strong> Your Solana wallet public address generated through our Service. Private keys are encrypted using AES-256 encryption and stored securely. We do not store unencrypted private keys at any time.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Trading Activity:</strong> Records of trades executed through the bot, including token addresses, transaction amounts, timestamps, and transaction hashes on the Solana blockchain. This data is inherently public on the blockchain.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Configuration Preferences:</strong> Your trading settings including buy amounts, auto-sell delays, slippage tolerance, priority fees, and monitoring targets.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Referral Data:</strong> Information about your referral code and the users you have referred, limited to Telegram user IDs.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Usage Analytics:</strong> General usage patterns such as command frequency, feature usage, and session duration. We do not use third-party tracking cookies or analytics services on our website.
                    </Section>

                    <Section title="3. How We Use Your Information">
                        We use the collected information for the following purposes: to provide, operate, and maintain the ChronosDeck Service and its core trading functionality; to process and execute your trades on the Solana blockchain via Pump.fun; to monitor Twitter/X accounts as configured by you and trigger automated token launches; to manage your wallet and display your balances and transaction history; to process referral rewards and manage monitoring slot allocations; to improve and optimize the Service based on usage patterns and feedback; to detect, prevent, and address technical issues, fraud, or abuse; to communicate with you about Service updates, security alerts, and important notices; and to comply with applicable legal obligations.
                    </Section>

                    <Section title="4. Data Security">
                        We implement industry-standard security measures to protect your information:
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Encryption:</strong> All private keys are encrypted using AES-256 encryption, one of the strongest encryption standards available. Keys are encrypted at rest and are only decrypted momentarily during transaction signing.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Local Signing:</strong> All blockchain transactions are signed locally within our secure environment. Your private keys are never transmitted over the network in unencrypted form.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Infrastructure Security:</strong> Our servers use encrypted connections (TLS 1.3), are hosted in secure data centers, and are protected by firewalls and intrusion detection systems.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Access Controls:</strong> Access to user data is strictly limited to essential service operations. No human operator has direct access to your unencrypted private keys.
                        <br /><br />
                        While we strive to use commercially acceptable means to protect your information, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security.
                    </Section>

                    <Section title="5. Data Sharing and Disclosure">
                        We do not sell, rent, or trade your personal information to third parties. We may share information in the following limited circumstances:
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Blockchain Transactions:</strong> Transaction data submitted to the Solana blockchain is publicly visible by nature. This includes wallet addresses, transaction amounts, and token interactions.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Third-Party Platforms:</strong> We interact with Pump.fun for token deployment and Twitter/X for tweet monitoring. These platforms receive only the minimum data necessary for their respective functions.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid legal processes, such as a court order or government request.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Service Protection:</strong> We may share information to investigate, prevent, or take action regarding suspected illegal activities, fraud, violations of our Terms of Service, or situations involving potential threats to safety.
                    </Section>

                    <Section title="6. Data Retention">
                        We retain your personal information for as long as your account is active or as needed to provide you with the Service. Specifically: Telegram account data is retained for the lifetime of your account with ChronosDeck. Wallet information is retained until you request deletion or export your private key and close your account. Trading activity records are retained for a minimum of 12 months for operational and compliance purposes. Configuration preferences are retained for the lifetime of your account and are deleted upon account closure. You may request deletion of your account and associated data at any time by contacting us through the bot.
                    </Section>

                    <Section title="7. Your Rights and Choices">
                        You have the following rights regarding your data:
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Access:</strong> You can view your trading history, wallet information, and settings at any time through the bot commands.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Export:</strong> You can export your wallet private key at any time using the /export command.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Deletion:</strong> You can request deletion of your account and all associated data by contacting us.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Modification:</strong> You can update your trading settings and monitoring targets at any time through the bot interface.
                        <br /><br />
                        <strong style={{ color: "#fff" }}>Opt-Out:</strong> You can stop using the Service at any time. Simply export your private key, withdraw your funds, and stop interacting with the bot.
                    </Section>

                    <Section title="8. Children&apos;s Privacy">
                        ChronosDeck is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a person under 18, we will take steps to delete that information promptly. If you believe a minor has provided us with personal information, please contact us immediately.
                    </Section>

                    <Section title="9. International Data Transfers">
                        Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using ChronosDeck, you consent to the transfer of your information to these countries. We will take appropriate measures to ensure that your data is treated securely and in accordance with this Privacy Policy regardless of where it is processed.
                    </Section>

                    <Section title="10. Cookies and Tracking">
                        Our website does not use cookies for tracking purposes. We do not use third-party analytics services, advertising trackers, or social media pixels. The only data stored in your browser may be essential session information required for the website to function properly.
                    </Section>

                    <Section title="11. Changes to This Privacy Policy">
                        We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify users of material changes by posting a notice on our website or through the Telegram bot. Your continued use of the Service after any changes constitutes your acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.
                    </Section>

                    <Section title="12. Contact Us">
                        If you have any questions or concerns about this Privacy Policy, your personal data, or your rights, please contact us through our Telegram bot <a href="https://t.me/ChronosDeck_bot" style={{ color: "#00FF88" }}>@ChronosDeck_bot</a> or through the channels listed on our website. We will respond to your inquiry as promptly as possible.
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
            <div style={{ fontSize: 14, color: "#999", lineHeight: 1.8 }}>{children}</div>
        </div>
    );
}
