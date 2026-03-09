"use client";

import { Navbar, NavbarBrand } from "flowbite-react";
import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useThemeMode } from "flowbite-react";
import { DATA } from "@/constants/data";

export default function AppNavbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Tentang", id: "about" },
    { name: "Keahlian", id: "skills" },
    { name: "Proyek", id: "projects" },
    { name: "Kontak", id: "contact" },
  ];

    const { mode, toggleMode } = useThemeMode();

  return (
    <Navbar fluid className="fixed w-full z-50 top-0 border-b border-gray-200 dark:border-gray-700 py-3 
             bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between">
        <NavbarBrand href="#home">
          <span className="text-xl font-bold text-primary-600">
            {DATA.profile.name.split(" ")[0]}.
          </span>
        </NavbarBrand>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`relative px-2 py-1 text-sm font-medium transition-all
                  ${
                    active === item.id
                      ? "text-primary-600 dark:text-primary-600"
                      : "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-600"
                  }
                `}
              >
                {item.name}

                {active === item.id && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary-600 dark:bg-primary-600"></span>
                )}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                      hover:scale-110 hover:rotate-12 transition-all duration-300"
          >
            {mode === "dark" ? (
              <HiSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <HiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </Navbar>
  );
}