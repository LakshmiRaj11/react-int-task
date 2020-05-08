import React, { Suspense } from "react";
import Homepage from "./pages/home/homepage";
import AddEdit from "./pages/add-edit/add-edit";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';

const createRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/add" component={AddEdit}></Route>
                <Route path="/edit/:id" component={AddEdit}></Route>
            </Switch>
        </Router>
    </Suspense>
);

export default createRoutes;


// export default history();