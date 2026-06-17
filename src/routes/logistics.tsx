import { createFileRoute } from "@tanstack/react-router";
import { Truck } from "lucide-react";
import { AppShell } from "@/components/dashboard/AppShell";
import { PageStub } from "@/components/dashboard/PageStub";

export const Route = createFileRoute("/logistics")({
  head: () => ({
    meta: [
      { title: "Logistics Analytics — Nexus Supply Chain AI" },
      { name: "description", content: "Carrier performance, route optimization and cost analysis across transport modes." },
    ],
  }),
  component: () => (
    <AppShell title="Logistics Analytics">
      <PageStub title="Logistics Analytics" subtitle="Carrier performance, route optimization and cost analysis across transport modes." icon={Truck} accent="pink" />
    </AppShell>
  ),
});
