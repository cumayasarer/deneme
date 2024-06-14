import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { YetenekService } from "./yetenek.service";
import { YetenekControllerBase } from "./base/yetenek.controller.base";

@swagger.ApiTags("yeteneks")
@common.Controller("yeteneks")
export class YetenekController extends YetenekControllerBase {
  constructor(protected readonly service: YetenekService) {
    super(service);
  }
}
