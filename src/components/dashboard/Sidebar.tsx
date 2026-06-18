import {
  LayoutDashboard, Package, Users, Truck, BrainCircuit, ShieldAlert,
  Radio, FileBarChart, Settings, Sparkles,
} from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const navItems = [
  { to: "/",          label: "Dashboard Overview",     icon: LayoutDashboard },
  { to: "/inventory", label: "Inventory Intelligence", icon: Package },
  { to: "/supplier",  label: "Supplier Intelligence",  icon: Users },
  { to: "/logistics", label: "Logistics Analytics",    icon: Truck },
  { to: "/ai",        label: "AI Prediction Engine",   icon: BrainCircuit },
  { to: "/anomaly",   label: "Anomaly Detection",      icon: ShieldAlert },
  { to: "/realtime",  label: "Real-Time Monitoring",   icon: Radio },
  { to: "/reports",   label: "Reports & Insights",     icon: FileBarChart },
  { to: "/settings",  label: "Settings",               icon: Settings },
] as const;

export function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden lg:flex flex-col w-[260px] shrink-0 h-screen sticky top-0 border-r border-border bg-sidebar/85 backdrop-blur-2xl">
      <div className="px-5 py-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)] grid place-items-center glow-purple">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--neon-purple)]/30 to-[var(--neon-cyan)]/30 blur-md -z-10" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold leading-tight gradient-text">SupplySense AI</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">Enterprise Intelligence Platform</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <div className="px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">Platform</div>
        {navItems.map((it) => {
          const Icon = it.icon;
          const isActive = it.to === "/" ? pathname === "/" : pathname.startsWith(it.to);
          return (
            <Link
              key={it.to}
              to={it.to}
              className={cn(
                "group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-[var(--neon-purple)]/15 to-[var(--neon-blue)]/10 text-foreground border border-[var(--neon-purple)]/25 shadow-[0_4px_20px_-8px_var(--neon-purple)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
              )}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-gradient-to-b from-[var(--neon-purple)] to-[var(--neon-cyan)]" />
              )}
              <Icon className={cn("h-4 w-4 shrink-0", isActive && "text-[var(--neon-blue)]")} />
              <span className="truncate font-medium">{it.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-border">
        <div className="glass rounded-xl p-3 flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)] grid place-items-center text-sm font-bold text-white">KG</div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[var(--success)] ring-2 ring-card pulse-dot" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">Keerthan G</div>
            <div className="text-[11px] text-muted-foreground truncate">AI Systems Engineer</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
