import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Panel({
  title, subtitle, action, children, className, accent,
}: {
  title: string; subtitle?: string; action?: ReactNode; children: ReactNode;
  className?: string; accent?: "purple" | "cyan" | "pink" | "red";
}) {
  const accentBar: Record<string, string> = {
    purple: "from-[var(--neon-purple)] to-[var(--neon-blue)]",
    cyan: "from-[var(--neon-cyan)] to-[var(--neon-blue)]",
    pink: "from-[var(--neon-pink)] to-[var(--neon-purple)]",
    red: "from-[var(--danger)] to-[var(--neon-pink)]",
  };
  return (
    <section className={cn("relative glass rounded-2xl p-5 md:p-6", className)}>
      <header className="flex items-start justify-between gap-4 mb-5">
        <div className="min-w-0 flex items-center gap-3">
          {accent && <span className={cn("h-8 w-1 rounded-full bg-gradient-to-b", accentBar[accent])} />}
          <div className="min-w-0">
            <h3 className="text-sm md:text-base font-semibold truncate">{title}</h3>
            {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}
