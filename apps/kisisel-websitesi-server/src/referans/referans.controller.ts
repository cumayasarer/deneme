import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReferansService } from "./referans.service";
import { ReferansControllerBase } from "./base/referans.controller.base";

@swagger.ApiTags("referans")
@common.Controller("referans")
export class ReferansController extends ReferansControllerBase {
  constructor(protected readonly service: ReferansService) {
    super(service);
  }
}
