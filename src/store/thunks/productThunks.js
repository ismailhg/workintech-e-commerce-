import axios from "../../utils/axios";
import {
  setProductList,
  setTotal,
  setFetchState
} from "../actions/productActions";

export const fetchProducts = () => async (dispatch, getState) => {

  const { limit, offset, filter, sort, categoryId } = getState().product;

  try {
    dispatch(setFetchState("FETCHING"));

    const params = {
      limit,
      offset,
    };

    if (filter && filter.trim() !== "") {
      params.filter = filter;
    }

    if (sort) {
      params.sort = sort;
    }

    if (categoryId) {
      params.category = categoryId;
    }

    const response = await axios.get("/products", { params });

    dispatch(setProductList(response.data.products));
    dispatch(setTotal(response.data.total));

    dispatch(setFetchState("FETCHED"));

  } catch (error) {
    dispatch(setFetchState("FAILED"));
  }
};