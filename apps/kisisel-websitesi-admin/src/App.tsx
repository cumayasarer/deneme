import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { KullaniciList } from "./kullanici/KullaniciList";
import { KullaniciCreate } from "./kullanici/KullaniciCreate";
import { KullaniciEdit } from "./kullanici/KullaniciEdit";
import { KullaniciShow } from "./kullanici/KullaniciShow";
import { YetenekList } from "./yetenek/YetenekList";
import { YetenekCreate } from "./yetenek/YetenekCreate";
import { YetenekEdit } from "./yetenek/YetenekEdit";
import { YetenekShow } from "./yetenek/YetenekShow";
import { ProjeList } from "./proje/ProjeList";
import { ProjeCreate } from "./proje/ProjeCreate";
import { ProjeEdit } from "./proje/ProjeEdit";
import { ProjeShow } from "./proje/ProjeShow";
import { ReferansList } from "./referans/ReferansList";
import { ReferansCreate } from "./referans/ReferansCreate";
import { ReferansEdit } from "./referans/ReferansEdit";
import { ReferansShow } from "./referans/ReferansShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"KisiselWebsitesi"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Kullanici"
          list={KullaniciList}
          edit={KullaniciEdit}
          create={KullaniciCreate}
          show={KullaniciShow}
        />
        <Resource
          name="Yetenek"
          list={YetenekList}
          edit={YetenekEdit}
          create={YetenekCreate}
          show={YetenekShow}
        />
        <Resource
          name="Proje"
          list={ProjeList}
          edit={ProjeEdit}
          create={ProjeCreate}
          show={ProjeShow}
        />
        <Resource
          name="Referans"
          list={ReferansList}
          edit={ReferansEdit}
          create={ReferansCreate}
          show={ReferansShow}
        />
      </Admin>
    </div>
  );
};

export default App;
