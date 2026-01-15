import { FaArrowRight } from "react-icons/fa";
import InputField from "../Components/Shared/Reusable/InputField";
import TextAreaField from "../Components/Shared/Reusable/TextAreaField";
import BtnWithIcon from "../Buttons/BtnWithIcon";

const ContactUsForm = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  mutation,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <InputField
              name="name"
              placeholder="Your Name"
              register={register}
              required
            />
            {errors.name && (
              <p className="text-error text-xs lg:text-sm mt-1">
                Name is required
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <InputField
              type="email"
              name="email"
              placeholder="Email Address"
              register={register}
              required
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Salon Name */}
          <div>
            <InputField
              name="salon"
              placeholder="Salon Name"
              register={register}
              required
            />
            {errors.salon && (
              <p className="text-error text-sm mt-1">Salon name is required</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <InputField
              name="subject"
              placeholder="Subject"
              register={register}
              required
            />
            {errors.subject && (
              <p className="text-error text-sm mt-1">Subject is required</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <TextAreaField
            name="message"
            placeholder="Your Message"
            register={register}
            required
          />
          {errors.message && (
            <p className="text-error text-sm mt-1">Message is required</p>
          )}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <BtnWithIcon
            className="bg-blue-600"
            type="submit"
            text="SUBMIT"
            isLoading={mutation.isLoading}
            disabled={mutation.isLoading}
            rightIcon={FaArrowRight}
          />
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
