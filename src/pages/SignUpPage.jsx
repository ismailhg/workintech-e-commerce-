import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import { signupUser } from "../store/thunks/signupThunk";
import { getRoles } from "../store/thunks/clientThunk";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isValid, touchedFields, isSubmitting },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    shouldUnregister: true,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const roles = useSelector((state) => state.client.roles);

  const selectedRole = watch("role_id");

  useEffect(() => {
    const fetchRoles = async () => {
      const roles = await dispatch(getRoles());

      const defaultRole = roles.find((role) => role.code === "customer");

      if (defaultRole) {
        setValue("role_id", defaultRole.id);
      }
    };

    fetchRoles();
  }, [dispatch, setValue]);

  useEffect(() => {
    trigger();
  }, [selectedRole, trigger]);

  const onSubmit = async (data) => {
    const roleId = Number(data.role_id);

    let payload;

    if (roleId === 2) {
      payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: roleId,
        store: {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        },
      };
    } else {
      payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: roleId,
      };
    }

    const result = await dispatch(signupUser(payload));

    if (result.success) {
      setTimeout(() => {
        if (result.autoLoggedIn) {
          history.push("/");
        } else {
          history.push("/login");
        }
      }, 2000);
    }
  };

  return (
    <section className="py-16 flex justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-10 flex flex-col gap-5 w-[420px]"
      >
        <h2 className="text-2xl font-bold text-center text-[#252B42]">
          Create Account
        </h2>

        {/* NAME */}

        <div className="flex flex-col">
          <label>Name</label>

          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            className="border p-3 rounded"
          />

          {errors.name && touchedFields.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* EMAIL */}

        <div className="flex flex-col">
          <label>Email</label>

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="border p-3 rounded"
          />

          {errors.email && touchedFields.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* PASSWORD */}

        <div className="flex flex-col">
          <label>Password</label>

          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message: "Min 8 char with upper, lower, number and special",
              },
            })}
            className="border p-3 rounded"
          />

          {errors.password && touchedFields.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}

        <div className="flex flex-col">
          <label>Confirm Password</label>

          <input
            type="password"
            {...register("confirm_password", {
              required: "Confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className="border p-3 rounded"
          />

          {errors.confirm_password && touchedFields.confirm_password && (
            <p className="text-red-500 text-sm">
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        {/* ROLE */}

        <div className="flex flex-col">
          <label>Role</label>

          <select
            {...register("role_id")}
            value={selectedRole}
            className="border p-3 rounded"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* STORE FIELDS */}

        {selectedRole == 2 && (
          <div className="flex flex-col gap-4">
            <input
              placeholder="Store Name"
              {...register("store_name", {
                required: "Store name required",
                minLength: {
                  value: 3,
                  message: "Store name must be at least 3 characters",
                },
              })}
              className="border p-3 rounded"
            />

            {errors.store_name && touchedFields.store_name && (
              <p className="text-red-500 text-sm">
                {errors.store_name.message}
              </p>
            )}

            <input
              placeholder="Store Phone"
              {...register("store_phone", {
                required: "Phone number required",
                pattern: {
                  value: /^(\+90|0)?5\d{9}$/,
                  message: "Invalid phone number",
                },
              })}
              className="border p-3 rounded"
            />

            {errors.store_phone && touchedFields.store_phone && (
              <p className="text-red-500 text-sm">
                {errors.store_phone.message}
              </p>
            )}

            <input
              placeholder="Tax Number"
              {...register("store_tax_no", {
                required: "Tax number required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Format must be TXXXXVXXXXXX",
                },
              })}
              className="border p-3 rounded"
            />

            {errors.store_tax_no && touchedFields.store_tax_no && (
              <p className="text-red-500 text-sm">
                {errors.store_tax_no.message}
              </p>
            )}

            <input
              placeholder="IBAN"
              {...register("store_bank_account", {
                required: "IBAN required",
                pattern: {
                  value: /^TR\d{24}$/,
                  message: "Invalid IBAN",
                },
              })}
              className="border p-3 rounded"
            />

            {errors.store_bank_account && touchedFields.store_bank_account && (
              <p className="text-red-500 text-sm">
                {errors.store_bank_account.message}
              </p>
            )}
          </div>
        )}

        {/* SUBMIT */}

        <button
          disabled={!isValid || isSubmitting}
          className="bg-[#23A6F0] text-white h-12 rounded flex items-center justify-center gap-2 disabled:bg-blue-300"
        >
          {isSubmitting ? (
            <FontAwesomeIcon icon={faCircleNotch} spin />
          ) : (
            "Create Account"
          )}
        </button>
      </form>
    </section>
  );
}
