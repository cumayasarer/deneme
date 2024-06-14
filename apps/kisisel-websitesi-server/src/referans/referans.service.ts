import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReferansServiceBase } from "./base/referans.service.base";

@Injectable()
export class ReferansService extends ReferansServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
