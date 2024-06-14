import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KullaniciService } from "./kullanici.service";
import { KullaniciControllerBase } from "./base/kullanici.controller.base";

@swagger.ApiTags("kullanicis")
@common.Controller("kullanicis")
export class KullaniciController extends KullaniciControllerBase {
  constructor(protected readonly service: KullaniciService) {
    super(service);
  }
}
