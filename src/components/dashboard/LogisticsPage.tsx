import { useEffect, useState } from "react";
import { Truck } from "lucide-react";
import { Panel } from "./Panel";

export function LogisticsPage() {
  const [logistics, setLogistics] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://supply-chain-intelligence-system.onrender.com/logistics-cost")
      .then((res) => res.json())
      .then((data) => {
        setLogistics(data);
      });
  }, []);

  return (
    <div className="px-4 md:px-8 py-8">
      <Panel
        title="Logistics Analytics"
        subtitle="Transportation mode cost analysis"
        accent="pink"
      >
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">

            <thead className="bg-foreground/5">
              <tr>
                <th className="text-left px-4 py-3">Transport Mode</th>
                <th className="text-left px-4 py-3">Avg Cost (₹)</th>
                <th className="text-left px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {logistics.map((r: any) => (
                <tr key={r.transportation_mode}>
                  <td className="px-4 py-3">
                    {r.transportation_mode}
                  </td>

                  <td className="px-4 py-3">
                    ₹ {r.avg_cost.toFixed(2)}
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--neon-blue)]/15 text-[var(--neon-blue)]">
                      <Truck className="h-3 w-3" />
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </Panel>
    </div>
  );
}