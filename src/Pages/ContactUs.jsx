import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Container from "../Components/Shared/Reusable/Container";
import Heading from "../Components/Shared/Reusable/Heading";
import ContactUsForm from "../Forms/ContactUsForm";
import usePageTitle from "../hooks/usePageTitle";

const sendContactData = async (formData) => {
  const response = await axios.post("/api", formData);
  return response.data;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: sendContactData,
    onSuccess: () => {
      alert("Message sent successfully!");
      reset();
    },
    onError: () => {
      alert("Something went wrong. Please try again.");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };
  usePageTitle("Contact");
  return (
    <div className="outfit">
      <div className="bg-blue-600 pb-1 md:pb-10 pt-16 md:pt-20 text-white ">
        <Heading title={"Contact Us"}></Heading>
      </div>
      <Container className="max-w-lg md:max-w-4xl text-center mt-10 md:mt-20 lg:mt-32">
        <h4 className="text-xs lg:text-sm xl:text-lg font-bold uppercase mb-2 opacity-50">
          Get in Touch
        </h4>
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold mb-4 opacity-90">
          How Can We Help?
        </h2>
        <p className="mb-10 xl:mb-20 text-sm lg:text-base xl:text-lg opacity-70">
          Contact us to request a quote or to schedule a consultation with our
          team.
        </p>
        {/* form */}
        <ContactUsForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          mutation={mutation}
        ></ContactUsForm>
      </Container>
    </div>
  );
};

export default ContactUs;
