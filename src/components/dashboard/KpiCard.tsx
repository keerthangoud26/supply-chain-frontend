import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function useCounter(target: number, duration = 1200) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0; const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return v;
}

export function KpiCard({
  label, value, suffix, prefix, decimals = 0, trend, trendLabel, icon: Icon, accent = "purple",
}: {
  label: string; value: number; suffix?: string; prefix?: string; decimals?: number;
  trend: number; trendLabel?: string; icon: LucideIcon;
  accent?: "purple" | "blue" | "cyan" | "pink" | "green" | "red";
}) {
  const n = useCounter(value);
  const positive = trend >= 0;
  const accentMap: Record<string, string> = {
    purple: "from-[var(--neon-purple)] to-[var(--neon-blue)]",
    blue: "from-[var(--neon-blue)] to-[var(--neon-cyan)]",
    cyan: "from-[var(--neon-cyan)] to-[var(--neon-blue)]",
    pink: "from-[var(--neon-pink)] to-[var(--neon-purple)]",
    green: "from-[var(--success)] to-[var(--neon-cyan)]",
    red: "from-[var(--danger)] to-[var(--neon-pink)]",
  };
  return (
    <div className="group relative glass rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20">
      <div className={cn("absolute -top-12 -right-12 h-32 w-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition bg-gradient-to-br", accentMap[accent])} />
      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
          <div className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
            {prefix}{n.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}{suffix}
          </div>
          <div className={cn(
            "mt-2 inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full",
            positive ? "bg-[var(--success)]/15 text-[var(--success)]" : "bg-[var(--danger)]/15 text-[var(--danger)]",
          )}>
            {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {positive ? "+" : ""}{trend}{trendLabel ?? "%"}
          </div>
        </div>
        <div className={cn("h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-br shrink-0", accentMap[accent])}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}
