import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProjeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Aciklama" multiline source="aciklama" />
        <DateTimeInput label="BaslangicTarihi" source="baslangicTarihi" />
        <TextInput label="Baslik" source="baslik" />
        <DateTimeInput label="BitisTarihi" source="bitisTarihi" />
      </SimpleForm>
    </Edit>
  );
};
