import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const KullaniciShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Ad" source="ad" />
        <TextField label="Biyografi" source="biyografi" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="E-posta" source="ePosta" />
        <TextField label="ID" source="id" />
        <TextField label="Soyad" source="soyad" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
