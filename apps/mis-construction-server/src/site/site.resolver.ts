import * as graphql from "@nestjs/graphql";
import { SiteResolverBase } from "./base/site.resolver.base";
import { Site } from "./base/Site";
import { SiteService } from "./site.service";

@graphql.Resolver(() => Site)
export class SiteResolver extends SiteResolverBase {
  constructor(protected readonly service: SiteService) {
    super(service);
  }
}
