import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";

import logo from "../assets/logo.webp";
import LanguageSwitcher from "./LanguageSwitcher";
import useLang from "../context/useLang";
import CartIcon from "../components/CartIcon"
export default function Navigationbar() {
  // Translation object
  const { t } = useLang();

  // Controls mobile menu open/close state
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Current route path (used for active link highlighting)
  const { pathname } = useLocation();

  // Navigation items (used for both desktop & mobile)
  const menuItems = [
    { name: "home", path: "/" },
    { name: "products", path: "/Products" },
    { name: "about", path: "/Info" },
  ];

  return (
    <Navbar 
      
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      
  // خليه absolute عشان يغطي اللي تحته

    >
      {/* ================= MOBILE VIEW ================= */}

      {/* Mobile: Menu toggle button (hamburger icon) */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile: Centered brand logo */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img
            src={logo}
            alt="AKOK Logo"
            className="h-15 w-auto object-contain"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* ================= DESKTOP VIEW ================= */}

      {/* Desktop: Brand logo + navigation links */}
      <NavbarContent className="hidden sm:flex gap-6 " justify="center" >
        <NavbarBrand>
          <img
            src={logo}
            alt="AKOK Logo"
            className="h-15 w-auto object-contain"
          />
        </NavbarBrand>

        {/* Render navigation links dynamically */}
        {menuItems.map((item) => (
          <NavbarItem
            key={item.name}
            isActive={pathname === item.path}
          >
            <Link
              as={RouterLink}
              to={item.path}
              color={pathname === item.path ? "primary" : "foreground"}
              className="relative group px-1"
              aria-current={
                pathname === item.path ? "page" : undefined
              }
            >
              {t.nav[item.name]}
              <span
    className="
      absolute
      left-0
      -bottom-1
      h-0.5
      w-full
      scale-x-0
      bg-current
      transition-transform
      duration-300
      group-hover:scale-x-100
      origin-left
    "
  />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* ================= RIGHT SIDE ================= */}

      {/* Desktop & Mobile: Right-side content */}
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>

        <NavbarItem>
          <CartIcon />
        </NavbarItem>
      </NavbarContent>

      {/* ================= MOBILE MENU ================= */}

      {/* Mobile: Fullscreen dropdown menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem
            key={item.name}
            isActive={pathname === item.path}
          >
            <Link
              as={RouterLink}
              to={item.path}
              className="w-fit relative group px-1"
              size="lg"
              color={pathname === item.path ? "primary" : "foreground"}
              aria-current={
                pathname === item.path ? "page" : undefined
              }
              // Close menu after clicking a link (better UX)
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav[item.name]}
               {/* underline */}
  <span
    className="
      absolute
      left-0
      -bottom-1
      h-0.5
      w-full
      scale-x-0
      bg-current
      transition-transform
      duration-300
      group-hover:scale-x-100
      origin-left
    "
  />
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
