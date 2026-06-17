import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { AppShell } from "@/components/dashboard/AppShell";
import { PageStub } from "@/components/dashboard/PageStub";

export const Route = createFileRoute("/supplier")({
  head: () => ({
    meta: [
      { title: "Supplier Intelligence — Nexus Supply Chain AI" },
      { name: "description", content: "Defect rates, lead times and reliability scoring across the supplier network." },
    ],
  }),
  component: () => (
    <AppShell title="Supplier Intelligence">
      <PageStub title="Supplier Intelligence" subtitle="Defect rates, lead times and reliability scoring across the supplier network." icon={Users} accent="cyan" />
    </AppShell>
  ),
});
