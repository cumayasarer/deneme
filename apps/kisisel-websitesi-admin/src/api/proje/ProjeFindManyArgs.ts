import { ProjeWhereInput } from "./ProjeWhereInput";
import { ProjeOrderByInput } from "./ProjeOrderByInput";

export type ProjeFindManyArgs = {
  where?: ProjeWhereInput;
  orderBy?: Array<ProjeOrderByInput>;
  skip?: number;
  take?: number;
};
