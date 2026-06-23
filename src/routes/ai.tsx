import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/AppShell";
import { AIPredictionPage } from "@/components/dashboard/AIPredictionPage";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI Prediction Engine — SupplySense AI" },
      {
        name: "description",
        content: "Machine learning based revenue forecasting engine",
      },
    ],
  }),

  component: () => (
    <AppShell title="AI Prediction Engine">
      <AIPredictionPage />
    </AppShell>
  ),
});