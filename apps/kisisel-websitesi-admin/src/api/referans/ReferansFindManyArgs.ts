import { ReferansWhereInput } from "./ReferansWhereInput";
import { ReferansOrderByInput } from "./ReferansOrderByInput";

export type ReferansFindManyArgs = {
  where?: ReferansWhereInput;
  orderBy?: Array<ReferansOrderByInput>;
  skip?: number;
  take?: number;
};
