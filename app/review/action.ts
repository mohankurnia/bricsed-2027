"use server";

import type { PaperStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

export async function updatePaperStatus(formData: FormData) {
  const id = String(formData.get("id"));
  const statusValue = formData.get("status");

  if (!id || !statusValue || typeof statusValue !== "string") return;

  await prisma.paper.update({
    where: {
      id,
    },
    data: {
      status: statusValue as PaperStatus,
    },
  });

  revalidatePath("/review");
  revalidatePath("/papers");
}
