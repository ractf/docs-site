import React from "react";
import { RedocStandalone } from "redoc";

import Page from "containers/Page";


const OPTIONS = {
    hideHostname: true,
    theme: {
        colors: {
            primary: {
                main: "#fff",
            },
            text: {
                primary: "#fff",
                secondary: "#eee",
            },
            border: {
                dark: "#fff",
                light: "#0F0E1A",
            },
            http: {
                get: "#02b875",
                delete: "#d9534f",
                post: "#4582ec",
                patch: "#f0ad4e",
                put: "#6f42c1",
            },
        },
        schema: {
            nestedBackground: "#1e1c34",
        },
        logo: {
            gutter: "32px",
        },
        typography: {
            fontFamily: "Lato, sans-serif",
            headings: {
                color: "#f0f",
                fontFamily: "Lato, sans-serif",
            },
            code: {
                fontFamily: "'Roboto Mono', sans-serif",
            },
        },
        sidebar: {
            backgroundColor: "#1e1c34",
            textColor: "#fff",
        },
        rightPanel: {
            backgroundColor: "#1d1c33",
        },
    }
};

const OpenAPI = () => {
    console.log(RedocStandalone);
    return <Page noBase>
        <div style={{color: "#fff"}}>
            <RedocStandalone specUrl="openapi-schema.yml" options={OPTIONS} />
        </div>
    </Page>;
};
export default OpenAPI;
