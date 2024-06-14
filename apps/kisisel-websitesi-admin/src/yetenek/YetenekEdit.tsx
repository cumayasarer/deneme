import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const YetenekEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Ad" source="ad" />
        <TextInput label="UzmanlikDuzeyi" source="uzmanlikDuzeyi" />
      </SimpleForm>
    </Edit>
  );
};
