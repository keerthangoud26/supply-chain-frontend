import { Panel } from "./Panel";

export function SettingsPage() {
  return (
    <div className="px-4 md:px-8 py-8 space-y-6">

      <Panel
        title="Application Settings"
        subtitle="Configure platform preferences"
        accent="cyan"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="p-5 rounded-xl border border-border">
            <div className="text-sm text-muted-foreground">
              AI Forecasting Engine
            </div>

            <div className="mt-3">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-semibold">
                Enabled
              </span>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border">
            <div className="text-sm text-muted-foreground">
              Real-Time Alerts
            </div>

            <div className="mt-3">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-semibold">
                Enabled
              </span>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border">
            <div className="text-sm text-muted-foreground">
              Currency Format
            </div>

            <div className="mt-3 font-semibold">
              INR (₹)
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border">
            <div className="text-sm text-muted-foreground">
              Theme
            </div>

            <div className="mt-3 font-semibold">
              Light Mode
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border">
            <div className="text-sm text-muted-foreground">
              Auto Refresh Interval
            </div>

            <div className="mt-3 font-semibold">
              30 Seconds
            </div>
          </div>

          <div className="p-5 rounded-xl border border-border">
            <div className="text-sm text-muted-foreground">
              System Version
            </div>

            <div className="mt-3 font-semibold">
              SupplySense AI v1.0 Enterprise
            </div>
          </div>

        </div>

      </Panel>

    </div>
  );
}