import axios from "../../utils/axios";
import { setUser } from "../actions/clientActions";
import { toast } from "react-toastify";

export const loginUser = (formData) => async (dispatch) => {

  try {

    const res = await axios.post("/login", {
      email: formData.email,
      password: formData.password
    });

    const user = {
      name: res.data.name,
      email: res.data.email,
      role_id: res.data.role_id
    };

    dispatch(setUser(user));

    axios.defaults.headers.common["Authorization"] = res.data.token;

    if (formData.remember) {
      localStorage.setItem("token", res.data.token);
    }

    toast.success("Login successful");

    return { success: true };

  } catch (err) {

    toast.error("Login failed");

    return { success: false };

  }
};

export const verifyToken = () => async (dispatch) => {

  const token = localStorage.getItem("token");

  if (!token) return;

  try {
    axios.defaults.headers.common["Authorization"] = token;

    const res = await axios.get("/verify");

    const user = {
      name: res.data.name,
      email: res.data.email,
      role_id: res.data.role_id
    };

    dispatch(setUser(user));
    
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common["Authorization"] = res.data.token;
    }

  } catch (err) {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    dispatch(setUser(null));
  }
};