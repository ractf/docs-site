// Copyright (C) 2020 Really Awesome Technology Ltd
//
// This file is part of RACTF.
//
// RACTF is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// RACTF is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with RACTF.  If not, see <https://www.gnu.org/licenses/>.

import React from "react";
import { toKebab } from "@ractf/util/cases";

export const appContext = React.createContext({});

export const docs = {};

(r => r.keys().forEach(key => {
    let pageKey = key.slice(2, key.length - 3);
    if (/\/index$/.test(pageKey) || pageKey === "index")
        pageKey = pageKey.slice(0, pageKey.length - 5);
    pageKey = pageKey.split("/").map(toKebab).join("/");
    docs[pageKey] = r(key).default;
}))(
    require.context("./docs/docs", true, /\.(md)$/)
);
