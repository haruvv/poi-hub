export const DiagnosisHero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 shadow-2xl diagnosis-hero-card">
      {/* 光るエフェクト */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300/5 via-transparent to-slate-300/5 diagnosis-hero-glow" />

      {/* キラキラエフェクト */}
      <div className="sparkle sparkle-1 sparkle-gray" />
      <div className="sparkle sparkle-2 sparkle-gray" />
      <div className="sparkle sparkle-3 sparkle-gray" />

      <div className="relative z-10 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-4 py-1.5 text-[11px] font-bold text-white shadow-md">
          <span className="inline-block h-2 w-2 rounded-full bg-white/80 animate-pulse" />
          30秒で診断
        </div>

        <div className="space-y-3">
          <h1 className="text-[24px] leading-tight font-extrabold text-slate-900">
            あなたに本当に合う
            <br />
            <span className="text-slate-700">「お得アクション」</span>
            を診断
          </h1>
          <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
            難しいテクニックや怪しい副業は一切ナシ。
            <br />
            いつもの支払い方やよく使うサービスを選ぶだけで、
            <span className="font-bold text-slate-900">
              あなたに本当に合う「これだけやれば十分」なポイ活
            </span>
            を、2〜3個だけ厳選してお伝えします。
          </p>
        </div>
      </div>
    </section>
  );
};
