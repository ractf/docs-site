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
import { Switch as Switch_, Route as Route_, Redirect as Redirect_ } from "react-router-dom";

import DocsPage from "pages/DocsPage";
import OpenAPI from "pages/OpenAPI";

const Route = React.memo(Route_);
const Switch = React.memo(Switch_);
const Redirect = React.memo(Redirect_);


const Routes = () => {
    return <Switch>
        <Route path="/" exact>
            <Redirect to="/intro" />
        </Route>
        <Route path="/openapi-schema" component={OpenAPI} exact />
        <Route>
            <DocsPage />
        </Route>
    </Switch>;
};
export default React.memo(Routes);
