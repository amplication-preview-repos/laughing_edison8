import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LedgerService } from "./ledger.service";
import { LedgerControllerBase } from "./base/ledger.controller.base";

@swagger.ApiTags("ledgers")
@common.Controller("ledgers")
export class LedgerController extends LedgerControllerBase {
  constructor(protected readonly service: LedgerService) {
    super(service);
  }
}
