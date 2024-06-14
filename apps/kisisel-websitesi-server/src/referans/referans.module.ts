import { Module } from "@nestjs/common";
import { ReferansModuleBase } from "./base/referans.module.base";
import { ReferansService } from "./referans.service";
import { ReferansController } from "./referans.controller";
import { ReferansResolver } from "./referans.resolver";

@Module({
  imports: [ReferansModuleBase],
  controllers: [ReferansController],
  providers: [ReferansService, ReferansResolver],
  exports: [ReferansService],
})
export class ReferansModule {}
