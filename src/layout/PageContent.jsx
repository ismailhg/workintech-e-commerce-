import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopePage";
import ProductDetails from "../pages/ProductDetails";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import AboutPage from "../pages/AboutPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import ShoppinhCartPage from "../pages/ShoppinhCartPage";

export default function PageContent() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          component={ProductDetails}
        />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/shoppingcart" component={ShoppinhCartPage} />
      </Switch>
    </main>
  );
}
