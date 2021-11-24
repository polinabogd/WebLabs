import { Header } from "./elements/Header/Header.js";
import { Home } from "./elements/Home/Home"
import { Footer } from "./elements/Footer/Footer"
import {Catalog} from "./elements/Catalog/Catlog"
import {BrowserRouter, Route, Switch} from "react-router-dom";

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
                  </Route>
              </Switch>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;