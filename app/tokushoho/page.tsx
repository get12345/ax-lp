export default function Tokushoho() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* タイトル */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center leading-tight">
          特定商取引法に基づく表記
        </h1>

        {/* 説明 */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
          <p className="text-center">
            本ページは、AXKUDOU（以下「当サービス」）が提供する
            「AI顧問制度」および「自動化支援サービス」に関する
            特定商取引法に基づく表示です。
          </p>

          {/* テーブル本体 */}
          <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm sm:text-base">
            <tbody>
              {[
                ["販売事業者", "AXKUDOU（個人事業主）"],
                ["運営責任者", "工藤 大史"],
                ["所在地", "宮城県仙台市（詳細はお問い合わせ時に開示）"],
                [
                  "お問い合わせ先",
                  <>
                    メールアドレス:{" "}
                    <a
                      href="mailto:kaliova.kt@gmail.com"
                      className="text-cyan-400 underline hover:text-cyan-300"
                    >
                      kaliova.kt@gmail.com
                    </a>
                  </>,
                ],
                ["販売価格", "各サービスページに税込価格で表示されています。"],
                ["お支払い方法", "銀行振込・クレジットカード・その他電子決済に対応。"],
                [
                  "お支払い時期",
                  "ご契約確定後、請求書発行から7日以内にお支払いをお願いしております。",
                ],
                [
                  "サービス提供時期",
                  "お支払い確認後、双方合意のもとスケジュールを確定し提供を開始します。",
                ],
                [
                  "返品・キャンセル",
                  <>
                    デジタルサービスの性質上、提供開始後の返金は原則対応いたしかねます。
                    <br />
                    契約前のキャンセルは可能です。
                  </>,
                ],
                [
                  "その他",
                  "サービス内容・契約条件は予告なく変更される場合があります。",
                ],
              ].map(([label, value], index) => (
                <tr
                  key={index}
                  className="border-b border-white/10 hover:bg-white/5 transition"
                >
                  <td className="p-4 font-semibold w-1/3 bg-[#111]">{label}</td>
                  <td className="p-4">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ボタン */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-md hover:shadow-cyan-500/30"
          >
            トップページへ戻る
          </a>
        </div>
      </div>
    </main>
  );
}
