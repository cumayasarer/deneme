import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const KullaniciCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Ad" source="ad" />
        <TextInput label="Biyografi" multiline source="biyografi" />
        <TextInput label="E-posta" source="ePosta" type="email" />
        <TextInput label="Soyad" source="soyad" />
      </SimpleForm>
    </Create>
  );
};
