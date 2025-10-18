/** @type {import('next').NextConfig} */
const nextConfig = {
  // 開発中に他端末からアクセスを許可
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://10.20.1.4:3000", // ← スマホ・別PCからのアクセス元
  ],
};

export default nextConfig;
