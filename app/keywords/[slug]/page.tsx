import type { Metadata } from "next";
import Link from "next/link";

interface KeywordData {
  title: string;
  h1: string;
  description: string;
  features: { icon: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
  lastUpdated: string;
}

export const KEYWORDS: Record<string, KeywordData> = {
  "jinsei-mokuhyo-kakikata": {
    title: "人生 目標 設定 書き方 | LifeCompassAI",
    h1: "人生 目標 設定 書き方",
    description: "人生の目標設定の書き方をAIがサポート。長期・中期・短期の目標を体系的に整理して人生のコンパスを作成します。",
    features: [
      { icon: "🧭", title: "目標構造化AI", text: "人生の夢・価値観を入力すると長期→中期→短期の目標ツリーをAIが自動生成" },
      { icon: "📋", title: "SMART目標変換", text: "漠然とした目標を具体的・測定可能・達成期限付きのSMART目標にAIが変換" },
      { icon: "🔄", title: "定期レビュー支援", text: "目標の進捗チェックと見直しプロセスをAIがガイド" },
    ],
    faqs: [
      { q: "人生目標はどう書けばいい？", a: "まず価値観（何を大切にしているか）を明確にし、10年後の理想像から逆算して現在の行動目標を設定します。AIが対話形式で整理をサポートします。" },
      { q: "目標が多すぎて絞れない場合は？", a: "重要度×緊急度のマトリクスで優先順位をつけることが有効です。AIが目標の整理と優先付けを支援します。" },
      { q: "目標が変わってしまっても問題ない？", a: "目標は変化するものです。定期的に見直すことで、より自分らしい人生設計ができます。AIが変化に応じた目標の再設定をサポートします。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "career-plan-10nen": {
    title: "キャリアプラン 10年 設計 方法 | LifeCompassAI",
    h1: "キャリアプラン 10年 設計 方法",
    description: "10年キャリアプランの設計方法をAIがサポート。現在のスキルと目指すキャリアのギャップを分析して実行計画を作成します。",
    features: [
      { icon: "🎯", title: "10年ロードマップ", text: "現在→3年→5年→10年のキャリアマイルストーンをAIが設計" },
      { icon: "🔍", title: "スキルギャップ分析", text: "目標キャリアに必要なスキルと現在のスキルのギャップをAIが可視化" },
      { icon: "📚", title: "学習・成長計画", text: "スキルアップに必要な資格・学習・経験をAIが優先順位付けして提案" },
    ],
    faqs: [
      { q: "10年後のキャリアが想像できない場合は？", a: "5年後の少し先を考えることから始めましょう。AIが質問を通じて理想のキャリア像を引き出します。" },
      { q: "キャリアプランは何歳から考えるべき？", a: "20代後半〜30代前半が最適ですが、何歳からでも遅くはありません。AIが年齢・現状に合ったキャリアプランを設計します。" },
      { q: "転職前提のキャリアプランは作れる？", a: "現職継続・転職・独立など複数シナリオのキャリアプランを比較検討できます。AIが各シナリオのメリット・デメリットを分析します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "life-plan-30dai": {
    title: "ライフプラン 30代 設計 ポイント | LifeCompassAI",
    h1: "ライフプラン 30代 設計 ポイント",
    description: "30代のライフプラン設計のポイントを解説。結婚・住宅・子育て・キャリアを統合したライフプランをAIが作成します。",
    features: [
      { icon: "🏠", title: "ライフイベント統合", text: "結婚・出産・住宅購入などのライフイベントを一元管理してAIが年表を作成" },
      { icon: "💰", title: "30代の財務計画", text: "住宅ローン・教育費・老後資金を30代から考えた長期財務計画をAIが設計" },
      { icon: "⚖️", title: "仕事と家庭のバランス", text: "キャリアと家族の両立プランをAIがシミュレーション" },
    ],
    faqs: [
      { q: "30代でライフプランを立てる重要性は？", a: "30代は住宅・子育て・キャリアの意思決定が集中する時期です。早めに計画することで余裕を持った準備ができます。" },
      { q: "独身の30代でもライフプランは必要？", a: "独身の場合も老後・キャリア・住まいの計画は重要です。AIがおひとりさまのライフプランをサポートします。" },
      { q: "ライフプランと資産計画は同時に考えるべき？", a: "ライフプランに沿った資金計画を立てることで、必要なお金の見通しが明確になります。AIが人生計画と財務計画を連動させます。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "jibun-sagashi-self-analysis": {
    title: "自分探し 自己分析 方法 ツール | LifeCompassAI",
    h1: "自分探し 自己分析 方法 ツール",
    description: "自分探しのための自己分析方法とAIツールを解説。価値観・強み・弱みを深掘りして自分らしい人生の方向性を見つけます。",
    features: [
      { icon: "🔎", title: "AI自己分析", text: "100問の質問に答えるだけで価値観・強み・適性をAIが多角的に分析" },
      { icon: "🗺️", title: "人生マップ作成", text: "過去の経験・現在の状態・将来の希望を統合した人生マップをAIが作成" },
      { icon: "💡", title: "行動指針提案", text: "自己分析結果から具体的な行動指針と次のステップをAIが提示" },
    ],
    faqs: [
      { q: "自己分析のやり方は？", a: "過去の成功体験・失敗体験を振り返り、そこから価値観と強みを抽出するのが基本です。AIが体系的な自己分析をサポートします。" },
      { q: "自分が何をしたいかわからない場合は？", a: "「やりたいこと」より「どんな状態でいたいか」から考えるのが有効です。AIが対話を通じて自分の本音を引き出します。" },
      { q: "自己分析は就活以外でも使える？", a: "転職・副業・人生設計・コーチングなど幅広いシーンで活用できます。AIが目的に合った自己分析プログラムを提供します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "ikigai-mitsukeru-houhou": {
    title: "生きがい 見つける 方法 AI | LifeCompassAI",
    h1: "生きがい 見つける 方法 AI",
    description: "生きがいの見つけ方をAIがサポート。好きなこと・得意なこと・求められていること・稼げることの4つの交点をAIが分析します。",
    features: [
      { icon: "✨", title: "IKIGAI分析AI", text: "日本発のIKIGAIフレームワークをAIが活用。4要素の交点から生きがいを発見" },
      { icon: "🌱", title: "価値観明確化", text: "何に喜びを感じるか・何が得意かをAIが質問で深掘りして価値観を明確化" },
      { icon: "🚀", title: "生きがいを仕事・生活に統合", text: "発見した生きがいをキャリアや日常生活にどう落とし込むかをAIが提案" },
    ],
    faqs: [
      { q: "生きがいはどうやって見つける？", a: "「好きなこと」×「得意なこと」×「社会に必要なこと」×「収入になること」の4要素が重なる部分がIKIGAI（生きがい）です。" },
      { q: "仕事が生きがいじゃないとダメ？", a: "生きがいは仕事以外でも見つかります。家族・趣味・ボランティアなど多様な生きがいの形をAIが一緒に探します。" },
      { q: "年齢によって生きがいは変わる？", a: "ライフステージによって変化するのは自然です。AIが現在の状況に合った生きがい探しをサポートします。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "work-life-balance-keikaku": {
    title: "ワークライフバランス 実現 計画 | LifeCompassAI",
    h1: "ワークライフバランス 実現 計画",
    description: "ワークライフバランスを実現するための具体的な計画をAIが作成。理想の生活設計と仕事の見直しをサポートします。",
    features: [
      { icon: "⚖️", title: "バランス診断", text: "現在の仕事・プライベートの時間配分をAIが分析し、理想とのギャップを可視化" },
      { icon: "📅", title: "週次・月次計画最適化", text: "仕事の優先順位付けとプライベート時間の確保を両立するスケジュールをAIが設計" },
      { icon: "🔋", title: "エネルギー管理", text: "仕事効率を上げながら余暇を充実させるエネルギー管理方法をAIが提案" },
    ],
    faqs: [
      { q: "ワークライフバランスを改善する第一歩は？", a: "現在の時間の使い方を「見える化」することが第一歩です。AIが時間分析とバランス改善計画を作成します。" },
      { q: "残業が多い場合のWLBは可能？", a: "業務の棚卸し・優先順位の整理・上司との交渉など具体的なアプローチをAIが提案します。" },
      { q: "テレワークでのWLBはどう保つ？", a: "在宅勤務特有のオン/オフの切り替え方法とルーティン設計をAIがアドバイスします。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "career-change-life-plan": {
    title: "転職 キャリアチェンジ ライフプラン | LifeCompassAI",
    h1: "転職 キャリアチェンジ ライフプラン",
    description: "転職・キャリアチェンジを前提としたライフプランの立て方を解説。リスク分析から移行計画までAIが総合サポートします。",
    features: [
      { icon: "🔄", title: "転職シナリオ分析", text: "転職する場合・しない場合のキャリア・収入・生活への影響をAIが比較分析" },
      { icon: "⏱️", title: "転職タイミング判断", text: "ライフプランに最適な転職タイミングと準備期間をAIが算定" },
      { icon: "💰", title: "収入変化の財務計画", text: "転職による収入変化を織り込んだ長期財務計画をAIが再設計" },
    ],
    faqs: [
      { q: "転職前にライフプランを確認すべき理由は？", a: "転職は収入・キャリア・生活に大きな影響を与えます。ライフプランと照らし合わせてリスクとメリットを整理することが重要です。" },
      { q: "年収が下がる転職は避けるべき？", a: "長期的なキャリア・満足度・成長性を考えると短期的な年収低下が正解な場合もあります。AIが長期シミュレーションで判断をサポートします。" },
      { q: "キャリアチェンジの成功率を上げるには？", a: "事前のスキル習得・業界研究・ネットワーク構築が重要です。AIが移行計画のロードマップを作成します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "retirement-life-design": {
    title: "定年後 ライフデザイン セカンドライフ | LifeCompassAI",
    h1: "定年後 ライフデザイン セカンドライフ",
    description: "定年後のセカンドライフをデザインするためのガイドをAIが提供。仕事・趣味・コミュニティの充実したライフデザインを作成します。",
    features: [
      { icon: "🌅", title: "セカンドライフ設計", text: "定年後の理想の1日・1年を設計。生きがい・収入・コミュニティのバランスをAIが最適化" },
      { icon: "💼", title: "継続就労・再就職プラン", text: "定年後も働き続ける場合の再就職・顧問・フリーランスの選択肢をAIが提案" },
      { icon: "🏡", title: "住まい・生活設計", text: "定年後の住まい選び（都市/地方/海外）とライフスタイル設計をAIがサポート" },
    ],
    faqs: [
      { q: "定年後の生活設計はいつから始めるべき？", a: "50代前半から始めるのが理想的です。AIが現在の年齢から定年後に向けた準備計画を作成します。" },
      { q: "定年後も働き続けるべき？", a: "経済的な理由だけでなく、健康・生きがい・社会とのつながりのためにも就労継続のメリットは大きいです。AIが個人の状況に合ったプランを提案します。" },
      { q: "定年後の人間関係の築き方は？", a: "会社以外のコミュニティ（趣味・地域・ボランティア）を定年前から作っておくことが重要です。AIがコミュニティ形成プランを提案します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "personal-mission-statement": {
    title: "個人 ミッションステートメント 作り方 | LifeCompassAI",
    h1: "個人 ミッションステートメント 作り方",
    description: "個人のミッションステートメントの作り方をAIがサポート。自分の価値観・使命・目指す姿を一言で表現する言葉をAIが一緒に作成します。",
    features: [
      { icon: "📝", title: "ミッション言語化AI", text: "価値観・強み・貢献したいことを入力するとミッションステートメントをAIが生成" },
      { icon: "🎨", title: "複数パターン提案", text: "異なる切り口のミッションステートメントをAIが複数提案し、自分に合うものを選択" },
      { icon: "🔄", title: "ブラッシュアップ支援", text: "作成したミッションを生活・仕事に活かせる形に磨き上げるプロセスをAIがサポート" },
    ],
    faqs: [
      { q: "ミッションステートメントとは何？", a: "自分が何者で、何のために生きているかを表す「人生の羅針盤」となる言葉です。コヴィー博士の『7つの習慣』で広まった概念です。" },
      { q: "ミッションステートメントはどう活用する？", a: "意思決定の基準・目標設定の指針・モチベーション維持に活用できます。AIが日常への統合方法を提案します。" },
      { q: "短い言葉がいい？長い文章がいい？", a: "覚えやすく行動指針になる短い言葉（1〜3行）が一般的です。AIが自分の考えを凝縮した表現を提案します。" },
    ],
    lastUpdated: "2026-03-31",
  },
  "life-compass-goals-review": {
    title: "人生 振り返り 目標 見直し | LifeCompassAI",
    h1: "人生 振り返り 目標 見直し",
    description: "人生の振り返りと目標の見直し方法をAIがサポート。年次・半期・月次のレビュープロセスで人生の方向性を常に最適化します。",
    features: [
      { icon: "🔄", title: "定期レビューシステム", text: "年・半期・月・週単位の人生レビューフレームワークをAIが提供" },
      { icon: "📊", title: "目標達成度可視化", text: "設定した目標の進捗をグラフで可視化。達成・未達成の分析をAIが実施" },
      { icon: "🎯", title: "次期目標設定支援", text: "振り返り結果を踏まえた次の目標設定をAIが対話形式でサポート" },
    ],
    faqs: [
      { q: "人生の振り返りはどれくらいの頻度で行うべき？", a: "年次（年末年始）・半期・月次の3段階での振り返りが効果的です。AIが各レビューの進め方をガイドします。" },
      { q: "目標未達成の場合はどうすれば？", a: "なぜ達成できなかったかの原因分析が重要です。AIが未達成の原因を分析し、改善策と修正目標を提案します。" },
      { q: "振り返りのモチベーションが続かない場合は？", a: "ルーティン化・記録の可視化・小さな達成感の積み上げがモチベーション維持のコツです。AIが継続しやすい仕組みを提案します。" },
    ],
    lastUpdated: "2026-03-31",
  },
};

const ALL_SLUGS = Object.keys(KEYWORDS);

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = KEYWORDS[slug];
  if (!data) return { title: "Not Found" };

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      modifiedTime: data.lastUpdated,
      url: `https://lifecompass-ai.vercel.app/keywords/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
    alternates: {
      canonical: `https://lifecompass-ai.vercel.app/keywords/${slug}`,
    },
    other: {
      "article:modified_time": data.lastUpdated,
    },
  };
}

export default async function KeywordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = KEYWORDS[slug];

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", background: "#0f172a", color: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>ページが見つかりません</h1>
          <Link href="/" style={{ color: "#06b6d4" }}>トップページへ戻る</Link>
        </div>
      </div>
    );
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": data.lastUpdated,
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #0c4a6e 50%, #0f172a 100%)", color: "#e2e8f0", padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🧭</div>
            <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: "bold", marginBottom: "1rem", background: "linear-gradient(90deg, #06b6d4, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {data.h1}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#94a3b8", marginBottom: "2rem" }}>{data.description}</p>
            <Link href="/" style={{ display: "inline-block", background: "linear-gradient(135deg, #06b6d4, #8b5cf6)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "50px", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "none" }}>
              今すぐ無料で人生設計を始める →
            </Link>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center", color: "#06b6d4" }}>AIがサポートする3つのポイント</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {data.features.map((f, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: "12px", padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "2rem" }}>{f.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem", color: "#06b6d4" }}>{f.title}</h3>
                    <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center", color: "#06b6d4" }}>よくある質問</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {data.faqs.map((faq, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(6,182,212,0.2)", borderRadius: "12px", padding: "1.5rem" }}>
                  <h3 style={{ fontWeight: "bold", marginBottom: "0.75rem", color: "#06b6d4", fontSize: "1rem" }}>Q: {faq.q}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: "3rem", padding: "2rem", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", borderRadius: "16px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#06b6d4" }}>あなたの人生コンパスを作成</h2>
            <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>AIと対話しながら、自分だけの人生設計を作成できます</p>
            <Link href="/" style={{ display: "inline-block", background: "linear-gradient(135deg, #06b6d4, #8b5cf6)", color: "#fff", padding: "1rem 2.5rem", borderRadius: "50px", fontWeight: "bold", textDecoration: "none" }}>
              無料で始める →
            </Link>
          </div>

          <p style={{ textAlign: "center", color: "#475569", fontSize: "0.8rem", marginBottom: "2rem" }}>最終更新: {data.lastUpdated}</p>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
            <h3 style={{ textAlign: "center", color: "#94a3b8", marginBottom: "1rem" }}>他のAIツールも試してみる</h3>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="https://ai-keiei-keikaku.vercel.app" style={{ color: "#06b6d4", textDecoration: "none", fontSize: "0.9rem" }}>AI経営計画書</Link>
              <Link href="https://rougo-sim-ai.vercel.app" style={{ color: "#06b6d4", textDecoration: "none", fontSize: "0.9rem" }}>老後シミュレーターAI</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
