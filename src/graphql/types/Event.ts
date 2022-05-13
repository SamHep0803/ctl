import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
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
  short_description: string;

  @Field()
  long_description: string;

  @Field()
  small_image: string;

  @Field()
  large_image: string;

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

  @Mutation(() => Event, { nullable: true })
  async createEvent(
    @Ctx() { prisma }: Context,
    @Arg("name") name: string,
    @Arg("short_description") short_description: string,
    @Arg("long_description") long_description: string,
    @Arg("small_image") small_image: string,
    @Arg("large_image") large_image: string
  ): Promise<Event | null> {
    return await prisma.event.create({
      data: {
        name,
        short_description,
        long_description,
        small_image,
        large_image,
      },
    });
  }

  @Mutation(() => Event, { nullable: true })
  async updateEvent(
    @Ctx() { prisma }: Context,
    @Arg("id", () => Int) id: number,
    @Arg("name", { nullable: true }) name?: string,
    @Arg("short_description", { nullable: true }) short_description?: string,
    @Arg("long_description", { nullable: true }) long_description?: string,
    @Arg("small_image", { nullable: true }) small_image?: string,
    @Arg("large_image", { nullable: true }) large_image?: string
  ): Promise<Event | null> {
    if (
      !name &&
      !short_description &&
      !long_description &&
      !small_image &&
      !large_image
    ) {
      return null;
    }

    return await prisma.event.update({
      where: { id },
      data: {
        name,
        short_description,
        long_description,
        small_image,
        large_image,
      },
    });
  }

  @Mutation(() => Event, { nullable: true })
  async deleteEvent(
    @Ctx() { prisma }: Context,
    @Arg("id", () => Int) id: number
  ): Promise<Event | null> {
    const event = await prisma.event.findFirst({ where: { id } });
    if (!event) {
      return null;
    }

    return await prisma.event.delete({ where: { id } });
  }
}
