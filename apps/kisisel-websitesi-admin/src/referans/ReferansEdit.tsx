import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ReferansEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Aciklama" multiline source="aciklama" />
        <TextInput label="Ad" source="ad" />
        <TextInput label="Firma" source="firma" />
        <TextInput label="Pozisyon" source="pozisyon" />
      </SimpleForm>
    </Edit>
  );
};
