import { useSelector } from "react-redux";

const OrderSummaryBox = () => {
  const cart = useSelector((state) => state.shoppingCart.cart || []);

  const selected = cart.filter((i) => i.checked);

  const productTotal = selected.reduce(
    (acc, i) => acc + i.product.price * i.count,
    0,
  );

  const shipping = productTotal > 150 ? 0 : 29.99;
  const discount = shipping === 0 ? 29.99 : 0;
  const total = productTotal + shipping;

  return (
    <div className="bg-white border rounded-lg p-5 shadow-sm lg:sticky lg:top-10">
      <h2 className="text-lg font-semibold mb-4">Sipariş Özeti</h2>

      <div className="flex justify-between text-sm mb-2">
        <span>Ürünler</span>
        <span>{productTotal.toFixed(2)} TL</span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Kargo</span>
        <span>{shipping === 0 ? "Ücretsiz" : `${shipping} TL`}</span>
      </div>

      <div className="flex justify-between text-sm mb-4">
        <span>İndirim</span>
        <span className="text-[#23A6F0] font-medium">
          {discount > 0 ? `-${discount} TL` : "0 TL"}
        </span>
      </div>

      <hr className="mb-4" />
      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Toplam</span>
        <span className="text-[#23A6F0]">{total.toFixed(2)} TL</span>
      </div>

      <button className="w-full bg-[#23A6F0] text-white py-3 rounded-md font-semibold">
        Sepeti Onayla
      </button>
    </div>
  );
};

export default OrderSummaryBox;
