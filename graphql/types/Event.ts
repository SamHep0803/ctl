import { arg, extendType, intArg, nonNull, objectType } from "nexus";

export const Event = objectType({
  name: "Event",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("description");
    t.string("createdAt");
    t.string("updatedAt");
  },
});

export const EventQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("events", {
      type: "Event",
      //@ts-ignore
      resolve: (root, args, ctx) => {
        return ctx.prisma.event.findMany();
      },
    });
    t.field("event", {
      type: "Event",
      args: {
        id: nonNull(intArg()),
      },
      //@ts-ignore
      resolve: (root, args, ctx) => {
        return ctx.prisma.event.findUnique({
          where: {
            id: args.id!,
          },
        });
      },
    });
  },
});
