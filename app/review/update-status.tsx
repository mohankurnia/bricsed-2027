"use client";

import { useEffect, useState, useTransition } from "react";

import { updatePaperStatus } from "./action";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function formatStatus(status: string) {
  return status
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function UpdatePaperStatus({
  id,
  status,
}: {
  id: string;
  status: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(status);

  // Sinkronkan jika status berubah dari server
  useEffect(() => {
    setValue(status);
  }, [status]);

  return (
    <Select
      value={value}
      disabled={isPending}
      onValueChange={(newValue) => {
        // @ts-ignore
        setValue(newValue);

        const form = new FormData();
        form.append("id", id);
        // @ts-ignore
        form.append("status", newValue);

        startTransition(async () => {
          await updatePaperStatus(form);
        });
      }}
    >
      <SelectTrigger className="w-48">
        <SelectValue>{formatStatus(value)}</SelectValue>
      </SelectTrigger>

      <SelectContent>
        {["PENDING", "UNDER_REVIEW", "ACCEPTED", "REJECTED"].map((item) => (
          <SelectItem key={item} value={item}>
            {formatStatus(item)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
