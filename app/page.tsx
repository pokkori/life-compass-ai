import Link from "next/link";
import { ShareButtons } from "@/components/ShareButtons";
import { AdBanner } from "@/components/AdBanner";

const SCENARIO_ICONS = [
  // Briefcase icon for Career
  <svg key="career" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-400" aria-hidden="true"><path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clipRule="evenodd"/><path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4z"/></svg>,
  // Heart icon for Relationship
  <svg key="relation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-400" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z"/></svg>,
  // Globe icon for Life changes
  <svg key="life" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-400" aria-hidden="true"><path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477zM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0zM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605zM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477zM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.099zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.817zM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49zM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276zM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985z"/></svg>,
  // Star icon for Purpose
  <svg key="purpose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-400" aria-hidden="true"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd"/></svg>,
];

const SCENARIOS = [
  { icon: SCENARIO_ICONS[0], title: "転職・キャリアの岐路", body: "今の仕事をやめるべきか？本当にやりたいことは何か？" },
  { icon: SCENARIO_ICONS[1], title: "恋愛・人間関係の判断", body: "続けるべきか離れるべきか？自分が本当に望むものは？" },
  { icon: SCENARIO_ICONS[2], title: "ライフスタイルの変化", body: "新しい環境に移るべきか？何が自分を引き留めているのか？" },
  { icon: SCENARIO_ICONS[3], title: "目的・方向性の模索", body: "人生で本当に求めるものは何か？なぜ何もしっくりこないのか？" },
];

const STEPS = [
  { n: "1", title: "今の悩みを話す", body: "会話を始めるだけ。フォームも問診票も不要 — ただ話しかけてください。" },
  { n: "2", title: "AIが適切な質問をする", body: "LifeCompass AIは答えを出しません。あなた自身が答えを見つけるための質問をします。" },
  { n: "3", title: "思考が整理される", body: "多くの人はすでに答えを知っています。ただ、自分の声を聴く場所が必要なだけです。" },
];

