import { KullaniciWhereInput } from "./KullaniciWhereInput";
import { KullaniciOrderByInput } from "./KullaniciOrderByInput";

export type KullaniciFindManyArgs = {
  where?: KullaniciWhereInput;
  orderBy?: Array<KullaniciOrderByInput>;
  skip?: number;
  take?: number;
};
