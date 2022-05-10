import {
  Arg,
  Ctx,
  Field,
  Int,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Context } from "../context";

@ObjectType()
export class Event {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;
}

@Resolver()
export class EventResolver {
  @Query(() => [Event])
  async events(@Ctx() { prisma }: Context): Promise<Event[]> {
    return await prisma.event.findMany();
  }

  @Query(() => Event, { nullable: true })
  async event(
    @Ctx() { prisma }: Context,
    @Arg("id", () => Int) id: number
  ): Promise<Event | null> {
    console.log(id);
    return await prisma.event.findFirst({ where: { id } });
  }
}
