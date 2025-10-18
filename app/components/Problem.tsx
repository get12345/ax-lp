"use client";

import { motion } from "framer-motion";
import { Cpu, Workflow, LineChart, Users } from "lucide-react";

export default function Solution() {
  const features = [
    {
      icon: <Cpu size={40} className="text-cyan-400" />,
      title: "AI導入戦略を設計",
      desc: "業務内容を分析し、最適なAIツール・自動化シナリオを選定します。",
    },
    {
      icon: <Workflow size={40} className="text-purple-400" />,
      title: "n8nによる自動化構築",
      desc: "請求書生成・顧客対応・社内報告などを自動化し、手作業を削減します。",
    },
    {
      icon: <LineChart size={40} className="text-cyan-400" />,
      title: "継続的な改善と最適化",
      desc: "AI顧問として月次レビューを行い、効果測定と改善を実施します。",
    },
    {
      icon: <Users size={40} className="text-purple-400" />,
      title: "チーム教育・AI活用研修",
      desc: "現場がAIを自走できるよう、社内勉強会やセミナーも実施可能です。",
    },
  ];

  return (
    <section
      id="solution"
      className="relative bg-black text-white py-20 md:py-24 overflow-hidden border-t border-white/5 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* タイトル */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-snug"
        >
          AI顧問制度であなたのビジネスを次のステージへ
        </motion.h2>

        {/* 説明文 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          あなたの業務に合わせてAIと自動化をデザイン。
          継続的な伴走支援で「効率化 × 収益化」を同時に実現します。
        </motion.p>

        {/* 機能カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#111] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/30 transition-all shadow-lg shadow-cyan-500/5"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTAボタン */}
        <motion.a
          href="https://lin.ee/pOo6lM1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto mt-12 md:mt-16 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all text-base sm:text-lg font-semibold"
        >
          LINEで無料相談する
        </motion.a>
      </div>
    </section>
  );
}
