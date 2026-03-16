import axios from "../../utils/axios";

import { setRoles } from "../actions/clientActions";

export const getRoles = () => async (dispatch, getState) => {

  const roles = getState().client.roles;

  if (roles.length > 0) return roles;

  try {

    const response = await axios.get("/roles");

    dispatch(setRoles(response.data));

    return response.data;
  } catch (error) {
      console.log(error);
  }
};