import { extendType, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("cid");
    t.string("full_name");
    t.int("ratingId");
    t.string("rating");
    t.string("region");
    t.string("email");
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("me", {
      type: "User",
      resolve: (parent, args, ctx) => {
        if (ctx.session) {
          return ctx.session.user;
        }
        return null;
      },
    });
  },
});
