import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/shoppingCartActions";
import { Trash2 } from "lucide-react";

const ShoppingCartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart || []);

  const getId = (p) => p.id || p._id || p.product_id;

  const increase = () => {
    const newCart = cart.map((i) =>
      getId(i.product) === getId(item.product)
        ? { ...i, count: i.count + 1 }
        : i,
    );
    dispatch(setCart(newCart));
  };

  const decrease = () => {
    const newCart = cart.map((i) =>
      getId(i.product) === getId(item.product)
        ? { ...i, count: Math.max(1, i.count - 1) }
        : i,
    );
    dispatch(setCart(newCart));
  };

  const remove = () => {
    const newCart = cart.filter(
      (i) => getId(i.product) !== getId(item.product),
    );
    dispatch(setCart(newCart));
  };

  const toggle = () => {
    const newCart = cart.map((i) =>
      getId(i.product) === getId(item.product)
        ? { ...i, checked: !i.checked }
        : i,
    );
    dispatch(setCart(newCart));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center border border-gray-200 rounded-lg p-5 mb-4 bg-white">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={toggle}
          className="w-4 h-4 accent-[#23A6F0]"
        />

        <img
          src={item.product.images?.[0]?.url}
          className="w-[70px] h-[70px] object-cover rounded"
        />

        <div>
          <p className="text-sm font-semibold text-[#252B42]">
            {item.product.name}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 justify-end mt-4 md:mt-0">
        <div className="flex items-center border rounded-md overflow-hidden h-[36px]">
          <button onClick={decrease} className="px-3">
            -
          </button>

          <span className="px-4 text-sm">{item.count}</span>

          <button onClick={increase} className="px-3 text-[#23A6F0]">
            +
          </button>
        </div>

        <p className="text-[#23A6F0] font-bold text-sm w-[80px] text-right">
          {item.product.price} TL
        </p>

        <button onClick={remove} className="text-gray-400 hover:text-red-500">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
