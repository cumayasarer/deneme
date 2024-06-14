import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ReferansShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Aciklama" source="aciklama" />
        <TextField label="Ad" source="ad" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Firma" source="firma" />
        <TextField label="ID" source="id" />
        <TextField label="Pozisyon" source="pozisyon" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
