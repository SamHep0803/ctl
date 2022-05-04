import { Event, Prisma } from "@prisma/client";
import { arg } from "nexus";
import { Context } from "./context";

type EventArgs = {
  id: number;
};

type CreateEventArgs = {
  name: string;
  description: string;
};

type UpdateEventArgs = {
  id: number;
  name?: string;
  description?: string;
};

type DeleteEventArgs = {
  id: number;
};

export const resolvers = {
  Query: {
    events(_: any, __: any, ctx: Context) {
      return ctx.prisma.event.findMany();
    },
    event(_: any, args: EventArgs, ctx: Context) {
      return ctx.prisma.event.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createEvent(_: any, args: CreateEventArgs, ctx: Context) {
      return ctx.prisma.event
        .create({
          data: {
            name: args.name,
            description: args.description,
          },
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
    },
    updateEvent(_: any, args: UpdateEventArgs, ctx: Context) {
      if (args.name === undefined && args.description === undefined) {
        return null;
      }
      return ctx.prisma.event.update({
        where: { id: args.id },
        data: {
          name: args.name,
          description: args.description,
        },
      });
    },
    deleteEvent(_: any, args: DeleteEventArgs, ctx: Context) {
      return ctx.prisma.event
        .delete({ where: { id: args.id } })
        .catch((err) => {
          console.error(err);
          return null;
        });
    },
  },
};
