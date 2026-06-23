import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/AppShell";
import { AnomalyPage } from "@/components/dashboard/AnomalyPage";

export const Route = createFileRoute("/anomaly")({
  head: () => ({
    meta: [
      { title: "Anomaly Detection — SupplySense AI" },
      {
        name: "description",
        content: "AI-powered anomaly detection and supply chain alerts",
      },
    ],
  }),

  component: () => (
    <AppShell title="Anomaly Detection">
      <AnomalyPage />
    </AppShell>
  ),
});