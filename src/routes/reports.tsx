import { createFileRoute } from "@tanstack/react-router";
import { FileBarChart } from "lucide-react";
import { AppShell } from "@/components/dashboard/AppShell";
import { PageStub } from "@/components/dashboard/PageStub";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports and Insights — Nexus Supply Chain AI" },
      { name: "description", content: "Executive-ready intelligence reports, exports and scheduled briefings." },
    ],
  }),
  component: () => (
    <AppShell title="Reports and Insights">
      <PageStub title="Reports and Insights" subtitle="Executive-ready intelligence reports, exports and scheduled briefings." icon={FileBarChart} accent="purple" />
    </AppShell>
  ),
});
