import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KullaniciServiceBase } from "./base/kullanici.service.base";

@Injectable()
export class KullaniciService extends KullaniciServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
