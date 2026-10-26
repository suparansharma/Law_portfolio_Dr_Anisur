import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dranisurrahman-law.edu.bd"),
  title: "Prof. Dr. Anisur Rahman | Professor of Law, Islamic University",
  description: "Academic & Legal Portfolio of Prof. Dr. Anisur Rahman — Professor, Department of Law, Islamic University, Kushtia, Bangladesh. Ph.D. in Law, Former Syndicate Member & Law Administrator.",
  keywords: [
    "Dr. Anisur Rahman",
    "Professor of Law",
    "Islamic University Kushtia",
    "Legal Jurisprudence Bangladesh",
    "Human Rights",
    "Constitutional Law",
    "Public Interest Litigation"
  ],
  authors: [{ name: "Prof. Dr. Anisur Rahman" }],
  openGraph: {
    title: "Prof. Dr. Anisur Rahman | Professor of Law, Islamic University",
    description: "Distinguished Law Professor, Jurist, and Ph.D. Scholar dedicated to legal education, human rights, and constitutional justice.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/dr-anisur-rahman.jpeg",
        width: 800,
        height: 1000,
        alt: "Prof. Dr. Anisur Rahman",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans bg-legal-950 text-slate-100 antialiased selection:bg-gold-500/30 selection:text-gold-200 min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
