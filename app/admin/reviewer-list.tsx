import { Mail, ShieldCheck } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Reviewer {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface ReviewerListProps {
  reviewers: Reviewer[];
}

export function ReviewerList({ reviewers }: ReviewerListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reviewers</CardTitle>

        <CardDescription>Assigned reviewer accounts</CardDescription>
      </CardHeader>

      <CardContent>
        {reviewers.length === 0 ? (
          <div className="rounded-xl border border-dashed p-8 text-center">
            <ShieldCheck className="mx-auto mb-3 size-8 text-muted-foreground" />

            <p className="font-medium">No reviewers found</p>

            <p className="mt-1 text-sm text-muted-foreground">
              Reviewer accounts will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviewers.map((reviewer) => (
              <div
                key={reviewer.id}
                className="flex items-center gap-4 rounded-xl border p-4 transition-colors hover:bg-muted/40"
              >
                <Avatar className="size-11">
                  <AvatarFallback>
                    {reviewer.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{reviewer.name}</p>

                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="size-4" />

                    <span className="truncate">{reviewer.email}</span>
                  </div>
                </div>

                <Badge variant="secondary">{reviewer.role}</Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
