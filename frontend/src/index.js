import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/configureStore';
import 'index.css';
import App from 'App';
import I18n from 'redux-i18n';
import { tranlations } from "translations";

// import "ReactotronConfig";

ReactDOM.render(
    <Provider store={store}>
        <I18n translations={tranlations} initialLang="en" fallbackLang="en">
            <App />
        </I18n>
    </Provider>,
    document.getElementById('root')
);

