import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/AppShell";
import { SupplierPage } from "@/components/dashboard/SupplierPage";

export const Route = createFileRoute("/supplier")({
  head: () => ({
    meta: [
      { title: "Supplier Intelligence — SupplySense AI" },
      {
        name: "description",
        content: "Live supplier quality and defect monitoring",
      },
    ],
  }),

  component: () => (
    <AppShell title="Supplier Intelligence">
      <SupplierPage />
    </AppShell>
  ),
});