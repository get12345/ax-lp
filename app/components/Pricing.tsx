"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Entry",
      price: "¥10,000 / 月",
      desc: "まずはAI活用を始めたい方向け",
      features: [
        "AI導入診断・提案",
        "月1回のAI相談ミーティング",
        "n8n自動化の初期アドバイス",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Standard",
      price: "¥30,000 / 月",
      desc: "業務自動化を本格的に導入したい方向け",
      features: [
        "AI導入＋自動化設計支援",
        "月2回の顧問ミーティング",
        "LINEボット・ChatGPT連携サポート",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Pro",
      price: "¥100,000〜 / 月",
      desc: "全社的にAI導入を推進したい企業向け",
      features: [
        "社内AIチャット構築（RAG対応）",
        "業務プロセスの全面自動化",
        "専属AI顧問による伴走支援",
      ],
      color: "from-cyan-500 to-purple-500",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative z-20 bg-black text-white py-20 md:py-24 border-t border-white/5 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* 見出し */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-snug"
        >
          料金プラン
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          導入規模や目的に合わせて選べる3つのプランをご用意しています。
        </motion.p>

        {/* プランカード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-[#111] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/30 transition-all shadow-lg shadow-cyan-500/5 hover:scale-[1.02] overflow-hidden"
            >
              {/* 背景グラデーション */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.color} opacity-0 hover:opacity-10 transition-all pointer-events-none`}
              ></div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                {plan.desc}
              </p>
              <div className="text-2xl sm:text-3xl font-bold mb-6">
                {plan.price}
              </div>

              <ul className="text-left mb-8 space-y-3">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-300 text-sm sm:text-base leading-snug"
                  >
                    <CheckCircle2 size={18} className="text-cyan-400 mt-1" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTAボタン */}
              <a
                href="https://lin.ee/pOo6lM1"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r ${plan.color} text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-cyan-500/30 transition-all text-sm sm:text-base`}
              >
                LINEで相談する
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
