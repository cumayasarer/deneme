import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProjeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Aciklama" source="aciklama" />
        <TextField label="BaslangicTarihi" source="baslangicTarihi" />
        <TextField label="Baslik" source="baslik" />
        <TextField label="BitisTarihi" source="bitisTarihi" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
