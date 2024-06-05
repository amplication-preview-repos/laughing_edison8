import { Material as TMaterial } from "../api/material/Material";

export const MATERIAL_TITLE_FIELD = "id";

export const MaterialTitle = (record: TMaterial): string => {
  return record.id?.toString() || String(record.id);
};
