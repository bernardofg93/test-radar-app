import React from 'react';
import AppContainer from "./presentation/navigation";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./presentation/store/store.ts";

function App(): React.JSX.Element {
  return (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
       </PersistGate>
     </Provider>
  );
}
export default App;
