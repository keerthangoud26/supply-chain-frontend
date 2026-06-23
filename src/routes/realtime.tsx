import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/AppShell";
import { RealtimePage } from "@/components/dashboard/RealtimePage";

export const Route = createFileRoute("/realtime")({
  head: () => ({
    meta: [
      { title: "Real-Time Monitoring — SupplySense AI" },
      {
        name: "description",
        content: "Live operational activity stream and monitoring",
      },
    ],
  }),

  component: () => (
    <AppShell title="Real-Time Monitoring">
      <RealtimePage />
    </AppShell>
  ),
});