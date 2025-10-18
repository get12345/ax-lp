"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative bg-gradient-to-b from-black via-[#0a001a] to-black text-white py-20 md:py-32 overflow-hidden border-t border-white/10 px-4"
    >
      {/* 背景発光エフェクト */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* タイトル */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-snug"
        >
          あなたの業務に、AI自動化を。
        </motion.h2>

        {/* 説明文 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base md:text-lg mb-10 leading-relaxed"
        >
          どこから始めればいいか分からなくても大丈夫です。<br />
          LINEからお気軽にご相談ください。<br />
          AI顧問があなたの課題を一緒に整理します。
        </motion.p>

        {/* CTAボタン */}
        <motion.a
          href="https://lin.ee/pOo6lM1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-base sm:text-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/40 transition-all"
        >
          <MessageCircle size={26} />
          LINEで無料相談する
        </motion.a>

        {/* 補足文 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm text-gray-500 mt-6"
        >
          ※AI導入・自動化相談は初回無料で承ります
        </motion.p>
      </div>
    </section>
  );
}
