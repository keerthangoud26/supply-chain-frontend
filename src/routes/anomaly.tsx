import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { AppShell } from "@/components/dashboard/AppShell";
import { PageStub } from "@/components/dashboard/PageStub";

export const Route = createFileRoute("/anomaly")({
  head: () => ({
    meta: [
      { title: "Anomaly Detection — Nexus Supply Chain AI" },
      { name: "description", content: "Isolation Forest flagged shipments and unusual supply chain patterns." },
    ],
  }),
  component: () => (
    <AppShell title="Anomaly Detection">
      <PageStub title="Anomaly Detection" subtitle="Isolation Forest flagged shipments and unusual supply chain patterns." icon={ShieldAlert} accent="red" />
    </AppShell>
  ),
});
