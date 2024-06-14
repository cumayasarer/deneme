import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const KullaniciEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Ad" source="ad" />
        <TextInput label="Biyografi" multiline source="biyografi" />
        <TextInput label="E-posta" source="ePosta" type="email" />
        <TextInput label="Soyad" source="soyad" />
      </SimpleForm>
    </Edit>
  );
};
