import { Header } from "./elements/Header/Header.js";
import { Home } from "./elements/Home/Home"
import { Cart } from "./elements/Cart/Cart"
import { Footer } from "./elements/Footer/Footer"
import {Catalog} from "./elements/Catalog/Catlog"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {Checkout} from "./elements/Checkout/Checkout"
import {Success} from "./elements/Success/Success"

function App() {
return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                    </Route>
                    <Route path="/catalog">
                        <Catalog/>
                    </Route>
                    <Route path="/cart">
                        <Header/>
                        <Cart/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/success">
                        <Success />
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
);
}

export default App;