import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjeService } from "./proje.service";
import { ProjeControllerBase } from "./base/proje.controller.base";

@swagger.ApiTags("projes")
@common.Controller("projes")
export class ProjeController extends ProjeControllerBase {
  constructor(protected readonly service: ProjeService) {
    super(service);
  }
}
