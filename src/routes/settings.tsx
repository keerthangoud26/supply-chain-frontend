import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/dashboard/AppShell";
import { SettingsPage } from "@/components/dashboard/SettingsPage";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — SupplySense AI" },
      {
        name: "description",
        content: "System configuration and infrastructure status",
      },
    ],
  }),

  component: () => (
    <AppShell title="Settings">
      <SettingsPage />
    </AppShell>
  ),
});