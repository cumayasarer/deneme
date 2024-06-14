import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { YetenekServiceBase } from "./base/yetenek.service.base";

@Injectable()
export class YetenekService extends YetenekServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
