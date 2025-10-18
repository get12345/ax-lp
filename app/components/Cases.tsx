"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Cases() {
  const cases = [
    {
      title: "AIチャットで顧客対応を自動化",
      desc: "顧客問い合わせを24時間自動応答に切り替え、1日平均2時間の対応削減に成功。",
      result: "初月から問い合わせ対応率120%達成。",
    },
    {
      title: "n8nで見積書作成を自動化",
      desc: "営業担当が手動で行っていた見積書作成を自動化し、作業時間を80%削減。",
      result: "人為的ミスが激減し、対応スピードが2倍に。",
    },
    {
      title: "社内AIチャット導入で情報共有を効率化",
      desc: "社内FAQやマニュアルをAIに統合し、従業員が即時に回答を得られるように。",
      result: "月間検索時間を約60時間削減。",
    },
    {
      title: "自動レポート生成で業務改善",
      desc: "スプレッドシートから自動的にPDFレポートを生成し、提出作業をゼロに。",
      result: "経理業務の省力化に成功、月10時間短縮。",
    },
  ];

  return (
    <section
      id="cases"
      className="relative bg-black text-white py-20 md:py-24 border-t border-white/5 overflow-hidden px-4"
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
          導入事例
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          これまでに多くの企業や個人事業主がAIと自動化によって業務改善を実現しています。
        </motion.p>

        {/* Swiperカルーセル */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {cases.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-[#111] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/30 transition-all shadow-lg shadow-cyan-500/5 h-full flex flex-col justify-between text-left"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-cyan-400 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <p className="text-purple-400 font-semibold text-sm sm:text-base mt-auto">
                  ✅ {item.result}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
