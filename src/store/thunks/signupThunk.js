import axios from "../../utils/axios";
import { toast } from "react-toastify";

export const signupUser = (userData) => async () => {

  try {
    await axios.post("/signup", userData);

    toast.success("Registration successful!");

    return { success: true };

  } catch (error) {
    toast.error("Signup failed");

    return { success: false };

  }

};