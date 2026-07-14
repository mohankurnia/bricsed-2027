import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SummaryCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color?: string;
  description?: string;
}

export function SummaryCard({
  title,
  value,
  icon: Icon,
  color,
  description,
}: SummaryCardProps) {
  return (
    <Card className="border-border/60 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">{value}</h2>

          {description && (
            <p className="mt-2 text-xs text-muted-foreground">{description}</p>
          )}
        </div>

        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl bg-muted",
            color,
          )}
        >
          <Icon className="size-7" />
        </div>
      </CardContent>
    </Card>
  );
}
