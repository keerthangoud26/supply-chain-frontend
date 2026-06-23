import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/AppShell";
import { ReportsPage } from "@/components/dashboard/ReportsPage";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports & Insights — SupplySense AI" },
      {
        name: "description",
        content: "Executive analytics reports and business insights",
      },
    ],
  }),

  component: () => (
    <AppShell title="Reports & Insights">
      <ReportsPage />
    </AppShell>
  ),
});