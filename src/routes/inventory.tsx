import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/AppShell";
import { InventoryPage } from "@/components/dashboard/InventoryPage";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory Intelligence — SupplySense AI" },
      {
        name: "description",
        content: "Real-time stock levels and warehouse monitoring",
      },
    ],
  }),

  component: () => (
    <AppShell title="Inventory Intelligence">
      <InventoryPage />
    </AppShell>
  ),
});