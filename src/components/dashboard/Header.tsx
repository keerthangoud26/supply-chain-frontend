import { Bell, Search, Settings, ChevronRight } from "lucide-react";

export function Header({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb?: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/70 backdrop-blur-2xl">
      <div className="flex items-center gap-4 px-4 md:px-8 h-16">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span>SupplySense</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[var(--neon-blue)]">{breadcrumb ?? title}</span>
          </div>
          <h1 className="text-lg md:text-xl font-bold truncate tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-[11px] text-muted-foreground truncate hidden md:block">{subtitle}</p>
          )}
        </div>

        <div className="hidden md:flex relative w-[380px] max-w-[40vw]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search products, suppliers, shipments..."
            className="w-full glass rounded-xl pl-9 pr-16 py-2.5 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-[var(--neon-blue)]/50"
          />
          <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono text-muted-foreground bg-foreground/5 border border-border rounded px-1.5 py-0.5">⌘K</kbd>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 glass rounded-full px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" />
            </span>
            <span className="text-xs font-medium">System Online</span>
          </div>
          <button className="relative h-9 w-9 grid place-items-center rounded-xl glass hover:bg-foreground/5 transition">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[var(--neon-purple)]" />
          </button>
          <button className="h-9 w-9 grid place-items-center rounded-xl glass hover:bg-foreground/5 transition">
            <Settings className="h-4 w-4" />
          </button>
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)] grid place-items-center text-xs font-bold text-white">KG</div>
        </div>
      </div>
    </header>
  );
}
