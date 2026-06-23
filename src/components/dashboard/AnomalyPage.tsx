import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Panel } from "./Panel";

export function AnomalyPage() {
  const [anomalies, setAnomalies] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://supply-chain-intelligence-system.onrender.com/anomalies")
      .then((res) => res.json())
      .then((data) => {
        setAnomalies(data);
      });
  }, []);

  return (
    <div className="px-4 md:px-8 py-8">

      <Panel
        title="Anomaly Detection Engine"
        subtitle="AI-powered supply chain anomaly monitoring"
        accent="red"
      >
        <div className="overflow-hidden rounded-xl border border-border">

          <table className="w-full text-sm">

            <thead className="bg-foreground/5">
              <tr>
                <th className="text-left px-4 py-3">Type</th>
                <th className="text-left px-4 py-3">Alert Message</th>
                <th className="text-left px-4 py-3">Severity</th>
              </tr>
            </thead>

            <tbody>
              {anomalies.map((r: any, i) => (
                <tr key={i}>

                  <td className="px-4 py-3">
                    {r.type}
                  </td>

                  <td className="px-4 py-3">
                    {r.message}
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--danger)]/15 text-[var(--danger)]">
                      <AlertTriangle className="h-3 w-3" />
                      Critical
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