import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const YetenekCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Ad" source="ad" />
        <TextInput label="UzmanlikDuzeyi" source="uzmanlikDuzeyi" />
      </SimpleForm>
    </Create>
  );
};
