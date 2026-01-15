import { useNavigate } from "react-router-dom";
import Heading from "../Components/Shared/Reusable/Heading";
import AuthForm from "../Forms/AuthForm";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }
    console.log("Register data:", data);
    // API
  };

  return (
    <div className="mt-20 flex items-center justify-center  px-4">
      <div className="w-full max-w-md">
        <Heading title={"Register"}></Heading>

        <AuthForm
          fields={[
            { name: "name", type: "text", placeholder: "Name", required: true },
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
            {
              name: "confirmPassword",
              type: "password",
              placeholder: "Confirm Password",
              required: true,
            },
          ]}
          onSubmit={handleRegister}
          buttonText="Register"
          footerText="Already have an account?"
          footerLinkText="Login"
          onFooterClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};

export default Register;
