import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SiteServiceBase } from "./base/site.service.base";

@Injectable()
export class SiteService extends SiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
