import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function AppShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full text-foreground">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <Header title={title} subtitle={subtitle} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
