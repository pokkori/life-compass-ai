import Link from "next/link";

// TODO: 以下の情報を実際の情報に置き換えてください
const BUSINESS_INFO = {
  name: "【事業者名・屋号を入力】",
  representative: "【代表者氏名を入力】",
  address: "【都道府県・市区町村・番地を入力】",
  phone: "【電話番号を入力】",
  email: "support@lifecompassai.com",
  price: "$9.99/月（約¥1,500/月）または $49.99/年（約¥7,500/年）",
  billingCycle: "月次または年次（自動更新）",
  paymentMethod: "クレジットカード（Stripe経由）",
  cancellation: "いつでもマイページまたはサポートへのメールにて解約可能。解約後は当該期間末まで利用可能。",
  refund: "原則として返金不可。ただし、サービスに重大な瑕疵があった場合はご相談ください。",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <Link href="/" className="text-amber-400 hover:text-amber-300 text-sm mb-8 inline-block">
        ← LifeCompass AI
      </Link>
      <h1 className="text-3xl font-bold mb-2">特定商取引法に基づく表記</h1>
      <p className="text-stone-500 text-sm mb-10">Act on Specified Commercial Transactions</p>

      <table className="w-full text-sm border-collapse">
        <tbody>
          {[
            ["販売業者", BUSINESS_INFO.name],
            ["運営責任者", BUSINESS_INFO.representative],
            ["所在地", BUSINESS_INFO.address],
            ["電話番号", BUSINESS_INFO.phone],
            ["メールアドレス", BUSINESS_INFO.email],
            ["サービス名", "LifeCompass AI — プレミアムプラン"],
            ["販売価格", BUSINESS_INFO.price],
            ["支払時期", "ご利用開始時、および自動更新日"],
            ["支払方法", BUSINESS_INFO.paymentMethod],
            ["契約更新", BUSINESS_INFO.billingCycle],
            ["解約方法", BUSINESS_INFO.cancellation],
            ["返金ポリシー", BUSINESS_INFO.refund],
            ["動作環境", "インターネット接続環境、モダンブラウザ（Chrome / Safari / Firefox 最新版）"],
          ].map(([label, value]) => (
            <tr key={label} className="border-b border-stone-800">
              <td className="py-4 pr-6 text-stone-400 font-medium whitespace-nowrap align-top w-36">{label}</td>
              <td className="py-4 text-stone-200">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-12 text-stone-600 text-xs space-y-1">
        <p>※ 本サービスはデジタルコンテンツ（AIチャットサービス）であり、提供開始後の返金は原則できません。</p>
        <p>※ 価格は米ドル表示です。日本円換算はご利用時の為替レートにより異なります。</p>
      </div>

      <div className="mt-8 flex gap-4 text-sm text-stone-500">
        <Link href="/terms" className="hover:text-stone-300 transition-colors">利用規約</Link>
        <Link href="/privacy" className="hover:text-stone-300 transition-colors">プライバシーポリシー</Link>
      </div>
    </main>
  );
}
