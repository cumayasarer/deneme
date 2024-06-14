import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProjeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Aciklama" multiline source="aciklama" />
        <DateTimeInput label="BaslangicTarihi" source="baslangicTarihi" />
        <TextInput label="Baslik" source="baslik" />
        <DateTimeInput label="BitisTarihi" source="bitisTarihi" />
      </SimpleForm>
    </Create>
  );
};
