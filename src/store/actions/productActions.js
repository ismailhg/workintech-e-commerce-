export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories
});

export const setProductList = (products) => ({
  type: "SET_PRODUCT_LIST",
  payload: products
});

export const setTotal = (total) => ({
  type: "SET_TOTAL",
  payload: total
});

export const setFetchState = (state) => ({
  type: "SET_FETCH_STATE",
  payload: state
});

export const setLimit = (limit) => ({
  type: "SET_LIMIT",
  payload: limit
});

export const setOffset = (offset) => ({
  type: "SET_OFFSET",
  payload: offset
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter
});

export const setSort = (sort) => ({
  type: "SET_SORT",
  payload: sort
});

export const setCategoryId = (categoryId) => ({
  type: "SET_CATEGORY_ID",
  payload: categoryId
});