import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { AppShell } from "@/components/dashboard/AppShell";
import { PageStub } from "@/components/dashboard/PageStub";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Nexus Supply Chain AI" },
      { name: "description", content: "Workspace, integrations, role-based access and notification preferences." },
    ],
  }),
  component: () => (
    <AppShell title="Settings">
      <PageStub title="Settings" subtitle="Workspace, integrations, role-based access and notification preferences." icon={Settings} accent="cyan" />
    </AppShell>
  ),
});
