import { useForm, useFieldArray, Controller } from "react-hook-form";
import InputField from "../../Components/Shared/Reusable/InputField";
import Heading from "../../Components/Shared/Reusable/Heading";
import TiptapEditor from "../../Components/Shared/Reusable/TiptapEditor";
import { IoMdAdd } from "react-icons/io";
import BtnWithIcon from "../../Buttons/BtnWithIcon";

const CreateBlogs = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      coverPhoto: "",
      category: "",
      author: "",
      content: [{ title: "", content: "" }],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "content",
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="w-full max-w-xl lg:max-w-3xl p-6 my-10 sm:my-0 mx-auto">
      <Heading title={"Create New Blog"} />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Blog Title */}
          <div>
            <label className="block font-medium mb-1">Blog Title</label>
            <InputField
              name="title"
              register={register}
              placeholder="Enter blog title"
              required
              error={errors.title}
            />
          </div>

          {/* Cover Photo */}
          <div>
            <label className="block font-medium mb-1">Cover Photo</label>
            <InputField
              type="url"
              name="coverPhoto"
              register={register}
              placeholder="Enter cover photo URL"
              required
              error={errors.coverPhoto}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <InputField
              name="category"
              register={register}
              placeholder="Enter category"
              required
              error={errors.category}
            />
          </div>

          {/* Author */}
          <div>
            <label className="block font-medium mb-1">Author</label>
            <InputField
              name="author"
              register={register}
              placeholder="Enter author name"
              required
              error={errors.author}
            />
          </div>
        </div>

        {/* Blog Content Sections */}
        <div>
          <label className="block font-medium mb-2">Blog Content</label>
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="p-4 mb-4 border border-gray-300 rounded"
            >
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">
                  Section Title
                </label>
                <InputField
                  name={`content.${index}.title`}
                  register={register}
                  placeholder="Enter section title"
                  required
                  error={errors?.content?.[index]?.title}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Content
                </label>
                <Controller
                  control={control}
                  name={`content.${index}.content`}
                  rules={{ required: "Content is required" }}
                  render={({ field }) => (
                    <TiptapEditor
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />

                {errors?.content?.[index]?.content && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.content[index].content.message}
                  </p>
                )}
              </div>
            </div>
          ))}
          {/* add content */}
          <BtnWithIcon
            text=" Add More Content"
            onClick={() => append({ title: "", content: "" })}
            leftIcon={IoMdAdd}
            className="bg-accent text-white"
          ></BtnWithIcon>
        </div>

        {/* Submit Button */}
        <BtnWithIcon
          type="submit"
          text="Submit"
          className="w-full bg-accent text-white "
        >
          Submit
        </BtnWithIcon>
      </form>
    </div>
  );
};

export default CreateBlogs;
