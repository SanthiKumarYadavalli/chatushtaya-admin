"use client";

import React from "react";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import InteractiveHoverButton  from "@/components/ui/interactive-hover-button";
import { signInWithGoogle } from "@/backend/auth";

export default function AdminPage() {
  return (
    <div className="flex flex-row gap-20 items-center justify-center min-h-screen bg-gray-100 p-4 font-sans dark:bg-black">
      <header className="text-center mb-8">
        <div className="flex flex-row justify-center items-center">
          <img
            src="/rguktlogo.png" // Replace with your logo file path
            alt="Logo"
            className="h-24 mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Krishna Admin Dashboard
          </h1>
        </div>
      </header>
      <main className="text-center max-w-md">
        <p className="text-gray-600 mb-6 dark:text-gray-400">
          Log in with Google to securely access your admin dashboard, leverage
          Google’s robust security measures, and enjoy a seamless login
          experience across all your devices.
        </p>
        <InteractiveHoverButton text="Login with Google" onClick={signInWithGoogle} />

        <ThemeToggleButton classes="fixed right-7 bottom-5" />
      </main>
    </div>
  );

}
