import { Module } from "@nestjs/common";
import { ProjeModuleBase } from "./base/proje.module.base";
import { ProjeService } from "./proje.service";
import { ProjeController } from "./proje.controller";
import { ProjeResolver } from "./proje.resolver";

@Module({
  imports: [ProjeModuleBase],
  controllers: [ProjeController],
  providers: [ProjeService, ProjeResolver],
  exports: [ProjeService],
})
export class ProjeModule {}
