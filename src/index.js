import React from "react";
import i18next from "i18next";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./controllers/App";

import en from "./i18n/en.json";

const gft = i18next.getFixedT.bind(i18next);
i18next.getFixedT = (lng, ns) => {
    const t = gft(lng, ns);

    const fixedT = (key, opts, ...rest) => {
        const tl = t(key, opts, ...rest);
        if (tl === key)
            return <span style={{ background: "#3a3" }}>{tl}</span>;
        return tl;
    };
    fixedT.lng = t.lng;
    fixedT.ns = t.ns;
    return fixedT;
};

i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
        en: {
            translation: en,
        },
    }
});

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById("root")
    );
};

serviceWorker.unregister();

render();
if (module.hot) {
    module.hot.accept("./controllers/App", () => {
        render();
    });
}