import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReferansCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Aciklama" multiline source="aciklama" />
        <TextInput label="Ad" source="ad" />
        <TextInput label="Firma" source="firma" />
        <TextInput label="Pozisyon" source="pozisyon" />
      </SimpleForm>
    </Create>
  );
};
