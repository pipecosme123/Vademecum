import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PreConsulta } from '../Constants/Productos';
import { RoutersLinks } from '../Constants/RoutersLinks';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Menu from '../Pages/Menu';
import ViewProduct from '../Pages/ViewProduct';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={RoutersLinks.login} component={() => <Login /> }/>
                <Route exact path={RoutersLinks.home} component={() => <Home /> }/>
                <Route exact path={RoutersLinks.preConsulta} component={() => <Menu products={PreConsulta} /> }/>
                <Route path={RoutersLinks.viewProduct} children={<ViewProduct arrayProduct={PreConsulta} /> }/>
                {/* <Route path={RoutersLinks.viewProduct2} component={() => <ViewProduct arrayProduct={PreConsulta[1]} /> }/> */}
            </Switch>
        </Router>
    );
};

export default Routers;