import { Module } from "@nestjs/common";
import { KullaniciModuleBase } from "./base/kullanici.module.base";
import { KullaniciService } from "./kullanici.service";
import { KullaniciController } from "./kullanici.controller";
import { KullaniciResolver } from "./kullanici.resolver";

@Module({
  imports: [KullaniciModuleBase],
  controllers: [KullaniciController],
  providers: [KullaniciService, KullaniciResolver],
  exports: [KullaniciService],
})
export class KullaniciModule {}
