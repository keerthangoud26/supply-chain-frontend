import { useEffect, useState } from "react";
import { FileText, TrendingUp, AlertTriangle } from "lucide-react";
import { Panel } from "./Panel";

export function ReportsPage() {
  const [revenue, setRevenue] = useState(0);
  const [products, setProducts] = useState(0);
  const [anomalies, setAnomalies] = useState(0);
  const [forecast, setForecast] = useState(0);

  useEffect(() => {
    fetch("https://supply-chain-intelligence-system.onrender.com/revenue")
      .then((res) => res.json())
      .then((data) => setRevenue(data.revenue));

    fetch("https://supply-chain-intelligence-system.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));

    fetch("https://supply-chain-intelligence-system.onrender.com/anomalies")
      .then((res) => res.json())
      .then((data) => setAnomalies(data.length));

    fetch("https://supply-chain-intelligence-system.onrender.com/revenue-forecast")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setForecast(data[0].prediction);
        }
      });
  }, []);

  return (
    <div className="px-4 md:px-8 py-8 space-y-6">

      <Panel
        title="Executive Reports & Insights"
        subtitle="Enterprise business analytics summary"
        accent="purple"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="p-5 rounded-xl border border-border">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Total Revenue</span>
            </div>
            <div className="mt-3 text-2xl font-bold">
              ₹ {revenue.toFixed(2)}
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>Products Managed</span>
            </div>
            <div className="mt-3 text-2xl font-bold">
              {products}
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Active Anomalies</span>
            </div>
            <div className="mt-3 text-2xl font-bold">
              {anomalies}
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>Tomorrow Forecast</span>
            </div>
            <div className="mt-3 text-2xl font-bold">
              ₹ {forecast}
            </div>
          </div>

        </div>

      </Panel>

    </div>
  );
}