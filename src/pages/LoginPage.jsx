import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/thunks/authThunk";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data));

    if (result?.success) {
      if (history.length > 1) {
        history.goBack();
      } else {
        history.push("/");
      }
    }
  };

  return (
    <section className="flex justify-center py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg p-8 rounded flex flex-col gap-4 w-[400px]"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          placeholder="Email"
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          })}
          className="border p-3 rounded"
        />

        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password required" })}
          className="border p-3 rounded"
        />

        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <label className="flex gap-2">
          <input type="checkbox" {...register("remember")} />
          Remember me
        </label>

        <button className="bg-blue-500 text-white h-12 rounded">Login</button>
      </form>
    </section>
  );
}
