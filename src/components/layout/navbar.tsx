"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Download, ArrowUpRight } from "lucide-react";
import nav from "@/data/navigation";
import site from "@/data/site";
import { ease, duration, spring } from "@/lib/motion-tokens";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("About");
  const [mobileOpen, setMobileOpen] = useState(false);

  // A10: Navbar Shrink & glass intensity after 24px scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Simple active link detection based on section scroll positions
      const sections = nav.map((item) => {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        return { label: item.label, el };
      });

      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s.el && s.el.offsetTop <= scrollPos) {
          setActiveItem(s.label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration.base, ease: ease.out }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        scrolled ? "pt-2 md:pt-3" : "pt-4"
      }`}
    >
      <div
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 rounded-2xl border border-border-soft flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled
            ? "h-16 md:h-[68px] bg-white/95 backdrop-blur-lg shadow-[0_8px_24px_rgba(38,50,56,0.06)]"
            : "h-20 bg-white/85 backdrop-blur-md shadow-[0_2px_12px_rgba(38,50,56,0.04)]"
        }`}
      >
        {/* Brand / Logo using public/images/logo.svg */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl"
        >
          <img
            src="/images/logo/logo.svg"
            alt={`${site.name} — ${site.role}`}
            className={`w-auto object-contain transition-all duration-300 group-hover:opacity-90 ${
              scrolled ? "h-10 md:h-10" : "h-10 md:h-11"
            }`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 bg-bg-alt p-1.5 rounded-full border border-border-subtle relative"
        >
          {nav.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`relative px-4 py-2 rounded-full font-label-pill text-[12px] font-medium transition-colors z-10 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-text-nav hover:text-text-primary"
                }`}
              >
                {/* A6: Tab indicator with sliding layoutId */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-primary-surface border border-primary-light/60 -z-10 shadow-xs"
                    transition={spring.snappy}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Download CV CTA button (A5 Press) */}
          <motion.a
            whileTap={{ scale: 0.98 }}
            transition={{ duration: duration.instant }}
            href={site.cvUrl || "#contact-section"}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 h-11 rounded-xl bg-primary text-white font-label-pill text-[13px] font-semibold hover:bg-primary-hover shadow-sm transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </motion.a>

          {/* Quick Profile / Contact Icon */}
          <Link
            href="#contact-section"
            aria-label="View Contact and Profile"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary-surface border border-border-subtle flex items-center justify-center shadow-xs text-primary hover:bg-primary-light/60 transition-colors"
          >
            <User className="w-[18px] h-[18px]" />
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 rounded-xl bg-bg-alt border border-border-subtle flex items-center justify-center text-text-primary hover:bg-primary-surface hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* A11: Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={spring.snappy}
            className="absolute top-full left-4 right-4 mt-2 max-w-7xl mx-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-border-soft p-5 shadow-[0_12px_32px_rgba(38,50,56,0.1)] lg:hidden flex flex-col gap-3"
          >
            {/* Navigation links with stagger */}
            <nav className="flex flex-col gap-1">
              {nav.map((item, index) => {
                const isActive = activeItem === item.label;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                      duration: duration.fast,
                      ease: ease.out,
                    }}
                    onClick={() => {
                      setActiveItem(item.label);
                      setMobileOpen(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-surface text-primary font-semibold"
                        : "text-text-nav hover:bg-bg-alt hover:text-text-primary"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </motion.a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-border-subtle flex flex-col gap-2">
              <a
                href={site.cvUrl || "#contact-section"}
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-label-pill text-[13px] font-semibold hover:bg-primary-hover shadow-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center justify-between text-xs text-text-muted px-2 pt-1 font-body-sm">
                <span>{site.location}</span>
                <span className="text-primary font-medium">{site.email}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
