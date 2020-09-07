import React from "react";
import { docs } from "ractf";
import { useReactRouter } from "@ractf/util";
import { Redirect, Link } from "react-router-dom";
import { Markdown, H1, H6, Column } from "@ractf/ui-kit";
import Page from "containers/Page";

const DocsPage = () => {
    const { location: { pathname } } = useReactRouter();
    const page = docs[pathname.slice(1)];

    if (typeof page === "undefined") {
        if (typeof docs[pathname.slice(1) + "/"] !== "undefined") {
            return <Redirect to={pathname + "/"} />;
        }
        return <Page>
            <Column centre>
                <div style={{ textAlign: "center", width: "100%" }}>
                    <H1>Page not found</H1>
                    <H6>If an internal link took you here, it's possible this page may have moved.</H6>
                    <H6>Please let somebody know so the link can be updated.</H6>
                </div>
            </Column>
        </Page>;
    }
    return <Page>
        <Markdown LinkElem={Link} source={page} />
    </Page>;
};
export default DocsPage;
