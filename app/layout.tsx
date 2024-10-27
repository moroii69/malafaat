"use client"; // Mark the component as a Client Component

import { useEffect } from "react";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Redirect to the specified URL when the page loads
    window.location.href = "https://blessed-viper-97.accounts.dev/sign-up";
  }, []);

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
