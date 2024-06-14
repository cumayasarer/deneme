import * as graphql from "@nestjs/graphql";
import { KullaniciResolverBase } from "./base/kullanici.resolver.base";
import { Kullanici } from "./base/Kullanici";
import { KullaniciService } from "./kullanici.service";

@graphql.Resolver(() => Kullanici)
export class KullaniciResolver extends KullaniciResolverBase {
  constructor(protected readonly service: KullaniciService) {
    super(service);
  }
}
