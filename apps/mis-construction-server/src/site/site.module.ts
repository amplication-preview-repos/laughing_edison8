import { Module } from "@nestjs/common";
import { SiteModuleBase } from "./base/site.module.base";
import { SiteService } from "./site.service";
import { SiteController } from "./site.controller";
import { SiteResolver } from "./site.resolver";

@Module({
  imports: [SiteModuleBase],
  controllers: [SiteController],
  providers: [SiteService, SiteResolver],
  exports: [SiteService],
})
export class SiteModule {}
