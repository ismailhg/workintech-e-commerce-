import { useSelector } from "react-redux";
import ShoppingCartItem from "../components/ShoppingCartItem";
import OrderSummaryBox from "../components/OrderSummaryBox";

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.shoppingCart.cart || []);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <h1 className="text-xl md:text-2xl font-bold mb-6">
        Sepetim ({cart.length} Ürün)
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          {cart.map((item) => (
            <ShoppingCartItem key={item.product.id} item={item} />
          ))}
        </div>

        <div className="w-full lg:w-[320px]">
          <OrderSummaryBox />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
