import Link from "next/link";
import { CalendarDays, ExternalLink, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { UpdatePaperStatus } from "../review/update-status";
import { formatPaperStatus, getStatusColor } from "./actions";

interface PaperCardProps {
  paper: {
    id: string;
    title: string;
    abstract: string;
    status: string;
    createdAt: Date;
    author: {
      name: string;
      email: string;
    };
  };
}

export function PaperCard({ paper }: PaperCardProps) {
  return (
    <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="line-clamp-2 text-xl font-semibold">
              {paper.title}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="size-4" />
                {paper.author.name}
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays className="size-4" />
                {paper.createdAt.toLocaleDateString()}
              </div>
            </div>
          </div>

          <Badge variant="outline" className={getStatusColor(paper.status)}>
            {formatPaperStatus(paper.status)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-5 text-sm leading-7 text-muted-foreground">
          {paper.abstract}
        </p>

        <div className="mt-6 rounded-xl border bg-muted/40 p-4">
          <p className="font-medium">{paper.author.name}</p>

          <p className="mt-1 text-sm text-muted-foreground">
            {paper.author.email}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <UpdatePaperStatus id={paper.id} status={paper.status} />

        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href={`/papers/${paper.id}`} />}
        >
          View Details
          <ExternalLink className="ml-2 size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
