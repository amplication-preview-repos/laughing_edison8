import { SiteWhereInput } from "./SiteWhereInput";
import { SiteOrderByInput } from "./SiteOrderByInput";

export type SiteFindManyArgs = {
  where?: SiteWhereInput;
  orderBy?: Array<SiteOrderByInput>;
  skip?: number;
  take?: number;
};
