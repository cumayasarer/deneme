import * as graphql from "@nestjs/graphql";
import { YetenekResolverBase } from "./base/yetenek.resolver.base";
import { Yetenek } from "./base/Yetenek";
import { YetenekService } from "./yetenek.service";

@graphql.Resolver(() => Yetenek)
export class YetenekResolver extends YetenekResolverBase {
  constructor(protected readonly service: YetenekService) {
    super(service);
  }
}
