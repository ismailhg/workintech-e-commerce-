import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopePage";
import ProductDetails from "../pages/ProductDetails";

export default function PageContent() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    </main>
  );
}
