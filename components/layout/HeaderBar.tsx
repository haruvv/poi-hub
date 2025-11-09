export const HeaderBar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xs font-semibold tracking-[0.16em] text-emerald-600 uppercase">
            POIKATSU NAVI
          </span>
          <span className="text-[10px] text-slate-500">ポイ活なび</span>
        </div>
      </div>
    </header>
  );
};
