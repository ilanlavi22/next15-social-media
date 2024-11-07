import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | RealMedia",
    default: "RealMedia",
  },
  description: "Social Media For Real Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito_sans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
