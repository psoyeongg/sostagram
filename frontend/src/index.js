import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import I18n from "redux-i18n";
import store, { history } from "./redux/configureStore";
import App from "./components/App";
// import { tranlations } from "./translations";
import { ConnectedRouter } from "connected-react-router";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <I18n translations={tranlations} initialLang="en" fallbackLang="en"> */}
        <App />
      {/* </I18n> */}
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