/* Floating particles via CSS */
const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
    {Array.from({ length: 18 }).map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full opacity-20"
        style={{
          width: `${4 + (i % 5) * 2}px`,
          height: `${4 + (i % 5) * 2}px`,
          background: i % 3 === 0 ? '#F59E0B' : i % 3 === 1 ? '#D97706' : '#FBBF24',
          left: `${(i * 17 + 5) % 95}%`,
          top: `${(i * 23 + 10) % 90}%`,
          animation: `float-particle ${8 + (i % 6) * 2}s ease-in-out infinite`,
          animationDelay: `${i * 0.5}s`,
        }}
      />
    ))}
    <style>{`
      @keyframes float-particle {
        0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.15; }
        25% { transform: translateY(-30px) translateX(10px); opacity: 0.3; }
        50% { transform: translateY(-15px) translateX(-8px); opacity: 0.2; }
        75% { transform: translateY(-40px) translateX(5px); opacity: 0.25; }
      }
    `}</style>
  </div>
);

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{
      background: 'radial-gradient(ellipse at 20% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(217, 119, 6, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(251, 191, 36, 0.05) 0%, transparent 50%), #0c0a09'
    }}>
      <FloatingParticles />
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <span className="font-semibold text-lg tracking-tight flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3z" clipRule="evenodd"/>
          </svg>
          LifeCompass AI
        </span>
        <div className="flex items-center gap-4 text-sm text-stone-400">
          <Link href="#how" aria-label="使い方セクションへスクロールする" className="hover:text-stone-100 transition-colors">使い方</Link>
          <Link href="/chat" aria-label="LifeCompass AIを無料で始める" className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold px-4 py-2 rounded-full transition-colors">
            無料で始める →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-3xl mx-auto">
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">AI 思考パートナー</p>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          答えはすでにあなたの中にある。<br />
          <span style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ただ、声が聞こえていないだけ。</span>
        </h1>
        <p className="text-stone-400 text-xl leading-relaxed mb-10">
          LifeCompass AIは、キャリア・恋愛・転居・夢の追求など、人生の大きな決断を整理するお手伝いをします。
          適切な質問の力を使って。
          <br /><span className="text-stone-500">療法でもアドバイスでもない。ただの思考整理。</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/chat"
            aria-label="LifeCompass AIで無料で思考を始める"
            className="font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              color: '#0c0a09',
              boxShadow: '0 0 25px rgba(245, 158, 11, 0.4), 0 4px 15px rgba(0,0,0,0.3)',
            }}
          >
            今すぐ考える — 無料
          </Link>
          <Link
            href="#how"
            aria-label="使い方の詳細を見る"
            className="border border-stone-700 hover:border-stone-500 text-stone-300 text-lg px-8 py-4 rounded-full transition-colors"
          >
            使い方を見る
          </Link>
        </div>
        <p className="text-stone-600 text-sm mt-4">1日5回まで無料。クレジットカード不要。</p>
      </section>

      {/* Scenarios */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-10 text-stone-300">こんな場面でLifeCompassが役立ちます</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SCENARIOS.map((s) => (
            <div key={s.title} style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px' }} className="shadow-lg p-6">
              <div className="mb-3">{s.icon}</div>
              <h3 className="font-semibold text-stone-100 mb-1">{s.title}</h3>
              <p className="text-stone-400 text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">使い方</h2>
        <div className="space-y-8">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-stone-950 font-bold flex items-center justify-center">
                {s.n}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-stone-400">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiator */}
      <section className="px-6 py-16 bg-stone-900 border-y border-stone-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">ChatGPTとは違います。</h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            ChatGPTは答えを出します。LifeCompassは質問をします。大きな違いがあります。
            あなた自身の人生の決断を、AIに丸投げするべきではありません。
            LifeCompassはあなたの代わりに考えるのではなく、あなたが考えるのを助けます。
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            {[
              { label: "ChatGPT", desc: "答えを出す", bad: true },
              { label: "カウンセリング", desc: "高額・予約待ちが必要", bad: true },
              { label: "LifeCompass", desc: "適切な質問を24時間", bad: false },
            ].map((x) => (
              <div key={x.label} style={x.bad ? { background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' } : { background: 'rgba(245,158,11,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '2px solid #f59e0b', borderRadius: '12px' }} className={`p-4 ${x.bad ? "text-stone-500" : "text-stone-100"}`}>
                <div className="font-semibold mb-1">{x.label}</div>
                <div className="text-sm">{x.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">シンプルな料金</h2>
        <p className="text-stone-400 mb-10">無料で始めて、準備ができたらアップグレード。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px' }} className="p-8">
            <h3 className="font-semibold text-lg mb-2">無料プラン</h3>
            <p className="text-4xl font-bold mb-4">¥0</p>
            <ul className="text-stone-400 text-sm space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
                1日5回まで会話
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
                全テーマ対応
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
                クレジットカード不要
              </li>
            </ul>
            <Link href="/chat" aria-label="無料プランでLifeCompass AIを始める" className="block w-full border border-stone-600 hover:border-stone-400 text-stone-300 py-3 rounded-full font-medium transition-colors text-center">
              無料で始める
            </Link>
          </div>
          <div style={{ background: 'rgba(245,158,11,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '2px solid #f59e0b', borderRadius: '16px' }} className="p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1 rounded-full">
              人気プラン
            </div>
            <h3 className="font-semibold text-lg mb-2">プレミアム</h3>
            <p className="text-4xl font-bold mb-1">¥980<span className="text-lg font-normal text-stone-400">/月</span></p>
            <p className="text-stone-500 text-sm mb-4">1日あたり約32円。いつでも解約可。</p>
            <ul className="text-stone-300 text-sm space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
                無制限の会話
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
                会話履歴の保存
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
                全テーマ対応
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd"/></svg>
                優先サポート
              </li>
            </ul>
            <Link
              href="/api/stripe/checkout"
              aria-label="プレミアムプランを購入する（月額980円）"
              className="block w-full bg-amber-500 hover:bg-amber-400 text-stone-950 py-3 rounded-full font-bold transition-colors"
            >
              月額¥980で始める →
            </Link>
            <div className="mt-4 text-xs text-stone-600 space-y-0.5 text-left">
              <p>サービス: LifeCompass AI プレミアム（無制限会話・履歴保存）</p>
              <p>料金: 月額¥980（税込）/ 毎月自動更新</p>
              <p>解約: マイページから随時解約可</p>
              <p>返金: デジタルコンテンツのため原則返金不可</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center border-t border-stone-800" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245, 158, 11, 0.06) 0%, transparent 60%), #1c1917' }}>
        <h2 className="text-4xl font-bold mb-4">思考を整理する準備はできていますか？</h2>
        <p className="text-stone-400 mb-8">今すぐ無料で始める — アカウント不要・1日5回まで無料。</p>
        <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px' }} className="shadow-lg p-8 max-w-md mx-auto mb-6">
          <Link
            href="/chat"
            aria-label="LifeCompass AIで今すぐ無料で思考を整理する"
            className="block w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-lg px-10 py-4 rounded-full transition-colors text-center"
          >
            今すぐ考える — 無料
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="text-2xl font-bold text-stone-100 mb-8 text-center">よくある質問</h2>
          {[
            { q: '無料で使えますか？', a: '1日5回まで無料でご利用いただけます。クレジットカード不要・アカウント登録不要です。' },
            { q: '個人情報は安全ですか？', a: '入力された情報はAI分析のみに使用し、第三者への提供は行いません。SSL暗号化通信で安全に保護されています。' },
            { q: 'カウンセリングの代わりになりますか？', a: 'LifeCompass AIはカウンセリングや医療の代替ではありません。思考を整理するための対話ツールです。深刻な悩みがある場合は専門家にご相談ください。' },
            { q: 'ChatGPTとの違いは何ですか？', a: 'ChatGPTは答えを出しますが、LifeCompass AIは適切な質問をします。あなた自身が答えを見つけるための思考パートナーです。' },
          ].map(({ q, a }) => (
            <details key={q} className="mb-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <summary className="p-4 cursor-pointer text-stone-100 font-medium">{q}</summary>
              <p className="px-4 pb-4 text-stone-400 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: '無料で使えますか？', acceptedAnswer: { '@type': 'Answer', text: '1日5回まで無料でご利用いただけます。クレジットカード不要・アカウント登録不要です。' } },
              { '@type': 'Question', name: '個人情報は安全ですか？', acceptedAnswer: { '@type': 'Answer', text: '入力された情報はAI分析のみに使用し、第三者への提供は行いません。SSL暗号化通信で安全に保護されています。' } },
              { '@type': 'Question', name: 'カウンセリングの代わりになりますか？', acceptedAnswer: { '@type': 'Answer', text: 'LifeCompass AIはカウンセリングや医療の代替ではありません。思考を整理するための対話ツールです。深刻な悩みがある場合は専門家にご相談ください。' } },
              { '@type': 'Question', name: 'ChatGPTとの違いは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'ChatGPTは答えを出しますが、LifeCompass AIは適切な質問をします。あなた自身が答えを見つけるための思考パートナーです。' } },
            ],
          }).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'LifeCompass AI',
            applicationCategory: 'LifestyleApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
          }).replace(/</g, '\\u003c'),
        }}
      />

      {/* Share Section */}
      <section className="px-6 py-10 text-center">
        <p className="text-stone-500 text-sm mb-3">Share LifeCompass AI with someone who needs clarity</p>
        <ShareButtons url="https://lifecompass-ai.vercel.app" text="I tried LifeCompass AI!" hashtags="LifeCompassAI" />
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-stone-800 text-center text-stone-600 text-sm">
        <div className="flex flex-wrap justify-center gap-4 mb-3">
          <Link href="/terms" aria-label="利用規約を見る" className="hover:text-stone-400 transition-colors">Terms of Service</Link>
          <Link href="/privacy" aria-label="プライバシーポリシーを見る" className="hover:text-stone-400 transition-colors">Privacy Policy</Link>
          <Link href="/legal" aria-label="特定商取引法に基づく表記を見る" className="hover:text-stone-400 transition-colors">特定商取引法に基づく表記</Link>
          <Link href="/cancel" aria-label="Cancel subscription" className="hover:text-stone-400 transition-colors">Cancel</Link>
        </div>
        <p>© 2026 LifeCompass AI. Not a substitute for professional medical, legal, or financial advice.</p>
        <div className="flex items-center justify-center gap-2 text-xs text-stone-600 mt-4">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          SSL Encrypted | Your data is securely protected
        </div>
      </footer>
      <AdBanner slot="" />
    </main>
  );
}
