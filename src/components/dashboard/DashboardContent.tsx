import { useEffect, useRef, useState } from "react";
import {
  Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
  Area, AreaChart, CartesianGrid,
} from "recharts";
import {
  DollarSign, Package, Users, Truck, Activity, AlertTriangle, Brain, ShieldAlert,
  Radio, Database, Server, Box, Cpu, Wifi, FileSpreadsheet, FileText,
  TrendingUp, Sparkles, Download, ChevronDown,
} from "lucide-react";
import { Panel } from "./Panel";

const topProducts = [
  { sku: "SKU10", units: 996 },
  { sku: "SKU94", units: 987 },
  { sku: "SKU9",  units: 980 },
  { sku: "SKU37", units: 963 },
  { sku: "SKU36", units: 963 },
  { sku: "SKU72", units: 941 },
  { sku: "SKU22", units: 920 },
];

const supplierDefects = [
  { supplier: "Supplier 5", rate: 2.66 },
  { supplier: "Supplier 3", rate: 2.46 },
  { supplier: "Supplier 2", rate: 2.36 },
  { supplier: "Supplier 4", rate: 2.33 },
  { supplier: "Supplier 1", rate: 1.80 },
];

const logisticsCost = [
  { mode: "Air",  cost: 6010, color: "var(--neon-purple)" },
  { mode: "Road", cost: 5540, color: "var(--neon-blue)" },
  { mode: "Rail", cost: 5460, color: "var(--neon-cyan)" },
  { mode: "Sea",  cost: 4970, color: "var(--neon-pink)" },
];

const lowStock = [
  { sku: "SKU14", stock: 4,  order: 250, critical: true },
  { sku: "SKU52", stock: 9,  order: 180, critical: true },
  { sku: "SKU07", stock: 12, order: 220, critical: false },
  { sku: "SKU83", stock: 6,  order: 300, critical: true },
  { sku: "SKU41", stock: 18, order: 150, critical: false },
];

const featureImportance = [
  { name: "Price", value: 29 },
  { name: "Mfg Lead Time", value: 19 },
  { name: "Mfg Cost", value: 16 },
  { name: "Shipping Time", value: 11 },
  { name: "Transport Mode", value: 6 },
  { name: "Route", value: 5 },
  { name: "Shipping Carrier", value: 3 },
];

const revenueTrend = Array.from({ length: 24 }, (_, i) => ({
  t: i,
  v: 6 + Math.sin(i / 3) * 1.6 + i * 0.18 + Math.random() * 0.4,
}));

const systemStatus = [
  { name: "PostgreSQL Database", status: "Online", icon: Database },
  { name: "Kafka Streaming", status: "Online", icon: Radio },
  { name: "ML Prediction Engine", status: "Active", icon: Brain },
  { name: "Anomaly Detection Service", status: "Running", icon: ShieldAlert },
  { name: "Docker Containers", status: "Healthy", icon: Box },
  { name: "Prediction API Gateway", status: "Active", icon: Server },
];

const logSeed = [
  "Shipment SKU10 received at Hyderabad hub",
  "Inventory updated at Bangalore warehouse → +320",
  "Supplier update received from Pune facility (defect 2.46%)",
  "Route optimization completed for Chennai dispatch (saved 4.2%)",
  "Shipment anomaly detected in Mumbai logistics lane",
  "Delhivery carrier handoff confirmed for SKU94",
  "Kafka partition rebalanced (consumer-group bharat-1)",
  "Predictive ETA refreshed for 1,284 shipments across Tier-1 metros",
  "Cold-chain breach flagged at Kolkata distribution centre",
];

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-strong rounded-lg px-3 py-2 text-xs">
      {label !== undefined && <div className="font-semibold mb-1">{label}</div>}
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: p.color || p.fill }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-mono">{typeof p.value === "number" ? p.value.toLocaleString(undefined, { maximumFractionDigits: 2 }) : p.value}</span>
        </div>
      ))}
    </div>
  );
}

