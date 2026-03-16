import axios from "axios";

export const SET_CATEGORIES = "SET_CATEGORIES";

export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://workintech-fe-ecommerce.onrender.com/categories"
      );

      dispatch(setCategories(response.data));
    } catch (error) {
      console.error("Category fetch error:", error);
    }
  };
};