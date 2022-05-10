import { Ctx, Field, ObjectType, Query, Resolver } from "type-graphql";
import { Context } from "../context";

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  cid: string;

  @Field()
  full_name: string;

  @Field()
  ratingId: number;

  @Field()
  rating: string;

  @Field()
  region: string;

  @Field()
  email: string;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { session }: Context): Promise<User | null> {
    if (!session) {
      return null;
    }
    return session.user;
  }
}
