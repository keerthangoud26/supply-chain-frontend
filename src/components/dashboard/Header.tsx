import { ChevronRight } from "lucide-react";

export function Header({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/70 backdrop-blur-2xl">
      <div className="flex items-center gap-4 px-4 md:px-8 h-16">
        
        {/* Left Section */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span>SupplySense</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[var(--neon-blue)]">
              {breadcrumb ?? title}
            </span>
          </div>

          <h1 className="text-lg md:text-xl font-bold truncate tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-[11px] text-muted-foreground truncate hidden md:block">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">

          {/* System Status */}
          <div className="hidden sm:flex items-center gap-2 glass rounded-full px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" />
            </span>

            <span className="text-xs font-medium">
              System Online
            </span>
          </div>

          {/* Profile */}
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)] grid place-items-center text-xs font-bold text-white">
            MK
          </div>

        </div>
      </div>
    </header>
  );
}