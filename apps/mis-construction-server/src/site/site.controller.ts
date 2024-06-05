import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SiteService } from "./site.service";
import { SiteControllerBase } from "./base/site.controller.base";

@swagger.ApiTags("sites")
@common.Controller("sites")
export class SiteController extends SiteControllerBase {
  constructor(protected readonly service: SiteService) {
    super(service);
  }
}
