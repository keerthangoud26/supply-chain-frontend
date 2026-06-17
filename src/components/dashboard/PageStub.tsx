import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Panel } from "@/components/dashboard/Panel";

export function PageStub({
  title, subtitle, icon: Icon, accent = "purple", children,
}: {
  title: string; subtitle: string; icon: LucideIcon;
  accent?: "purple" | "cyan" | "pink" | "red";
  children?: ReactNode;
}) {
  return (
    <div className="px-4 md:px-8 py-8 space-y-6">
      <div className="glass-strong rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_15%_0%,var(--neon-purple),transparent_45%),radial-gradient(circle_at_90%_100%,var(--neon-cyan),transparent_45%)]" />
        <div className="relative flex items-start gap-5">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)] grid place-items-center shrink-0 glow-purple">
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-foreground/5 border border-border text-[11px] text-[var(--neon-blue)] mb-2">
              Module
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{subtitle}</p>
          </div>
        </div>
      </div>

      <Panel title="Coming Online" subtitle="This module connects to the live Kafka topic and ML services." accent={accent}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Data Ingestion", "Model Inference", "Visualization"].map((s, i) => (
            <div key={s} className="glass rounded-xl p-4">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Stage {i + 1}</div>
              <div className="mt-1 text-base font-semibold">{s}</div>
              <div className="mt-3 h-2 rounded-full bg-foreground/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--neon-purple)] via-[var(--neon-blue)] to-[var(--neon-cyan)]"
                  style={{ width: `${[92, 78, 64][i]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        {children}
      </Panel>
    </div>
  );
}
