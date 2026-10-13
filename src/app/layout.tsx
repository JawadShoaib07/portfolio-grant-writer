import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura Grant Strategy | Principal Grant Architect & Strategic Funding Consultant",
  description: "Bespoke institutional grant writing and federal funding strategy. Over $48.5M+ secured with an 89.4% win rate. Formerly Lead Grant Strategist at Nitany Grant Writing with Lori.",
  keywords: [
    "Grant Writer Portfolio",
    "Nitany Grant Writing",
    "Lori Nitany",
    "Federal Grant Specialist",
    "Institutional Grant Writer",
    "Nonprofit Grant Consultant",
    "HRSA Grant Writer",
    "NSF Grant Writer",
    "Luxury Grant Writing Services"
  ],
  authors: [{ name: "Aura Grant Strategy" }],
  openGraph: {
    title: "Aura Grant Strategy | Elite Institutional Grant Architect",
    description: "Multimillion-dollar federal & foundation grant awards. Experience with Nitany Grant Writing under founder Lori.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#07080b] text-[#e8ebf0] font-sans antialiased selection:bg-[#d4af37]/30 selection:text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
