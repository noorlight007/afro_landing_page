import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import BtnSpinner from "../Components/Shared/Reusable/BtnSpinner";
import AuthForm from "../Forms/AuthForm";
import usePageTitle from "../hooks/usePageTitle";
import {
  ErrorAlert,
  SuccessAlert,
} from "../Components/Shared/Reusable/SwalAlerts";

const Login = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }) => {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      const res = await axiosPublic.post("/confirm_login/", formData);
      return res.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        localStorage.setItem("admin_uid", data.uid);

        SuccessAlert("Login Successful");

        navigate("/fqz/admin/panel");
      } else {
        ErrorAlert("Login Failed", data.error || "Invalid credentials");
      }
    },
    onError: () => {
      ErrorAlert("Oops...", "An unexpected error occurred. Please try again.");
    },
  });

  const handleLogin = (data) => {
    mutate(data);
  };
  usePageTitle("Login");
  return (
    <div className="flex items-center justify-center px-6 bg-slate-100 min-h-screen">
      <div className="w-full max-w-md">
        {/* title image */}
        <Link to={"/"}>
          <img className="w-1/2 mx-auto mb-6 lg:mb-10" src={logo} alt="logo" />
        </Link>
        {/* form */}
        <AuthForm
          fields={[
            {
              name: "email",
              type: "email",
              placeholder: "Email",
              required: true,
            },
            {
              name: "password",
              type: "password",
              placeholder: "Password",
              required: true,
            },
          ]}
          onSubmit={handleLogin}
          buttonText={isPending ? <BtnSpinner /> : "Login"}
          footerText="Don't have an account?"
          footerLinkText="Register"
          formType="login"
          onFooterClick={() => navigate("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
