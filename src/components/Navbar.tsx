"use client";

import { Navbar, NavbarBrand, DarkThemeToggle } from "flowbite-react";
import { DATA } from "@/constants/data";

export default function AppNavbar() {
  return (
    <Navbar fluid className="fixed w-full z-50 top-0 border-b border-gray-200 dark:border-gray-700 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <NavbarBrand href="#home">
          <span className="self-center whitespace-nowrap text-xl font-bold text-primary-600">
            {DATA.profile.name.split(" ")[0]}.
          </span>
        </NavbarBrand>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-primary-600 font-medium">Home</a>
            <a href="#about" className="text-primary-600 font-medium">Tentang</a>
            <a href="#skills" className="text-primary-600 font-medium">Keahlian</a>
            <a href="#projects" className="text-primary-600 font-medium">Proyek</a>
            <a href="#contact" className="text-primary-600 font-medium">Kontak</a>
          </nav>
          <DarkThemeToggle />
        </div>
      </div>
    </Navbar>
  );
}
