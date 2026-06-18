import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/AppShell";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SupplySense AI — Enterprise Intelligence Platform" },
      { name: "description", content: "AI-powered predictive logistics and enterprise supply intelligence platform." },
      { property: "og:title", content: "SupplySense AI" },
      { property: "og:description", content: "AI-powered predictive logistics and enterprise supply intelligence platform." },
    ],
  }),
  component: () => (
    <AppShell
      title="Supply Chain Control Tower"
      subtitle="AI-powered predictive logistics and enterprise supply intelligence platform."
    >
      <DashboardContent />
    </AppShell>
  ),
});
