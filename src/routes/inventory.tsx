import { createFileRoute } from "@tanstack/react-router";
import { Package } from "lucide-react";
import { AppShell } from "@/components/dashboard/AppShell";
import { PageStub } from "@/components/dashboard/PageStub";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory Intelligence — Nexus Supply Chain AI" },
      { name: "description", content: "Real-time stock levels, reorder forecasts, and SKU-level health across all warehouses." },
    ],
  }),
  component: () => (
    <AppShell title="Inventory Intelligence">
      <PageStub title="Inventory Intelligence" subtitle="Real-time stock levels, reorder forecasts, and SKU-level health across all warehouses." icon={Package} accent="purple" />
    </AppShell>
  ),
});
