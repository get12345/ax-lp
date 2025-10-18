"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center text-center"
    >
      {/* パーティクル背景（クリックをスルーさせる） */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 pointer-events-none"
        options={{
          background: { color: "#000" },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: ["#00FFFF", "#8000FF"] },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              outModes: { default: "out" },
            },
            links: {
              enable: true,
              color: "#00FFFF",
              distance: 120,
              opacity: 0.3,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />

      {/* テキストとCTA */}
      <motion.div
        className="relative z-10 px-6 text-white max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          AIであなたのビジネスを自動化する未来
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          AI顧問・チャットボット・業務自動化で
          <br />
          生産性と創造性を同時に高める。
        </p>

        <motion.a
          href="https://lin.ee/pOo6lM1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all"
        >
          <MessageCircle size={22} />
          LINEで相談する
        </motion.a>
      </motion.div>
    </section>
  );
}

