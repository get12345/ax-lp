import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* タイトル */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center leading-tight">
          プライバシーポリシー
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
          <p>
            AXKUDOU（以下「当サービス」）は、個人情報の保護を重要な責務と認識し、
            以下の方針に基づき個人情報の適切な取り扱い・保護に努めます。
          </p>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mt-8 mb-3">
              1. 個人情報の取得について
            </h2>
            <p>
              当サービスでは、お問い合わせ・サービス申し込みなどの際に、
              氏名、メールアドレス、その他必要な情報を取得する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mt-8 mb-3">
              2. 個人情報の利用目的
            </h2>
            <p>
              取得した個人情報は、以下の目的の範囲で利用いたします。
              <br />
              ・お問い合わせへの回答  
              ・サービス提供および契約管理  
              ・お知らせや新機能のご案内  
              ・サービス改善のための分析
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mt-8 mb-3">
              3. 個人情報の第三者提供
            </h2>
            <p>
              法令に基づく場合を除き、ご本人の同意なく第三者へ個人情報を提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mt-8 mb-3">
              4. 個人情報の管理
            </h2>
            <p>
              当サービスでは、個人情報を適切に管理し、不正アクセス、紛失、改ざん、
              漏えい等を防止するために安全対策を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mt-8 mb-3">
              5. 個人情報の開示・訂正・削除
            </h2>
            <p>
              ご本人からの個人情報の開示・訂正・削除等の請求があった場合、
              適切な本人確認の上、速やかに対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mt-8 mb-3">
              6. Cookie（クッキー）等の使用について
            </h2>
            <p>
              当サービスでは、アクセス解析や利便性向上のためにCookieを使用する場合があります。
              Cookieの利用はブラウザ設定により無効化することが可能です。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mt-8 mb-3">
              7. プライバシーポリシーの変更
            </h2>
            <p>
              本ポリシーの内容は、法令変更や運営方針に応じて予告なく改定される場合があります。
              最新の内容は本ページにて公表いたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mt-8 mb-3">
              8. お問い合わせ窓口
            </h2>
            <p>
              個人情報の取り扱いに関するお問い合わせは、以下までお願いいたします。
              <br />
              メールアドレス：{" "}
              <a
                href="mailto:kaliova.kt@gmail.com"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                kaliova.kt@gmail.com
              </a>
            </p>
          </section>
        </div>

        {/* ✅ トップへ戻るボタン（修正版） */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-md hover:shadow-cyan-500/30"
          >
            トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
