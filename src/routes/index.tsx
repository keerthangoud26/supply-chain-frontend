import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/AppShell";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Supply Chain AI — Enterprise Intelligence Platform" },
      { name: "description", content: "Real-time supply chain analytics, predictive ML, and anomaly detection for enterprise retail and logistics." },
      { property: "og:title", content: "Nexus Supply Chain AI" },
      { property: "og:description", content: "Enterprise AI dashboard for global supply chain intelligence." },
    ],
  }),
  component: () => (
    <AppShell title="Dashboard Overview">
      <DashboardContent />
    </AppShell>
  ),
});
