import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjeServiceBase } from "./base/proje.service.base";

@Injectable()
export class ProjeService extends ProjeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
