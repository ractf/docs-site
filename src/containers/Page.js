import React from "react";
import { SideNav, Page as BasePage, H4 } from "@ractf/ui-kit";
import { Link } from "react-router-dom";
import { docs } from "ractf";
import { toSentence } from "@ractf/util/cases";
import { useReactRouter } from "@ractf/util";


const Items = ({ items, path = "/" }) => {
    let { location: { pathname } } = useReactRouter();
    pathname = "/" + pathname.replace(/(^\/+)|(\/+$)/g, "");

    return <>
        {items[""].map(key => {
            const url = `${path}${key}`;
            return (
                <Link to={url} key={"." + key}>
                    <SideNav.Item active={pathname === url}>
                        {key ? toSentence(key) : "Index"}
                    </SideNav.Item>
                </Link>
            );
        })}
        {Object.keys(items).map(key => {
            if (key === "") return null;

            const url = `${path}${key}/`;
            return <SideNav.SubMenu name={toSentence(key)} key={key} isOpen>
                <Items items={items[key]} path={url} />
            </SideNav.SubMenu>;
        })}
    </>;
};

const Page = ({ children, noBase }) => {
    const tree = { "": [] };
    Object.keys(docs).forEach(key => {
        const path = key.replace(/^\/+/, "").replace(/\/+$/, "").split("/");
        let obj = tree;
        for (let n = 0; n < path.length - 1; n++) {
            if (typeof obj[path[n]] === "undefined")
                obj[path[n]] = { "": [] };
            obj = obj[path[n]];
        }
        obj[""].push(path[path.length - 1]);
    });

    const Base = !noBase ? BasePage : "div";

    return (
        <SideNav header={<H4>RACTF Docs</H4>} items={<Items items={tree} />} LinkElem={Link} ractfSidebar>
            <Base>
                {children}
            </Base>
        </SideNav>
    );
};
export default React.memo(Page);
