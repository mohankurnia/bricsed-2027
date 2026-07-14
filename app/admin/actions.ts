"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/db";

const PAPER_STATUSES = [
  "PENDING",
  "UNDER_REVIEW",
  "ACCEPTED",
  "REJECTED",
] as const;

export async function updatePaperStatus(formData: FormData) {
  const id = String(formData.get("id") ?? formData.get("paperId") ?? "").trim();

  const status = String(formData.get("status") ?? "").trim();

  if (
    !id ||
    !PAPER_STATUSES.includes(status as (typeof PAPER_STATUSES)[number])
  ) {
    return;
  }

  await prisma.paper.update({
    where: {
      id,
    },
    data: {
      status: status as (typeof PAPER_STATUSES)[number],
    },
  });

  revalidatePath("/admin");
  revalidatePath("/review");
  revalidatePath("/papers");
  revalidatePath(`/papers/${id}`);
}

export function formatPaperStatus(status: string) {
  return status
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getStatusColor(status: string) {
  switch (status) {
    case "ACCEPTED":
      return "border-emerald-200 bg-emerald-50 text-emerald-700";

    case "UNDER_REVIEW":
      return "border-blue-200 bg-blue-50 text-blue-700";

    case "REJECTED":
      return "border-rose-200 bg-rose-50 text-rose-700";

    default:
      return "border-amber-200 bg-amber-50 text-amber-700";
  }
}
