"use client";

import { motion } from "framer-motion";
import { Cpu, Workflow, LineChart, Users } from "lucide-react";

export default function Solution() {
  const features = [
    {
      icon: <Cpu size={40} className="text-cyan-400" />,
      title: "AI導入戦略を設計",
      desc: "最適なAIツール・自動化シナリオを選定",
    },
    {
      icon: <Workflow size={40} className="text-purple-400" />,
      title: "n8nによる自動化構築",
      desc: "請求書生成・顧客対応・社内報告などを自動化",
    },
    {
      icon: <LineChart size={40} className="text-cyan-400" />,
      title: "継続的な改善と最適化",
      desc: "月次レビューを行い、効果測定と改善を実施",
    },
    {
      icon: <Users size={40} className="text-purple-400" />,
      title: "チーム教育・AI活用研修",
      desc: "社内勉強会やセミナーも実施可能です。",
    },
  ];

  return (
    <section
      id="solution"
      className="relative bg-black text-white py-24 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          AI顧問制度であなたのビジネスを次のステージへ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-3xl mx-auto mb-16"
        >
          専属のAI顧問が、あなたの業務に合わせてAIと自動化をデザイン。
          <br />
          継続的な伴走支援で「効率化 × 収益化」を同時に実現します。
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all shadow-lg shadow-cyan-500/5"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
  href="https://lin.ee/pOo6lM1"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  className="inline-block mt-16 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all"
>
  LINEで無料相談する
</motion.a>

      </div>
    </section>
  );
}
