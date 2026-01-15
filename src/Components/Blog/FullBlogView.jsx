import { FaComments, FaTags } from "react-icons/fa";
import BlogContent from "./BlogContent";

const FullBlogView = ({ blog }) => {
  const { image, title, author, date, category, content } = blog || {};
  return (
    <>
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full  max-h-72  md:max-h-96 md:h-80 xl:h-96 object-cover"
      />

      {/* Title */}
      <h1 className="text-[28px] font-bold leading-tight mt-6 mb-1">{title}</h1>

      {/* Author and Date */}
      <section className="flex flex-col sm:flex-row justify-between text-sm gap-3 mb-3">
        <div className="opacity-50">
          {author} · {date}
        </div>
        <div className="flex gap-10">
          <span className="flex items-center gap-1 opacity-80">
            <FaTags className="text-xl" />
            {category}
          </span>
          {/* <span className="flex items-center gap-1 opacity-80">
            <FaComments className="text-xl" />1 comments
          </span> */}
        </div>
      </section>
      <hr className="opacity-50" />

      {/* Blog Content */}
      {content && <BlogContent content={content} />}

      <hr className="opacity-20 mt-20" />

  
    </>
  );
};

export default FullBlogView;
