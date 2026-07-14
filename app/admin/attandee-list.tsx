import { Building2, CalendarDays, Mail } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Attendee {
  id: string;
  fullName: string;
  email: string;
  affiliation: string;
  ticketType: string;
  createdAt: Date;
}

interface AttendeeListProps {
  attendees: Attendee[];
}

function ticketColor(ticket: string) {
  switch (ticket) {
    case "VIP":
      return "bg-amber-100 text-amber-700 border-amber-200";

    case "Student":
      return "bg-blue-100 text-blue-700 border-blue-200";

    default:
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
  }
}

export function AttendeeList({ attendees }: AttendeeListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Attendees</CardTitle>

        <CardDescription>Latest conference registrations</CardDescription>
      </CardHeader>

      <CardContent>
        {attendees.length === 0 ? (
          <div className="rounded-xl border border-dashed p-8 text-center">
            <CalendarDays className="mx-auto mb-3 size-8 text-muted-foreground" />

            <p className="font-medium">No attendees yet</p>

            <p className="mt-1 text-sm text-muted-foreground">
              Registered attendees will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {attendees.slice(0, 5).map((attendee) => (
              <div
                key={attendee.id}
                className="rounded-xl border p-4 transition hover:bg-muted/40"
              >
                <div className="flex items-start gap-4">
                  <Avatar className="size-11">
                    <AvatarFallback>
                      {attendee.fullName
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="truncate font-medium">
                          {attendee.fullName}
                        </p>

                        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="size-4" />

                          <span className="truncate">{attendee.email}</span>
                        </div>
                      </div>

                      <Badge
                        variant="outline"
                        className={ticketColor(attendee.ticketType)}
                      >
                        {attendee.ticketType}
                      </Badge>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="size-4" />

                      <span className="truncate">{attendee.affiliation}</span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarDays className="size-3.5" />
                      Registered {attendee.createdAt.toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
