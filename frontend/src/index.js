import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import I18n from 'redux-i18n';
import store from 'redux/configureStore';
import App from 'components/App';
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

