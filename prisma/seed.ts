import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import {
  PrismaClient,
  Role,
  PaperStatus,
} from "../lib/generated/prisma/client";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");

  const admin = await prisma.user.upsert({
    where: { email: "admin@conference.com" },
    update: {},
    create: {
      email: "admin@conference.com",
      name: "Conference Admin",
      password: "admin123",
      role: Role.ADMIN,
    },
  });

  const reviewer = await prisma.user.upsert({
    where: { email: "reviewer@conference.com" },
    update: {},
    create: {
      email: "reviewer@conference.com",
      name: "John Reviewer",
      password: "review123",
      role: Role.REVIEWER,
    },
  });

  const participant = await prisma.user.upsert({
    where: { email: "participant@conference.com" },
    update: {},
    create: {
      email: "participant@conference.com",
      name: "Alice Participant",
      password: "participant123",
      role: Role.PARTICIPANT,
    },
  });

  let event = await prisma.conferenceEvent.findFirst({
    where: { title: "International AI Conference 2026" },
  });

  if (!event) {
    event = await prisma.conferenceEvent.create({
      data: {
        title: "International AI Conference 2026",
        theme: "Artificial Intelligence for Sustainable Future",
        dateStart: new Date("2026-10-15"),
        dateEnd: new Date("2026-10-17"),
        deadline: new Date("2026-08-31"),
      },
    });
  }

  const existingPaperCount = await prisma.paper.count();
  if (existingPaperCount === 0) {
    await prisma.paper.createMany({
      data: [
        {
          title: "Deep Learning for Medical Imaging",
          abstract: "Deep learning approaches for medical image classification.",
          fileUrl: "/papers/deep-learning.pdf",
          status: PaperStatus.UNDER_REVIEW,
          authorId: participant.id,
          reviewerId: reviewer.id,
          eventId: event.id,
        },
        {
          title: "Computer Vision for Smart Cities",
          abstract: "Object detection and monitoring using computer vision.",
          fileUrl: "/papers/computer-vision.pdf",
          status: PaperStatus.PENDING,
          authorId: participant.id,
          eventId: event.id,
        },
        {
          title: "Natural Language Processing in Education",
          abstract: "Using NLP for personalized learning systems.",
          fileUrl: "/papers/nlp.pdf",
          status: PaperStatus.ACCEPTED,
          authorId: participant.id,
          reviewerId: reviewer.id,
          eventId: event.id,
        },
      ],
    });
  }

  const existingAttendeeCount = await prisma.attendee.count();
  if (existingAttendeeCount === 0) {
    await prisma.attendee.createMany({
      data: [
        {
          fullName: "Michael Johnson",
          email: "michael@example.com",
          affiliation: "Stanford University",
          ticketType: "Regular",
        },
        {
          fullName: "Sarah Williams",
          email: "sarah@example.com",
          affiliation: "MIT",
          ticketType: "VIP",
        },
        {
          fullName: "David Lee",
          email: "david@example.com",
          affiliation: "Google Research",
          ticketType: "Student",
        },
      ],
    });
  }

  console.log("✅ Seed completed!");
  console.log({ admin: admin.email, reviewer: reviewer.email, participant: participant.email });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);

    await prisma.$disconnect();

    process.exit(1);
  });