function useLogStream() {
  const [logs, setLogs] = useState<{ time: string; msg: string; id: number }[]>([]);
  const idRef = useRef(0);
  useEffect(() => {
    const seed = logSeed.slice(0, 5).map((msg) => ({
      time: new Date(Date.now() - Math.random() * 60000).toLocaleTimeString("en-GB"),
      msg, id: idRef.current++,
    }));
    setLogs(seed);
    const i = setInterval(() => {
      setLogs((prev) => {
        const next = [{
          time: new Date().toLocaleTimeString("en-GB"),
          msg: logSeed[Math.floor(Math.random() * logSeed.length)],
          id: idRef.current++,
        }, ...prev].slice(0, 9);
        return next;
      });
    }, 2200);
    return () => clearInterval(i);
  }, []);
  return logs;
}

import { KpiCard } from "./KpiCard";

export function DashboardContent() {
  const logs = useLogStream();

  return (
    <div className="relative">
      {/* Floating background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-[var(--neon-purple)]/10 blur-3xl float-slow" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[var(--neon-blue)]/10 blur-3xl float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[var(--neon-cyan)]/10 blur-3xl float-slow" style={{ animationDelay: "4s" }} />
      </div>

      <div className="px-4 md:px-8 py-6 space-y-6">
        {/* Hero strip */}
        <div className="glass-strong rounded-2xl p-5 md:p-6 overflow-hidden relative">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_0%,var(--neon-purple),transparent_45%),radial-gradient(circle_at_90%_100%,var(--neon-cyan),transparent_45%)]" />
          <div className="relative grid grid-cols-[minmax(0,1fr)_auto] gap-4 items-center">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-foreground/5 border border-border text-[11px] text-[var(--neon-cyan)]">
                <Sparkles className="h-3 w-3" /> AI Insights · Updated 12s ago
              </div>
              <h2 className="mt-3 text-xl md:text-2xl font-bold leading-tight">
                Pan-India supply chain is operating at <span className="gradient-text">94% efficiency</span>.
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Predictive models forecast +3.1% revenue lift next week across Tier-1 metros. 10 anomalous shipments require review.
              </p>
            </div>
            <button className="shrink-0 hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] text-white text-sm font-semibold glow-purple hover:brightness-110 transition">
              <Brain className="h-4 w-4" /> Run Predictive Analysis
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          <KpiCard label="Total Revenue" value={12.4} decimals={1} prefix="₹" suffix=" Cr" trend={12.4} icon={DollarSign} accent="purple" />
          <KpiCard label="Managed SKUs" value={100} suffix=" SKUs" trend={5} icon={Package} accent="blue" />
          <KpiCard label="Active Suppliers" value={5} trend={2} icon={Users} accent="cyan" />
          <KpiCard label="Avg Shipping Cost" value={5540} prefix="₹" trend={-3.2} icon={Truck} accent="pink" />
          <KpiCard label="Inventory Stability Score" value={94} suffix="%" trend={4} icon={Activity} accent="green" />
          <KpiCard label="Shipment Risk Alerts" value={10} trend={3} trendLabel=" alerts" icon={AlertTriangle} accent="red" />
        </div>

        {/* Revenue trend strip */}
        <Panel
          title="Supply Chain Activity Stream"
          subtitle="Real-time streaming events processed through Kafka pipeline."
          accent="purple"
          action={<div className="flex items-center gap-2 text-xs text-muted-foreground"><TrendingUp className="h-3.5 w-3.5 text-[var(--success)]" /> +12.4% WoW</div>}
        >
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueTrend}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--neon-purple)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="var(--neon-purple)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,30,50,0.08)" />
                <XAxis dataKey="t" tick={{ fill: "rgba(20,30,50,0.55)", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(20,30,50,0.55)", fontSize: 10 }} axisLine={false} tickLine={false} width={28} />
                <Tooltip content={<ChartTooltip />} />
                <Area type="monotone" dataKey="v" stroke="var(--neon-purple)" strokeWidth={2} fill="url(#rev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        {/* Row 1: Top products + Supplier defect */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Panel title="Top Selling Products" subtitle="Highest performing SKUs across active supply network." accent="purple">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProducts} margin={{ left: -10, right: 10, top: 10 }}>
                  <defs>
                    <linearGradient id="barP" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--neon-purple)" />
                      <stop offset="100%" stopColor="var(--neon-blue)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,30,50,0.08)" vertical={false} />
                  <XAxis dataKey="sku" tick={{ fill: "rgba(20,30,50,0.6)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(20,30,50,0.6)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: "rgba(20,30,50,0.05)" }} content={<ChartTooltip />} />
                  <Bar dataKey="units" fill="url(#barP)" radius={[8, 8, 4, 4]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel title="Supplier Defect Rate Analysis" subtitle="Supplier quality performance and manufacturing defect analysis." accent="cyan">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={supplierDefects} layout="vertical" margin={{ left: 20, right: 30 }}>
                  <defs>
                    <linearGradient id="barC" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="var(--neon-cyan)" />
                      <stop offset="100%" stopColor="var(--neon-blue)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,30,50,0.08)" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "rgba(20,30,50,0.6)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="supplier" tick={{ fill: "rgba(20,30,50,0.75)", fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip cursor={{ fill: "rgba(20,30,50,0.05)" }} content={<ChartTooltip />} />
                  <Bar dataKey="rate" fill="url(#barC)" radius={[4, 8, 8, 4]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>

        {/* Row 2: Donut + Low stock */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Panel title="Logistics Cost Analysis" subtitle="Transportation cost distribution across shipping modes." accent="pink">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
              <div className="h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip content={<ChartTooltip />} />
                    <Pie
                      data={logisticsCost} dataKey="cost" nameKey="mode"
                      innerRadius={68} outerRadius={100} paddingAngle={3} stroke="none"
                    >
                      {logisticsCost.map((d, i) => <Cell key={i} fill={d.color} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {logisticsCost.map((d) => (
                  <div key={d.mode} className="flex items-center gap-3 min-w-[180px]">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.color, boxShadow: `0 0 12px ${d.color}` }} />
                    <span className="text-sm flex-1">{d.mode}</span>
                    <span className="font-mono text-sm">${d.cost.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          <Panel
            title="Inventory Risk Monitoring"
            subtitle="AI detected critical stock shortage patterns."
            accent="red"
            action={<span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-[var(--danger)]/15 text-[var(--danger)] font-semibold">Low Stock Alert</span>}
          >
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-foreground/5 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="text-left px-4 py-2.5">SKU</th>
                    <th className="text-left px-4 py-2.5">Stock</th>
                    <th className="text-left px-4 py-2.5">Reorder Qty</th>
                    <th className="text-left px-4 py-2.5">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {lowStock.map((r) => (
                    <tr key={r.sku} className={r.critical ? "bg-[var(--danger)]/8" : ""}>
                      <td className="px-4 py-2.5 font-mono">{r.sku}</td>
                      <td className={"px-4 py-2.5 font-mono " + (r.critical ? "text-[var(--danger)] font-semibold" : "")}>{r.stock}</td>
                      <td className="px-4 py-2.5 font-mono text-muted-foreground">{r.order}</td>
                      <td className="px-4 py-2.5">
                        {r.critical ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--danger)]/15 text-[var(--danger)]">
                            <AlertTriangle className="h-3 w-3" /> Critical
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--warning)]/15 text-[var(--warning)]">
                            Watch
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

        {/* AI Prediction + Anomaly */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Panel
            title="Predictive Logistics Optimization Engine"
            subtitle="Random Forest Regression Model · trained on 2.4M rows"
            accent="purple"
            className="xl:col-span-2"
            action={
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[var(--success)]/12 text-[var(--success)] text-[11px] font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)] animate-pulse" />
                  Inference Pipeline Active
                </span>
                <span className="px-2 py-1 rounded-md bg-foreground/5 text-[11px] font-mono">MAE 2.231</span>
                <span className="px-2 py-1 rounded-md bg-foreground/5 text-[11px] font-mono">R² −0.050</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-5">
              <div className="space-y-3">
                <div className="glass rounded-xl p-4 w-full md:w-[220px]">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                    <Brain className="h-3.5 w-3.5 text-[var(--neon-purple)]" /> Model
                  </div>
                  <div className="mt-2 text-base font-semibold">Random Forest Regression</div>
                  <div className="text-xs text-muted-foreground">200 estimators · depth 12</div>
                </div>
                <div className="glass rounded-xl p-4 w-full md:w-[220px]">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Latency</div>
                  <div className="mt-2 text-base font-semibold gradient-text">14 ms p95</div>
                </div>
                <div className="glass rounded-xl p-4 w-full md:w-[220px]">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Last Retrain</div>
                  <div className="mt-2 text-base font-semibold">3 hours ago</div>
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">Feature Importance</div>
                <div className="space-y-2.5">
                  {featureImportance.map((f) => (
                    <div key={f.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{f.name}</span><span className="font-mono text-muted-foreground">{f.value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-foreground/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[var(--neon-purple)] via-[var(--neon-blue)] to-[var(--neon-cyan)]"
                          style={{ width: `${(f.value / 29) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Panel>

          <Panel
            title="Shipment Anomaly Detection"
            subtitle="Isolation Forest · contamination 0.05"
            accent="red"
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,var(--danger),transparent_60%)] opacity-10" />
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-2xl bg-[var(--danger)]/20 grid place-items-center alert-pulse">
                <ShieldAlert className="h-7 w-7 text-[var(--danger)]" />
              </div>
              <div>
                <div className="text-3xl font-bold">10</div>
                <div className="text-xs text-muted-foreground">Critical Logistics Deviations Detected · last 24h</div>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                "Abnormal shipping cost spike detected",
                "Route deviation anomaly identified",
                "Carrier performance irregularity detected",
                "Manual review required for flagged shipments",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--danger)] shrink-0" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <button className="mt-5 w-full px-4 py-2.5 rounded-xl bg-[var(--danger)]/15 hover:bg-[var(--danger)]/25 border border-[var(--danger)]/30 text-[var(--danger)] text-sm font-semibold transition">
              Review Anomalies
            </button>
          </Panel>
        </div>

        {/* Realtime + System status */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Panel
            title="Live Event Streaming Pipeline"
            subtitle="Real-time logistics events processed by Kafka streaming engine."
            accent="cyan"
            className="xl:col-span-2"
            action={
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--success)]/15 text-[var(--success)] text-[11px] font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" />
                </span>
                Kafka Stream Active
              </div>
            }
          >
            <div className="rounded-xl border border-border bg-black/30 font-mono text-xs overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-[var(--danger)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--warning)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
                <span className="ml-2">supplysense@stream:~$ tail -f shipments.log</span>
              </div>
              <div className="p-4 space-y-1.5 max-h-[280px] overflow-y-auto">
                {logs.map((l) => (
                  <div key={l.id} className="log-enter flex gap-3">
                    <span className="text-[var(--neon-cyan)] shrink-0">[{l.time}]</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-foreground/90">{l.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          <Panel title="System Health" subtitle="Infrastructure status · 30s polling" accent="cyan">
            <ul className="space-y-2.5">
              {systemStatus.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.name} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-foreground/5 transition">
                    <div className="h-9 w-9 rounded-lg bg-foreground/5 grid place-items-center">
                      <Icon className="h-4 w-4 text-[var(--neon-cyan)]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium truncate">{s.name}</div>
                      <div className="text-[11px] text-muted-foreground">{s.status}</div>
                    </div>
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-60 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--success)]" />
                    </span>
                  </li>
                );
              })}
            </ul>
          </Panel>
        </div>

        {/* Reports */}
        <Panel title="Executive Intelligence Reports" subtitle="Generate board-ready intelligence reports and strategic exports." accent="purple">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Export CSV", icon: FileSpreadsheet, variant: "ghost" },
              { label: "Export PDF", icon: FileText, variant: "ghost" },
              { label: "Generate Operational Summary", icon: Download, variant: "primary" },
              { label: "Generate Strategic Report", icon: Sparkles, variant: "accent" },
            ].map((b) => {
              const I = b.icon;
              const base = "group flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition";
              const styles =
                b.variant === "primary"
                  ? "bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] text-white glow-purple hover:brightness-110"
                  : b.variant === "accent"
                    ? "bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] text-white glow-cyan hover:brightness-110"
                    : "glass hover:bg-foreground/10 text-foreground";
              return (
                <button key={b.label} className={base + " " + styles}>
                  <I className="h-4 w-4" /> {b.label}
                </button>
              );
            })}
          </div>
        </Panel>

        <footer className="pt-4 pb-8 text-center">
          <div className="text-[11px] text-muted-foreground/70 tracking-wide">
            Built with Python · PostgreSQL · Kafka · Machine Learning · Docker · FastAPI
          </div>
          <div className="mt-1 text-[10px] text-muted-foreground/50 font-mono">
            SupplySense AI · v2.4.1 · © 2026 Enterprise Intelligence Platform
          </div>
        </footer>
      </div>
    </div>
  );
}
