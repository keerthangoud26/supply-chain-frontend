import { useEffect, useState } from "react";
import { Radio } from "lucide-react";
import { Panel } from "./Panel";

export function RealtimePage() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://supply-chain-intelligence-system.onrender.com/activity-logs")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item: any, index: number) => ({
          id: index,
          message: item.message
        }));

        setLogs(formatted);
      });
  }, []);

  return (
    <div className="px-4 md:px-8 py-8">

      <Panel
        title="Real-Time Monitoring"
        subtitle="Live operational activity stream"
        accent="cyan"
      >
        <div className="space-y-3">

          {logs.map((log: any) => (
            <div
              key={log.id}
              className="flex items-center gap-3 p-3 rounded-xl border border-border"
            >
              <Radio className="h-4 w-4 text-[var(--neon-cyan)]" />

              <span className="text-sm text-muted-foreground">
                {log.message}
              </span>
            </div>
          ))}

        </div>
      </Panel>

    </div>
  );
}