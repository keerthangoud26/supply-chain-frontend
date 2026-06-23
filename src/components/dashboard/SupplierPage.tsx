import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Panel } from "./Panel";

export function SupplierPage() {
  const [suppliers, setSuppliers] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://supply-chain-intelligence-system.onrender.com/supplier-defects")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item: any) => ({
          name: item.supplier_name,
          rate: item.defect_rate,
          critical: item.defect_rate > 4
        }));

        setSuppliers(formatted);
      });
  }, []);

  return (
    <div className="px-4 md:px-8 py-8">

      <Panel
        title="Supplier Intelligence"
        subtitle="Live supplier quality monitoring"
        accent="cyan"
      >
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">

            <thead className="bg-foreground/5">
              <tr>
                <th className="text-left px-4 py-3">Supplier</th>
                <th className="text-left px-4 py-3">Defect Rate</th>
                <th className="text-left px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {suppliers.map((r) => (
                <tr key={r.name}>
                  <td className="px-4 py-3">{r.name}</td>

                  <td className="px-4 py-3">
                    {r.rate.toFixed(2)}%
                  </td>

                  <td className="px-4 py-3">
                    {r.critical ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--danger)]/15 text-[var(--danger)]">
                        <AlertTriangle className="h-3 w-3" /> High Risk
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--success)]/15 text-[var(--success)]">
                        Stable
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
  );
}