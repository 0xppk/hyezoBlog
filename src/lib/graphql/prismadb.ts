import { PrismaClient } from "@prisma/client";

declare global {
  //eslint-disable-next-line
  var prisma: PrismaClient;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

// const pubsub =

export default client;
