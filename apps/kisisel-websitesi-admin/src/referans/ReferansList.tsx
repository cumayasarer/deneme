import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReferansList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReferansItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Aciklama" source="aciklama" />
        <TextField label="Ad" source="ad" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Firma" source="firma" />
        <TextField label="ID" source="id" />
        <TextField label="Pozisyon" source="pozisyon" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
