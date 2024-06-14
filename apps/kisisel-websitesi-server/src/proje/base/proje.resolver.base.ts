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
import { Proje } from "./Proje";
import { ProjeCountArgs } from "./ProjeCountArgs";
import { ProjeFindManyArgs } from "./ProjeFindManyArgs";
import { ProjeFindUniqueArgs } from "./ProjeFindUniqueArgs";
import { CreateProjeArgs } from "./CreateProjeArgs";
import { UpdateProjeArgs } from "./UpdateProjeArgs";
import { DeleteProjeArgs } from "./DeleteProjeArgs";
import { ProjeService } from "../proje.service";
@graphql.Resolver(() => Proje)
export class ProjeResolverBase {
  constructor(protected readonly service: ProjeService) {}

  async _projesMeta(
    @graphql.Args() args: ProjeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Proje])
  async projes(@graphql.Args() args: ProjeFindManyArgs): Promise<Proje[]> {
    return this.service.projes(args);
  }

  @graphql.Query(() => Proje, { nullable: true })
  async proje(
    @graphql.Args() args: ProjeFindUniqueArgs
  ): Promise<Proje | null> {
    const result = await this.service.proje(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Proje)
  async createProje(@graphql.Args() args: CreateProjeArgs): Promise<Proje> {
    return await this.service.createProje({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Proje)
  async updateProje(
    @graphql.Args() args: UpdateProjeArgs
  ): Promise<Proje | null> {
    try {
      return await this.service.updateProje({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Proje)
  async deleteProje(
    @graphql.Args() args: DeleteProjeArgs
  ): Promise<Proje | null> {
    try {
      return await this.service.deleteProje(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
