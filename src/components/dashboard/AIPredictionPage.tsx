import { useEffect, useState } from "react";
import { Brain } from "lucide-react";
import { Panel } from "./Panel";

export function AIPredictionPage() {
  const [forecast, setForecast] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://supply-chain-intelligence-system.onrender.com/revenue-forecast")
      .then((res) => res.json())
      .then((data) => {
        setForecast(data);
      });
  }, []);

  return (
    <div className="px-4 md:px-8 py-8">

      <Panel
        title="AI Prediction Engine"
        subtitle="7-Day Revenue Forecast using Machine Learning"
        accent="purple"
      >
        <div className="overflow-hidden rounded-xl border border-border">

          <table className="w-full text-sm">

            <thead className="bg-foreground/5">
              <tr>
                <th className="text-left px-4 py-3">Forecast Day</th>
                <th className="text-left px-4 py-3">Predicted Revenue</th>
                <th className="text-left px-4 py-3">Model</th>
              </tr>
            </thead>

            <tbody>
              {forecast.map((r: any) => (
                <tr key={r.day}>

                  <td className="px-4 py-3">
                    {r.day}
                  </td>

                  <td className="px-4 py-3">
                    ₹ {r.prediction}
                  </td>

                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--neon-purple)]/15 text-[var(--neon-purple)]">
                      <Brain className="h-3 w-3" />
                      Linear Regression
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