"use client";

import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 py-10 text-center">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* ロゴ */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          AXKUDOU
        </motion.h3>

        {/* ナビゲーションリンク */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <a href="#hero" className="hover:text-cyan-400 transition">ホーム</a>
          <a href="#solution" className="hover:text-cyan-400 transition">AI顧問制度</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">料金プラン</a>
          <a href="#cases" className="hover:text-cyan-400 transition">導入事例</a>
          <a href="#cta" className="hover:text-cyan-400 transition">相談</a>
        </nav>

        {/* SNSリンク */}
        <div className="flex justify-center gap-4">
          <motion.a
            href="https://x.com/AXKUDOU"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-3 bg-[#111] rounded-full border border-white/10 hover:border-cyan-400/40 transition-all shadow-md shadow-cyan-500/10"
          >
            <Twitter className="text-cyan-400" size={22} />
          </motion.a>
        </div>

        {/* コピーライト & 各種リンク */}
        <div className="text-gray-500 text-xs mt-6 space-y-2">
          <p>© 2025 AXKUDOU. All Rights Reserved.</p>

          <div className="flex justify-center gap-4">
            <a
              href="/tokushoho"
              className="hover:text-cyan-400 transition underline underline-offset-4"
            >
              特定商取引法に基づく表記
            </a>
            <a
              href="/privacy"
              className="hover:text-cyan-400 transition underline underline-offset-4"
            >
              プライバシーポリシー
            </a>
          </div>

          <p className="mt-2 text-gray-500">
            お問い合わせ: <a href="mailto:kaliova.kt@gmail.com" className="text-cyan-400 hover:underline">kaliova.kt@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
