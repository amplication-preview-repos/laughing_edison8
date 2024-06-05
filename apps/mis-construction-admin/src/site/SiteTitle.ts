import { Site as TSite } from "../api/site/Site";

export const SITE_TITLE_FIELD = "id";

export const SiteTitle = (record: TSite): string => {
  return record.id?.toString() || String(record.id);
};
