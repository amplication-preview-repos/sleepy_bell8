/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Chapter } from "./Chapter";
import { ChapterCountArgs } from "./ChapterCountArgs";
import { ChapterFindManyArgs } from "./ChapterFindManyArgs";
import { ChapterFindUniqueArgs } from "./ChapterFindUniqueArgs";
import { CreateChapterArgs } from "./CreateChapterArgs";
import { UpdateChapterArgs } from "./UpdateChapterArgs";
import { DeleteChapterArgs } from "./DeleteChapterArgs";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { Story } from "../../story/base/Story";
import { ChapterService } from "../chapter.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Chapter)
export class ChapterResolverBase {
  constructor(
    protected readonly service: ChapterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Chapter",
    action: "read",
    possession: "any",
  })
  async _chaptersMeta(
    @graphql.Args() args: ChapterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Chapter])
  @nestAccessControl.UseRoles({
    resource: "Chapter",
    action: "read",
    possession: "any",
  })
  async chapters(
    @graphql.Args() args: ChapterFindManyArgs
  ): Promise<Chapter[]> {
    return this.service.chapters(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Chapter, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Chapter",
    action: "read",
    possession: "own",
  })
  async chapter(
    @graphql.Args() args: ChapterFindUniqueArgs
  ): Promise<Chapter | null> {
    const result = await this.service.chapter(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Chapter)
  @nestAccessControl.UseRoles({
    resource: "Chapter",
    action: "create",
    possession: "any",
  })
  async createChapter(
    @graphql.Args() args: CreateChapterArgs
  ): Promise<Chapter> {
    return await this.service.createChapter({
      ...args,
      data: {
        ...args.data,

        story: args.data.story
          ? {
              connect: args.data.story,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Chapter)
  @nestAccessControl.UseRoles({
    resource: "Chapter",
    action: "update",
    possession: "any",
  })
  async updateChapter(
    @graphql.Args() args: UpdateChapterArgs
  ): Promise<Chapter | null> {
    try {
      return await this.service.updateChapter({
        ...args,
        data: {
          ...args.data,

          story: args.data.story
            ? {
                connect: args.data.story,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Chapter)
  @nestAccessControl.UseRoles({
    resource: "Chapter",
    action: "delete",
    possession: "any",
  })
  async deleteChapter(
    @graphql.Args() args: DeleteChapterArgs
  ): Promise<Chapter | null> {
    try {
      return await this.service.deleteChapter(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Comment], { name: "comments" })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async findComments(
    @graphql.Parent() parent: Chapter,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findComments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Story, {
    nullable: true,
    name: "story",
  })
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "read",
    possession: "any",
  })
  async getStory(@graphql.Parent() parent: Chapter): Promise<Story | null> {
    const result = await this.service.getStory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
