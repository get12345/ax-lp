"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "ホーム", href: "#hero" },
    { name: "課題", href: "#problem" },
    { name: "AI顧問制度", href: "#solution" },
    { name: "料金プラン", href: "#pricing" },
    { name: "導入事例", href: "#cases" },
    { name: "相談", href: "#cta" },
  ];

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ロゴ部分 */}
        <a
          onClick={() => scrollTo("#hero")}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          AXKUDOU
        </a>

        {/* メニュー（PC表示） */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollTo(item.href)}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* ハンバーガーメニュー（モバイル） */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 flex flex-col items-center gap-6 py-6"
        >
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollTo(item.href)}
              className="text-gray-300 text-lg hover:text-cyan-400 transition"
            >
              {item.name}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
