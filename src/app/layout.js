import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReportProvider } from "@/utils/report-context";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RGUKT RKV CSE",
  description: "Hungama from Chatushtaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-poppins">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReportProvider>
            <AuthProvider>{children}</AuthProvider>
          </ReportProvider>
          <ThemeToggleButton classes="fixed right-7 bottom-5 z-10" />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
