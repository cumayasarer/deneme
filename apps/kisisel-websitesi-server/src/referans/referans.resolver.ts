import * as graphql from "@nestjs/graphql";
import { ReferansResolverBase } from "./base/referans.resolver.base";
import { Referans } from "./base/Referans";
import { ReferansService } from "./referans.service";

@graphql.Resolver(() => Referans)
export class ReferansResolver extends ReferansResolverBase {
  constructor(protected readonly service: ReferansService) {
    super(service);
  }
}
