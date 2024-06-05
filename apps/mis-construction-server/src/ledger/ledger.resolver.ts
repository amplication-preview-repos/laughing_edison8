import * as graphql from "@nestjs/graphql";
import { LedgerResolverBase } from "./base/ledger.resolver.base";
import { Ledger } from "./base/Ledger";
import { LedgerService } from "./ledger.service";

@graphql.Resolver(() => Ledger)
export class LedgerResolver extends LedgerResolverBase {
  constructor(protected readonly service: LedgerService) {
    super(service);
  }
}
