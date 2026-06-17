import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

const titles: Record<string, string> = {
  overview: "Dashboard Overview",
  inventory: "Inventory Intelligence",
  supplier: "Supplier Intelligence",
  logistics: "Logistics Analytics",
  ai: "AI Prediction Engine",
  anomaly: "Shipment Anomaly Detection",
  realtime: "Real-Time Monitoring",
  reports: "Reports & Insights",
  settings: "Settings",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Supply Chain AI — Enterprise Intelligence Platform" },
      { name: "description", content: "Real-time supply chain analytics, predictive ML, and anomaly detection for enterprise retail and logistics." },
      { property: "og:title", content: "Nexus Supply Chain AI" },
      { property: "og:description", content: "Enterprise AI dashboard for global supply chain intelligence." },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState("overview");
  return (
    <div className="flex min-h-screen w-full text-foreground">
      <Sidebar active={active} onSelect={setActive} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Header title={titles[active] ?? "Dashboard"} />
        <main className="flex-1">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}
