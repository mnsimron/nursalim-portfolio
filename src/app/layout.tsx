import { ThemeModeScript } from "flowbite-react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="light" style={{ colorScheme: "light" }} suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>

      <body suppressHydrationWarning className="antialiased bg-white dark:bg-gray-900">

        {/* BACKGROUND SHOOTING STAR (hanya muncul saat dark mode) */}
        <div className="pointer-events-none fixed inset-0 -z-10 hidden dark:block overflow-hidden">
          <span className="shooting-star"></span>
          <span className="shooting-star delay-2000"></span>
          <span className="shooting-star delay-4000"></span>
          <span className="shooting-star delay-6000"></span>
        </div>

        {children}

      </body>
    </html>
  );
}