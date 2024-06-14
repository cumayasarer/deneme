import * as graphql from "@nestjs/graphql";
import { ProjeResolverBase } from "./base/proje.resolver.base";
import { Proje } from "./base/Proje";
import { ProjeService } from "./proje.service";

@graphql.Resolver(() => Proje)
export class ProjeResolver extends ProjeResolverBase {
  constructor(protected readonly service: ProjeService) {
    super(service);
  }
}
