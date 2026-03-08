import { ThemeModeScript } from "flowbite-react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
// src/app/layout.tsx
<html lang="id" className="light" style={{ colorScheme: 'light' }} suppressHydrationWarning>
      <head>
        <ThemeModeScript /> 
      </head>
      <body suppressHydrationWarning className="antialiased bg-white dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}
