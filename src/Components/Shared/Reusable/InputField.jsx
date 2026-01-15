const InputField = ({
  type = "text",
  name,
  register,
  placeholder,
  required,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        {...register(name, { required })}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-200 focus:ring-secondary"
        }`}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message || "This field is required"}
        </p>
      )}
    </div>
  );
};

export default InputField;
