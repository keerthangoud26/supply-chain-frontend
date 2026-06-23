import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/AppShell";
import { LogisticsPage } from "@/components/dashboard/LogisticsPage";

export const Route = createFileRoute("/logistics")({
  head: () => ({
    meta: [
      { title: "Logistics Analytics — SupplySense AI" },
      {
        name: "description",
        content: "Transportation mode and shipping cost analytics",
      },
    ],
  }),

  component: () => (
    <AppShell title="Logistics Analytics">
      <LogisticsPage />
    </AppShell>
  ),
});