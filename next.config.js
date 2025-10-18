/** @type {import('next').NextConfig} */
module.exports = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://10.20.1.4:3000", // ← LAN 内アクセスを許可
  ],
};
