import { Grip, SlidersHorizontal } from "lucide-react";
import ShopProductCard from "./ShopProductCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/thunks/productThunks";
import {
  setOffset,
  setFilter,
  setSort,
} from "../../store/actions/productActions";

export default function ShopProducts() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.productList);
  const total = useSelector((state) => state.product.total);
  const fetchState = useSelector((state) => state.product.fetchState);
  const limit = useSelector((state) => state.product.limit);
  const offset = useSelector((state) => state.product.offset);
  const filter = useSelector((state) => state.product.filter);
  const sort = useSelector((state) => state.product.sort);
  const categoryId = useSelector((state) => state.product.categoryId);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tempFilter, setTempFilter] = useState("");

  const currentPage = offset / limit + 1;
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, offset, filter, sort, categoryId]);

  useEffect(() => {
    if (isFilterOpen) {
      setTempFilter(filter || "");
    }
  }, [isFilterOpen]);

  const changePage = (page) => {
    const newOffset = (page - 1) * limit;
    dispatch(setOffset(newOffset));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const applyFilter = () => {
    dispatch(setFilter(tempFilter));
    dispatch(setOffset(0));
  };

  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages)
      return [totalPages - 2, totalPages - 1, totalPages];

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const visiblePages = getVisiblePages();

  if (fetchState === "FETCHING") {
    return (
      <div className="max-w-[1200px] mx-auto px-5 py-20 text-center">
        Loading products...
      </div>
    );
  }

  const slugify = (text) =>
    text
      ?.toLowerCase()
      .replace(/ı/g, "i")
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/\s+/g, "-") || "kategori";

  return (
    <div className="max-w-[1200px] mx-auto px-5 py-20">
      <div className="flex flex-col items-center gap-8 mb-16 md:flex-row md:justify-between md:items-center">
        <span className="text-sm font-bold text-[#737373]">
          Showing {products.length} of {total} results
        </span>

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-16">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-[#737373]">Views:</span>

            <div className="flex gap-3">
              <div className="w-[46px] h-[46px] border border-[#DDDDDD] rounded flex items-center justify-center">
                <Grip size={18} />
              </div>

              <div className="w-[46px] h-[46px] border border-[#DDDDDD] rounded flex items-center justify-center">
                <SlidersHorizontal size={18} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {isFilterOpen && (
              <input
                type="text"
                placeholder="Search..."
                value={tempFilter}
                onChange={(e) => setTempFilter(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    applyFilter();
                  }
                }}
                className="h-[46px] px-4 border border-[#DDDDDD] bg-white text-sm rounded"
              />
            )}

            <select
              value={sort || ""}
              onChange={(e) => {
                dispatch(setSort(e.target.value));
                dispatch(setOffset(0));
              }}
              className="h-[46px] px-6 border border-[#DDDDDD] bg-white text-sm rounded"
            >
              <option value="">Popularity</option>
              <option value="price:asc">Price: Low to High</option>
              <option value="price:desc">Price: High to Low</option>
              <option value="rating:asc">Rating: Low to High</option>
              <option value="rating:desc">Rating: High to Low</option>
            </select>

            <button
              onClick={() => {
                if (!isFilterOpen) {
                  setIsFilterOpen(true);
                } else {
                  applyFilter();
                }
              }}
              className="h-[46px] px-8 bg-[#23A6F0] text-white text-sm font-bold rounded"
            >
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/shop/${slugify(product.category?.gender || "kadin")}/${slugify(product.category?.name)}/${product.category_id}/${slugify(product.name)}/${product.id}`}
            className="w-full cursor-pointer"
          >
            <ShopProductCard product={product} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <div className="flex rounded-md overflow-hidden border border-[#D5D5D5] shadow-sm">
          <button
            onClick={() => changePage(1)}
            className="px-5 py-6 text-sm bg-[#F3F3F3] text-[#BDBDBD] border-r border-[#D5D5D5]"
          >
            First
          </button>

          {visiblePages.map((page) => {
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                onClick={() => changePage(page)}
                className={`px-5 text-sm border-r border-[#D5D5D5] ${
                  isActive ? "text-white bg-[#23A6F0]" : "text-[#23A6F0]"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => {
              if (currentPage < totalPages) {
                changePage(currentPage + 1);
              }
            }}
            className="px-5 text-sm text-[#23A6F0]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
