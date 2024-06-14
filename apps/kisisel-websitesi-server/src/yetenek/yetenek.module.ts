import { Module } from "@nestjs/common";
import { YetenekModuleBase } from "./base/yetenek.module.base";
import { YetenekService } from "./yetenek.service";
import { YetenekController } from "./yetenek.controller";
import { YetenekResolver } from "./yetenek.resolver";

@Module({
  imports: [YetenekModuleBase],
  controllers: [YetenekController],
  providers: [YetenekService, YetenekResolver],
  exports: [YetenekService],
})
export class YetenekModule {}
