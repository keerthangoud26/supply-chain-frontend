import { useEffect, useState } from "react";
import { Panel } from "./Panel";

export function InventoryPage() {
  const [lowStock, setLowStock] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://supply-chain-intelligence-system.onrender.com/low-stock")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item: any) => ({
          sku: item.sku,
          stock: item.stock_level,
          critical: item.stock_level < 5
        }));

        setLowStock(formatted);
      });
  }, []);

  return (
    <div className="px-4 md:px-8 py-8">

      <Panel
        title="Inventory Intelligence"
        subtitle="Live warehouse stock monitoring"
        accent="purple"
      >
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">

            <thead className="bg-foreground/5">
              <tr>
                <th className="text-left px-4 py-3">SKU</th>
                <th className="text-left px-4 py-3">Stock Level</th>
                <th className="text-left px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {lowStock.map((r) => (
                <tr key={r.sku}>
                  <td className="px-4 py-3">{r.sku}</td>
                  <td className="px-4 py-3">{r.stock}</td>
                  <td className="px-4 py-3">
                    {r.critical ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1 rounded-full bg-[var(--danger)]/15 text-[var(--danger)]">
                        ⚠ Critical
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1 rounded-full bg-[var(--success)]/15 text-[var(--success)]">
                        ✓ Normal
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