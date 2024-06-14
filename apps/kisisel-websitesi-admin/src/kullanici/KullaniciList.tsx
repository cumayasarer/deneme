import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const KullaniciList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Kullanicis"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Ad" source="ad" />
        <TextField label="Biyografi" source="biyografi" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="E-posta" source="ePosta" />
        <TextField label="ID" source="id" />
        <TextField label="Soyad" source="soyad" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
