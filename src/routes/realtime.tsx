import { createFileRoute } from "@tanstack/react-router";
import { Radio } from "lucide-react";
import { AppShell } from "@/components/dashboard/AppShell";
import { PageStub } from "@/components/dashboard/PageStub";

export const Route = createFileRoute("/realtime")({
  head: () => ({
    meta: [
      { title: "Real-Time Monitoring — Nexus Supply Chain AI" },
      { name: "description", content: "Live Kafka streaming feed of shipments, inventory and supplier events." },
    ],
  }),
  component: () => (
    <AppShell title="Real-Time Monitoring">
      <PageStub title="Real-Time Monitoring" subtitle="Live Kafka streaming feed of shipments, inventory and supplier events." icon={Radio} accent="cyan" />
    </AppShell>
  ),
});
