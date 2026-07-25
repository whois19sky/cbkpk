import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calcuttabackpackers.com"),
  title: "Calcutta Backpackers | Premium Boutique Hostel in Kolkata",
  description:
    "The most awarded backpacker hostel in Kolkata. Experience authentic local culture, premium accommodations, and our famous WanderXP tours.",
  keywords: ["backpackers kolkata", "hostel kolkata", "accommodation kolkata", "private rooms kolkata", "travel india"],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Calcutta Backpackers | Best Backpackers Hostel in Kolkata",
    description: "The world's most awarded backpacker hostel. Premium dorms, private rooms & curated Kolkata experiences.",
    url: "https://www.calcuttabackpackers.com",
    siteName: "Calcutta Backpackers",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcutta Backpackers | Premium Boutique Hostel in Kolkata",
    description: "The world's most awarded backpacker hostel. Premium dorms, private rooms & curated Kolkata experiences.",
    images: ["/images/hero-bg.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-dark">
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              borderRadius: '16px',
              padding: '16px 20px',
              fontSize: '14px',
            },
          }} 
        />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

