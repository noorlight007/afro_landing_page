import React, { useState } from "react";

const BlogCommentSection = () => {
  const [comments, setComments] = useState([
    {
      name: "Jennifer Aniston",
      date: "December 01, 2024",
      message: "Wonderful. That’s a good news actually.",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const newComment = {
        name: formData.name,
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        }),
        message: formData.message,
      };
      setComments([...comments, newComment]);
      setFormData({ name: "", email: "", message: "" });
    }
  };
  return (
    <div className="  pt-6">
      <h3 className="text-xl  mb-4">({comments.length}) Comments</h3>

      {comments.map((comment, index) => (
        <div key={index} className="mb-6  pb-4">
          <div className="flex justify-between items-center mb-1">
            <h4 className=" text-xl font-medium">{comment.name}</h4>
            <span className="text-sm opacity-50">{comment.date}</span>
          </div>
          <p className="opacity-60">{comment.message}</p>
        </div>
      ))}

      <div className="mt-10">
        <h4 className="text-xl  mb-2">Write a Comment</h4>
        <p className="text-sm opacity-60 mb-4">
          Your email address will not be published. Required fields are marked{" "}
          <span className="text-red-500">*</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full border-b-2 hover:border border-gray-300 focus:outline-primary/50 focus:outline-4 p-2 resize-none"
            rows="4"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border-b  hover:border border-gray-400 focus:outline-primary/50 focus:outline-4 p-2"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-b  hover:border border-gray-400 focus:outline-primary/50 focus:outline-4 p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 mt-4 rounded-full "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogCommentSection;
