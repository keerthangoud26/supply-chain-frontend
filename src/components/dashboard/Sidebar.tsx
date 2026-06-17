import { useState } from "react";
import {
  LayoutDashboard, Package, Users, Truck, BrainCircuit, ShieldAlert,
  Radio, FileBarChart, Settings, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { id: "overview", label: "Dashboard Overview", icon: LayoutDashboard },
  { id: "inventory", label: "Inventory Intelligence", icon: Package },
  { id: "supplier", label: "Supplier Intelligence", icon: Users },
  { id: "logistics", label: "Logistics Analytics", icon: Truck },
  { id: "ai", label: "AI Prediction Engine", icon: BrainCircuit },
  { id: "anomaly", label: "Anomaly Detection", icon: ShieldAlert },
  { id: "realtime", label: "Real-Time Monitoring", icon: Radio },
  { id: "reports", label: "Reports & Insights", icon: FileBarChart },
  { id: "settings", label: "Settings", icon: Settings },
];

export function Sidebar({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <aside className="hidden lg:flex flex-col w-[260px] shrink-0 h-screen sticky top-0 border-r border-white/5 bg-[#0B0F1A]/80 backdrop-blur-2xl">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)] grid place-items-center glow-purple">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--neon-purple)]/40 to-[var(--neon-cyan)]/40 blur-md -z-10" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Nexus</div>
            <div className="text-sm font-bold leading-tight gradient-text">SUPPLY CHAIN AI</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <div className="px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">Platform</div>
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => onSelect(it.id)}
              className={cn(
                "group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-[var(--neon-purple)]/20 to-[var(--neon-blue)]/10 text-white border border-[var(--neon-purple)]/30 shadow-[0_0_20px_-8px_var(--neon-purple)]"
                  : "text-muted-foreground hover:text-white hover:bg-white/5",
              )}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-gradient-to-b from-[var(--neon-purple)] to-[var(--neon-cyan)]" />
              )}
              <Icon className={cn("h-4 w-4 shrink-0", isActive && "text-[var(--neon-cyan)]")} />
              <span className="truncate font-medium">{it.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User */}
      <div className="p-3 border-t border-white/5">
        <div className="glass rounded-xl p-3 flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--neon-pink)] to-[var(--neon-purple)] grid place-items-center text-sm font-bold">AU</div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[var(--success)] ring-2 ring-[#0B0F1A] pulse-dot" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">Admin User</div>
            <div className="text-[11px] text-muted-foreground truncate">Supply Chain Director</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
