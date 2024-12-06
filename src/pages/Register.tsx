import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const Register = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { showToast } = useAppContext();
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>();

    const mutation = useMutation(apiClient.register, {
        onSuccess: async () => {
            showToast({ message: "Registration Success", type: "SUCCESS" });
            await queryClient.invalidateQueries("validateToken");
            navigate("/");
        },
        onError: (err: Error) => {
            showToast({ message: err.message, type: "ERROR" });
        },
    });

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    });

    return (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold">Create An Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label className="text-gray-700 text-sm font-bold flex-1">
                    First Name
                    <input
                        type="text"
                        className="border rounded w-full py-1 px-2 font-normal"
                        {...register("firstName", {
                            required: "This Field Is Required",
                        })}
                    />
                    {errors.firstName && (
                        <span className="text-red-500">
                            {errors.firstName.message}
                        </span>
                    )}
                </label>
                <label
                    className="text-gray-700 text-sm font-bold flex-1"
                    htmlFor="last-name-input"
                >
                    Last Name
                    <input
                        type="text"
                        className="border rounded w-full py-1 px-2 font-normal"
                        {...register("lastName", {
                            required: "The Last Name Is Required",
                        })}
                    />
                    {errors.lastName && (
                        <span className="text-red-500">
                            {errors.lastName.message}
                        </span>
                    )}
                </label>
            </div>
            <label
                className="text-gray-700 text-sm font-bold flex-1"
                htmlFor="last-name-input"
            >
                Email
                <input
                    type="email"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("email", {
                        required: "The Email Is Required",
                    })}
                />
                {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                )}
            </label>
            <label
                className="text-gray-700 text-sm font-bold flex-1"
                htmlFor="last-name-input"
            >
                Password
                <input
                    type="password"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("password", {
                        required: "The Password Is Required",
                        minLength: {
                            value: 6,
                            message: "Password Must Be At Least 6 Characters",
                        },
                    })}
                />
                {errors.password && (
                    <span className="text-red-500">
                        {errors.password.message}
                    </span>
                )}
            </label>
            <label
                className="text-gray-700 text-sm font-bold flex-1"
                htmlFor="last-name-input"
            >
                Confirm Password
                <input
                    type="password"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("confirmPassword", {
                        validate: (val) => {
                            if (!val) return "This Field Is Required";
                            else if (watch("password") !== val) {
                                return "Your Passwords Do No Match";
                            }
                        },
                    })}
                />
                {errors.confirmPassword && (
                    <span className="text-red-500">
                        {errors.confirmPassword.message}
                    </span>
                )}
            </label>
            <span>
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
                >
                    Create Account
                </button>
            </span>
        </form>
    );
};

export default Register;