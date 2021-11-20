import { Header } from "./elements/Header/Header.js";
import { Home } from "./elements/Home/Home"
import { Footer } from "./elements/Footer/Footer"
import {Catalog} from "./elements/CatalogItem/CatlogItem"
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <Header isHomePage={true} />
              <Home />
            </Route>
            <Route path="/catalog">
              <Header isHomePage={false} />
              <Catalog />
            </Route>
            <Route path="/cart">
              <Header isHomePage={true} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;