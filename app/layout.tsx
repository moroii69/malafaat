import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, UserButton } from '@clerk/nextjs';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Archivos",
  description: "Developed by ufraaan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Any additional <head> tags can go here */}
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <SignedIn>
            <UserButton /> {/* Render UserButton for signed-in users */}
            {children}    {/* Render the main content for signed-in users */}
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn redirectUrl="/sign-in" /> {/* Redirects to sign-in page */}
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
